import { useState, useCallback } from "react";
import {
  getProfile, updateProfile,
  completeLesson as dbCompleteLesson,
  getCompletedLessons,
  saveQuizScore,
  getChatHistory,
} from "../lib/db.js";
import { levelMeta } from "../data/knowledgeGraph.js";

const DEFAULT_PROFILE = {
  display_name: "Learner",
  xp:           0,
  gems:         50,
  streak_count: 0,
  mode:         "beginner",
  language:     "en",
  avatar_emoji: "⭐",
  avatar_url:   null,
  onboarded:    false,
};

// ── localStorage helpers ──────────────────────────────────────
function lsKey(uid)     { return `arthika_prefs_${uid}`; }
function saveLs(uid, p) { try { localStorage.setItem(lsKey(uid), JSON.stringify(p)); } catch {} }
function loadLs(uid)    { try { const r = localStorage.getItem(lsKey(uid)); return r ? JSON.parse(r) : null; } catch { return null; } }

export function useProfile(uid) {
  const [profile,   setProfile]   = useState(DEFAULT_PROFILE);
  const [completed, setCompleted] = useState(new Set());
  const [chatSeed,  setChatSeed]  = useState([]);
  const [loading,   setLoading]   = useState(false);

  // ── Load from DB + merge with localStorage ────────────────
  const loadProfile = useCallback(async () => {
    if (!uid) return null;

    const local = loadLs(uid);
    if (local) setProfile(p => ({ ...p, ...local }));

    setLoading(true);
    try {
      let prof = await getProfile(uid);

      // ── Auto-create profile if it doesn't exist ──────────
      if (!prof) {
        await updateProfile(uid, {
          ...DEFAULT_PROFILE,
          id: uid,
        });
        prof = await getProfile(uid);
      }

      const [comp, history] = await Promise.all([
        getCompletedLessons(uid),
        getChatHistory(uid),
      ]);

      if (prof) {
        const merged = {
          ...prof,
          language:     local?.language     ?? prof.language     ?? "en",
          mode:         local?.mode         ?? prof.mode         ?? "beginner",
          avatar_emoji: local?.avatar_emoji ?? prof.avatar_emoji ?? "⭐",
          avatar_url:   local?.avatar_url   ?? prof.avatar_url   ?? null,
          onboarded:    local?.onboarded    ?? false,
        };
        setProfile(merged);
        saveLs(uid, {
          language:     merged.language,
          mode:         merged.mode,
          onboarded:    local?.onboarded ?? false,
          avatar_emoji: merged.avatar_emoji,
          avatar_url:   merged.avatar_url,
        });
        setCompleted(comp);
        if (history.length > 0) setChatSeed(history);
        return merged;
      }
    } catch (e) {
      console.warn("loadProfile: DB failed, using localStorage", e);
    } finally {
      setLoading(false);
    }

    return local ?? null;
  }, [uid]);

  // ── Refresh XP/streak from DB (after earning XP) ──────────
  const refreshProfile = useCallback(async () => {
    if (!uid) return;
    try {
      const prof = await getProfile(uid);
      if (prof) {
        setProfile(p => ({
          ...p,
          xp:           prof.xp           ?? p.xp,
          streak_count: prof.streak_count ?? p.streak_count,
          gems:         prof.gems         ?? p.gems,
          display_name: prof.display_name ?? p.display_name,
          avatar_emoji: prof.avatar_emoji ?? p.avatar_emoji,
          avatar_url:   prof.avatar_url   ?? p.avatar_url,
        }));
      }
    } catch (e) { console.warn("refreshProfile failed", e); }
  }, [uid]);

  // ── Update avatar (emoji or image URL) ───────────────────
  const updateAvatar = useCallback(async ({ avatar_emoji, avatar_url }) => {
    const patch = {
      avatar_emoji: avatar_emoji ?? "⭐",
      avatar_url:   avatar_url   ?? null,
    };
    setProfile(p => ({ ...p, ...patch }));
    const ls = loadLs(uid) ?? {};
    saveLs(uid, { ...ls, ...patch });
    if (uid) {
      try { await updateProfile(uid, patch); }
      catch (e) { console.warn("updateAvatar DB sync failed", e); }
    }
  }, [uid]);

  // ── Earn XP + mark lesson complete ───────────────────────
  const earnXP = useCallback(async (xpAmount, lessonId, moduleId) => {
    setProfile(p => ({ ...p, xp: p.xp + xpAmount }));
    setCompleted(prev => new Set([...prev, lessonId]));
    if (uid) {
      try {
        await dbCompleteLesson(uid, lessonId, moduleId, xpAmount);
        const prof = await getProfile(uid);
        if (prof) {
          setProfile(p => ({
            ...p,
            xp:           prof.xp           ?? p.xp,
            streak_count: prof.streak_count ?? p.streak_count,
            gems:         prof.gems         ?? p.gems,
          }));
        }
      } catch (e) { console.warn("earnXP failed", e); }
    }
  }, [uid]);

  // ── Record quiz score ────────────────────────────────────
  const recordQuiz = useCallback(async (lessonId, score, total) => {
    const gems   = Math.round((score / total) * 10);
    const passed = score === total;
    setProfile(p => ({ ...p, gems: p.gems + gems }));
    if (uid) {
      const payload = { lessonId, score, total, gems, passed };
      try { await saveQuizScore({ userId: uid, ...payload }); }
      catch (e) { console.warn("recordQuiz failed", e); }
    }
  }, [uid]);

  // ── Set mode ──────────────────────────────────────────────
  const setMode = useCallback(async (newMode) => {
    setProfile(p => ({ ...p, mode: newMode }));
    if (uid) {
      saveLs(uid, { ...loadLs(uid), mode: newMode });
      updateProfile(uid, { mode: newMode }).catch(() => {});
    }
  }, [uid]);

  // ── Set language ──────────────────────────────────────────
  const setLanguage = useCallback(async (newLang) => {
    setProfile(p => ({ ...p, language: newLang }));
    if (uid) {
      saveLs(uid, { ...loadLs(uid), language: newLang });
      updateProfile(uid, { language: newLang }).catch(() => {});
    }
  }, [uid]);

  // ── Save onboarding preferences ───────────────────────────
  const savePreferences = useCallback(async ({ language, mode }) => {
    const prefs = { language, mode, onboarded: true };
    setProfile(p => ({ ...p, ...prefs }));
    if (uid) {
      saveLs(uid, prefs);
      updateProfile(uid, prefs).catch(e =>
        console.warn("savePreferences Supabase write failed (localStorage saved)", e)
      );
    }
  }, [uid]);

  const { lvl, pct: lvlPct, to: lvlTo } = levelMeta(profile.xp);

  return {
    profile,
    completed,
    chatSeed,
    loading,
    loadProfile,
    refreshProfile,
    earnXP,
    recordQuiz,
    setMode,
    setLanguage,
    savePreferences,
    updateAvatar,
    xp:     profile.xp,
    gems:   profile.gems,
    streak: profile.streak_count,
    mode:   profile.mode,
    lang:   profile.language,
    uname:  profile.display_name,
    lvl,
    lvlPct,
    lvlTo,
  };
}