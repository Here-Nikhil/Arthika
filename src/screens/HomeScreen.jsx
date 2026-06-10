import { C, F, R } from "../styles/theme.js";
import StatPill from "../components/StatPill.jsx";
import { MODULES, TOTAL_LESSONS } from "../data/knowledgeGraph.js";
import { t } from "../data/strings.js";
import { getTitle } from "../data/titleTranslations.js";

export default function HomeScreen({ lang = "en", profile, completed, xp, streak, gems, lvl, lvlPct, lvlTo, onNavigate }) {
  const uname      = profile.display_name ?? "Learner";
  const doneCount  = completed.size;
  const currentMod = MODULES.find(m => m.lessons.some(l => !completed.has(l.id))) ?? MODULES[0];

  return (
    <div style={{ padding: "28px 20px 20px", background: C.bg }}>

      {/* Top bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
        <div>
          <div style={{ fontFamily: F.family, fontSize: 12, color: C.grey, marginBottom: 2 }}>
            {lang === "hi" ? "वापसी पर स्वागत," : lang === "bn" ? "স্বাগতম," : lang === "te" ? "స్వాగతం," : lang === "mr" ? "स्वागत आहे," : lang === "ta" ? "வரவேற்கிறோம்," : lang === "gu" ? "સ્વાગત છે," : lang === "kn" ? "ಸ್ವಾಗತ," : lang === "ml" ? "സ്വാഗതം," : lang === "pa" ? "ਜੀ ਆਇਆਂ ਨੂੰ," : lang === "ur" ? "خوش آمدید," : "Welcome back,"}
          </div>
          <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 22, color: C.ink, lineHeight: 1.1 }}>{uname}</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <StatPill icon="🔥" value={streak} label={t(lang, "nav_ranks") === "RANKS" ? "streak" : ""} />
          <StatPill icon="⚡" value={`${xp}`} label="XP" />
        </div>
      </div>

      {/* Streak banner */}
      <div style={{ background: C.neon, borderRadius: R.xxl, padding: "20px 20px 18px", marginBottom: 20, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -10, bottom: -14, fontSize: 90, opacity: .08, transform: "rotate(-10deg)", pointerEvents: "none" }}>🔥</div>

        <div style={{ fontFamily: F.family, fontSize: 10, fontWeight: F.bold, color: "rgba(255,255,255,0.7)", letterSpacing: 2, marginBottom: 4 }}>
          {streak > 0 ? t(lang, "home_streak_sub_act") : t(lang, "home_streak_sub_none")}
        </div>
        <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 24, color: C.white, marginBottom: 6, lineHeight: 1.2 }}>
          {streak > 0 ? `${streak} ${t(lang, "home_streak_active")}` : t(lang, "home_streak_none")}
        </div>
        <div style={{ fontFamily: F.family, fontSize: 13, color: "rgba(255,255,255,0.8)", marginBottom: 18, lineHeight: 1.5 }}>
          {streak > 0
            ? (lang === "hi" ? `दिन ${streak + 1} तक पहुंचने के लिए एक पाठ पूरा करें।`
              : lang === "bn" ? `দিন ${streak + 1} পৌঁছাতে একটি পাঠ সম্পূর্ণ করুন।`
              : `Complete a lesson to reach day ${streak + 1}.`)
            : t(lang, "home_streak_msg_none")}
        </div>

        {/* XP bar */}
        <div style={{ height: 4, background: "rgba(255,255,255,0.25)", borderRadius: 4, overflow: "hidden", marginBottom: 16 }}>
          <div style={{ width: `${lvlPct}%`, height: "100%", background: C.white, borderRadius: 4, transition: "width .5s ease" }} />
        </div>

        <button onClick={() => onNavigate("modules")} style={{ background: C.white, color: C.neon, border: "none", borderRadius: R.lg, padding: "13px 0", width: "100%", fontFamily: F.family, fontWeight: F.bold, fontSize: 14, cursor: "pointer" }}>
          {t(lang, "home_continue")} ▶
        </button>
      </div>

      {/* Current module */}
      <div style={{ background: C.card, border: `1.5px solid ${C.neon}`, borderRadius: R.xxl, padding: "20px 20px 18px", marginBottom: 20 }}>
        <div style={{ fontFamily: F.family, fontSize: 10, fontWeight: F.bold, color: C.neon, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
          {t(lang, "home_current_mod")}
        </div>
        <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 19, color: C.ink, marginBottom: 16, lineHeight: 1.25 }}>
          {getTitle(currentMod.id, currentMod.title, lang)}
        </div>

        {currentMod.lessons.slice(0, 2).map(l => {
          const done = completed.has(l.id);
          return (
            <div key={l.id} style={{ display: "flex", alignItems: "center", gap: 12, background: done ? "#F0FDF4" : C.cardAlt, border: `1px solid ${done ? C.neon : C.border}`, borderRadius: R.lg, padding: "12px 14px", marginBottom: 10 }}>
              <div style={{ width: 26, height: 26, borderRadius: "50%", border: `2px solid ${done ? C.neon : C.border}`, background: done ? C.neon : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: done ? C.white : C.grey, fontWeight: F.bold, flexShrink: 0 }}>
                {done ? "✓" : "●"}
              </div>
              <div style={{ fontFamily: F.family, fontWeight: F.semi, fontSize: 14, color: C.ink }}>
                {getTitle(l.id, l.title, lang)}
              </div>
            </div>
          );
        })}

        <button onClick={() => onNavigate("modules")} style={{ background: C.neon, color: C.white, border: "none", borderRadius: R.lg, padding: "13px 0", width: "100%", fontFamily: F.family, fontWeight: F.bold, fontSize: 14, cursor: "pointer", marginTop: 6 }}>
          {t(lang, "home_continue")} ▶
        </button>
      </div>

      {/* Rank card */}
      <div onClick={() => onNavigate("leaderboard")} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: R.xl, padding: "16px 18px", display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }}>
        <div style={{ width: 42, height: 42, background: "#FEF9C3", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🏆</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: F.family, fontSize: 10, fontWeight: F.bold, color: C.grey, letterSpacing: 2, textTransform: "uppercase", marginBottom: 3 }}>{t(lang, "home_rank")}</div>
          <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 15, color: C.ink }}>{doneCount} / {TOTAL_LESSONS} {t(lang, "home_lessons")} completed</div>
        </div>
        <div style={{ color: C.grey, fontSize: 18 }}>›</div>
      </div>
    </div>
  );
}