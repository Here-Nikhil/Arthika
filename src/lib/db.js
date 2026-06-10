// ─────────────────────────────────────────────────────────────
// db.js — Every Supabase call lives here.
// Screens never import supabase directly — they use these fns.
// All functions are no-ops when supabase is null (demo mode).
// ─────────────────────────────────────────────────────────────

import { supabase } from "./supabase.js";

// ── AUTH ─────────────────────────────────────────────────────

/** Send OTP to phone (auto-adds +91 if not present) */
export async function sendPhoneOTP(phone) {
  if (!supabase) throw new Error("Backend not configured");
  const formatted = phone.startsWith("+") ? phone : `+91${phone.replace(/\D/g, "")}`;
  const { error } = await supabase.auth.signInWithOtp({ phone: formatted });
  if (error) throw error;
  return formatted;
}

/** Verify the 6-digit OTP */
export async function verifyPhoneOTP(phone, token) {
  if (!supabase) throw new Error("Backend not configured");
  const formatted = phone.startsWith("+") ? phone : `+91${phone.replace(/\D/g, "")}`;
  const { data, error } = await supabase.auth.verifyOtp({ phone: formatted, token, type: "sms" });
  if (error) throw error;
  return data.user;
}

/** Sign up with email + password */
export async function signUpEmail(email, password, name) {
  if (!supabase) throw new Error("Backend not configured");
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: name } },
  });
  if (error) throw error;
  return data.user;
}

/** Sign in with email + password */
export async function signInEmail(email, password) {
  if (!supabase) throw new Error("Backend not configured");
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data.user;
}

/** Sign out */
export async function signOut() {
  if (!supabase) return;
  await supabase.auth.signOut();
}

/** Get current session user */
export async function getSessionUser() {
  if (!supabase) return null;
  const { data: { session } } = await supabase.auth.getSession();
  return session?.user ?? null;
}

/** Subscribe to auth state changes */
export function onAuthChange(callback) {
  if (!supabase) return { data: { subscription: { unsubscribe: () => {} } } };
  return supabase.auth.onAuthStateChange((_event, session) => {
    callback(session?.user ?? null);
  });
}

// ── PROFILE ───────────────────────────────────────────────────

/** Fetch full profile row for a user */
export async function getProfile(userId) {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();
  if (error) throw error;
  return data;
}

/** Update any profile fields */
export async function updateProfile(userId, patch) {
  if (!supabase) return;
  const { error } = await supabase
    .from("profiles")
    .update(patch)
    .eq("id", userId);
  if (error) throw error;
}

// ── XP & STREAK ───────────────────────────────────────────────

/**
 * Award XP using the server-side function.
 * This also updates streak atomically — can't be cheated client-side.
 */
export async function awardXP(userId, xpAmount) {
  if (!supabase) return;
  const { error } = await supabase.rpc("award_xp", {
    p_user_id: userId,
    p_xp: xpAmount,
  });
  if (error) throw error;
}

// ── LESSON PROGRESS ───────────────────────────────────────────

/** Mark a lesson complete (idempotent — safe to call multiple times) */
export async function completeLesson(userId, lessonId, moduleId, xpEarned) {
  if (!supabase) return;
  const { error } = await supabase
    .from("lesson_progress")
    .upsert(
      { user_id: userId, lesson_id: lessonId, module_id: moduleId, xp_earned: xpEarned },
      { onConflict: "user_id,lesson_id" }
    );
  if (error) throw error;
  // Award XP server-side (updates streak too)
  await awardXP(userId, xpEarned);
}

/** Get all completed lesson IDs as a Set */
export async function getCompletedLessons(userId) {
  if (!supabase) return new Set();
  const { data, error } = await supabase
    .from("lesson_progress")
    .select("lesson_id")
    .eq("user_id", userId);
  if (error) throw error;
  return new Set((data ?? []).map(r => r.lesson_id));
}

// ── QUIZ SCORES ───────────────────────────────────────────────

/** Save a quiz attempt (pass or fail) */
export async function saveQuizScore({ userId, lessonId, moduleId, score, total, livesLeft, xpEarned, passed }) {
  if (!supabase) return;
  const { error } = await supabase.from("quiz_scores").insert({
    user_id:    userId,
    lesson_id:  lessonId,
    module_id:  moduleId,
    score,
    total,
    lives_left: livesLeft,
    xp_earned:  xpEarned,
    passed,
  });
  if (error) throw error;
}

/** Get quiz history for a user (most recent first) */
export async function getQuizHistory(userId) {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("quiz_scores")
    .select("*")
    .eq("user_id", userId)
    .order("attempted_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

// ── CHAT HISTORY ──────────────────────────────────────────────

/** Save a single chat message (user or bot) */
export async function saveChatMessage({ userId, role, message, topic, language = "en", mode = "normal" }) {
  if (!supabase) return;
  const { error } = await supabase.from("chat_history").insert({
    user_id: userId, role, message, topic, language, mode,
  });
  if (error) throw error;
}

/** Load the last 60 messages for a user, oldest first */
export async function getChatHistory(userId) {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("chat_history")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(60);
  if (error) throw error;
  return (data ?? []).reverse().map(r => ({
    role:  r.role,
    text:  r.message,
    topic: r.topic,
  }));
}

/** Clear all chat history for a user */
export async function clearChatHistory(userId) {
  if (!supabase) return;
  await supabase.from("chat_history").delete().eq("user_id", userId);
}

// ── LEADERBOARD ───────────────────────────────────────────────

/** Fetch top N users from the public leaderboard view */
export async function getLeaderboard(limit = 20) {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("leaderboard")
    .select("*")
    .limit(limit);
  if (error) throw error;
  return data ?? [];
}
