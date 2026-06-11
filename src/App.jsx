import { useState, useEffect, useCallback } from "react";
import { useAuth }    from "./hooks/useAuth.js";
import { useProfile } from "./hooks/useProfile.js";
 
import PhoneShell        from "./components/PhoneShell.jsx";
import BottomNav         from "./components/BottomNav.jsx";
import Toast             from "./components/Toast.jsx";
 
import SplashScreen      from "./screens/SplashScreen.jsx";
import AuthScreen        from "./screens/AuthScreen.jsx";
import PreferencesScreen from "./screens/PreferencesScreen.jsx";
import HomeScreen        from "./screens/HomeScreen.jsx";
import ModulesScreen     from "./screens/ModulesScreen.jsx";
import LessonScreen      from "./screens/LessonScreen.jsx";
import QuizScreen        from "./screens/QuizScreen.jsx";
import ChatbotScreen     from "./screens/ChatbotScreen.jsx";
import LeaderboardScreen from "./screens/LeaderboardScreen.jsx";
import ProfileScreen     from "./screens/ProfileScreen.jsx";
 
const SHOW_NAV = new Set(["home", "modules", "chatbot", "leaderboard", "profile"]);
 
function isOnboarded(uid) {
  if (!uid) return false;
  try {
    const raw = localStorage.getItem(`arthika_prefs_${uid}`);
    return raw ? JSON.parse(raw)?.onboarded === true : false;
  } catch { return false; }
}
 
function getSavedLang(uid) {
  if (!uid) return "en";
  try {
    const raw = localStorage.getItem(`arthika_prefs_${uid}`);
    return (raw ? JSON.parse(raw)?.language : null) || "en";
  } catch { return "en"; }
}
 
export default function App() {
  const [screen,       setScreen]       = useState("splash");
  const [activeMod,    setActiveMod]    = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
 
  const { authUser, authLoading, uid } = useAuth();
 
  const {
    profile, completed, chatSeed,
    loadProfile, earnXP, recordQuiz, setMode, setLanguage, savePreferences, updateAvatar,
    xp, gems, streak, mode, lvl, lvlPct, lvlTo,
  } = useProfile(uid);
 
  const [lang, setLang] = useState(() => getSavedLang(uid));
 
  useEffect(() => {
    if (profile.language && profile.language !== lang) {
      setLang(profile.language);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile.language]);
 
  useEffect(() => {
    setLang(getSavedLang(uid));
  }, [uid]);
 
  const [toast, setToast] = useState(null);
  const flash = useCallback((msg, icon = "⚡") => {
    setToast({ msg, icon });
    setTimeout(() => setToast(null), 2800);
  }, []);
 
  // ── Route after auth resolves ─────────────────────────────
  useEffect(() => {
    if (screen === "splash") return;
    if (authLoading) return;
    if (!authUser) { setScreen("auth"); return; }
 
    if (isOnboarded(uid)) {
      setLang(getSavedLang(uid));
      loadProfile();
      setScreen("home");
    } else {
      loadProfile().then(prof => {
        if (prof?.language) setLang(prof.language);
        setScreen(prof?.onboarded ? "home" : "preferences");
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser, authLoading]);
 
  // ── Lesson / quiz ─────────────────────────────────────────
  function goLesson(mod, lesson) { setActiveMod(mod); setActiveLesson(lesson); setScreen("lesson"); }
  function goQuiz(mod, lesson)   { setActiveMod(mod); setActiveLesson(lesson); setScreen("quiz"); }
 
  async function handleLessonComplete() {
    const { getQuiz } = await import("./data/quizzes.js");
    const hasQuiz = getQuiz(activeLesson.id, mode, lang).length > 0;
    if (hasQuiz) {
      goQuiz(activeMod, activeLesson);
    } else {
      await earnXP(activeLesson.xp, activeLesson.id, activeMod?.id ?? "");
      flash(`+${activeLesson.xp} XP!`);
      setScreen("modules");
    }
  }
 
  async function handleQuizPass(score, total, livesLeft) {
    await earnXP(activeLesson.xp, activeLesson.id, activeMod?.id ?? "");
    await recordQuiz({ lessonId: activeLesson.id, moduleId: activeMod?.id ?? "", score, total, livesLeft, xpEarned: activeLesson.xp, passed: true });
    flash(`+${activeLesson.xp} XP! 🏆`);
  }
 
  async function handleQuizFail(score, total, livesLeft) {
    await recordQuiz({ lessonId: activeLesson.id, moduleId: activeMod?.id ?? "", score, total, livesLeft, xpEarned: 0, passed: false });
  }
 
  function handleLangChange(newLang) {
    setLang(newLang);
    setLanguage(newLang);
  }
 
  function navigate(dest) { setScreen(dest); }
 
  // ── Render ────────────────────────────────────────────────
  function renderScreen() {
    switch (screen) {
 
      case "splash":
        return (
          <SplashScreen onDone={async () => {
            if (authLoading) return;
            if (!authUser) { setScreen("auth"); return; }
            setLang(getSavedLang(uid));
            await loadProfile();
            setScreen(isOnboarded(uid) ? "home" : "preferences");
          }} />
        );
 
      case "auth":
        return (
          <AuthScreen
            onAuth={async user => {
              setLang(getSavedLang(user.id));
              if (isOnboarded(user.id)) {
                await loadProfile();
                setScreen("home");
              } else {
                const prof = await loadProfile();
                if (prof?.language) setLang(prof.language);
                setScreen(prof?.onboarded ? "home" : "preferences");
              }
            }}
          />
        );
 
      case "preferences":
        return (
          <PreferencesScreen
            onDone={async prefs => {
              setLang(prefs.language);
              await savePreferences(prefs);
              setScreen("home");
            }}
          />
        );
 
      case "home":
        return <HomeScreen lang={lang} profile={profile} completed={completed} xp={xp} streak={streak} gems={gems} lvl={lvl} lvlPct={lvlPct} lvlTo={lvlTo} onNavigate={navigate} />;
 
      case "modules":
        return <ModulesScreen lang={lang} completed={completed} xp={xp} streak={streak} onStartLesson={goLesson} onStartQuiz={goQuiz} onBack={() => setScreen("home")} />;
 
      case "lesson":
        return activeLesson ? (
          <LessonScreen lang={lang} mode={mode} mod={activeMod} lesson={activeLesson} onSetMode={setMode} onComplete={handleLessonComplete} onBack={() => setScreen("modules")} />
        ) : null;
 
      case "quiz":
        return activeLesson ? (
          <QuizScreen lang={lang} mode={mode} mod={activeMod} lesson={activeLesson} onPass={handleQuizPass} onFail={handleQuizFail} onBack={() => setScreen("modules")} />
        ) : null;
 
      case "chatbot":
        return <ChatbotScreen uid={uid} mode={mode} lang={lang} chatSeed={chatSeed} />;
 
      case "leaderboard":
        return <LeaderboardScreen lang={lang} uid={uid} profile={profile} xp={xp} streak={streak} onBack={() => setScreen("home")} />;
 
      case "profile":
        return (
          <ProfileScreen
            lang={lang}
            uid={uid}
            profile={profile} completed={completed}
            onUpdateAvatar={updateAvatar}
            xp={xp} gems={gems} streak={streak}
            lvl={lvl} lvlPct={lvlPct} lvlTo={lvlTo}
            mode={mode} onSetMode={setMode}
            onLangChange={handleLangChange}
            onSignOut={() => { setLang("en"); setScreen("auth"); }}
            onBack={() => setScreen("home")}
          />
        );
 
      default: return null;
    }
  }
 
  return (
    <PhoneShell>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100%", position: "relative", background: "#FFFFFF" }}>
        <div style={{ flex: 1 }}>
          {renderScreen()}
        </div>
        {SHOW_NAV.has(screen) && (
          <BottomNav lang={lang} screen={screen} onNavigate={navigate} />
        )}
        <Toast toast={toast} onDismiss={() => setToast(null)} />
      </div>
    </PhoneShell>
  );
}