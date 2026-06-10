import { C, F, R } from "../styles/theme.js";
import { MODULES, TOTAL_LESSONS } from "../data/knowledgeGraph.js";
import QUIZZES from "../data/quizzes.js"; 
import { t } from "../data/strings.js";
import { getTitle } from "../data/titleTranslations.js";

const TIER_COLORS = { 1: "#3B82F6", 2: "#8B5CF6", 3: "#16A34A" };
const TIER_KEYS   = { 1: "modules_tier1", 2: "modules_tier2", 3: "modules_tier3" };

export default function ModulesScreen({ lang = "en", completed, xp, streak, onStartLesson, onStartQuiz, onBack }) {
  const tiers = [1, 2, 3];

  return (
    <div style={{ padding: "28px 20px 20px", background: C.bg }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
        <button onClick={onBack} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: R.md, width: 40, height: 40, cursor: "pointer", color: C.ink, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>←</button>
        <div>
          <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 22, color: C.ink }}>{t(lang, "modules_title")}</div>
          <div style={{ fontFamily: F.family, fontSize: 12, color: C.grey }}>12 {lang === "hi" ? "मॉड्यूल" : t(lang, "profile_modules").toLowerCase()} · {TOTAL_LESSONS} {t(lang, "home_lessons")}</div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, marginTop: 16 }}>
        {[["⚡", `${xp} XP`], ["🔥", `${streak}`]].map(([icon, val]) => (
          <div key={val} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 20, padding: "7px 16px", display: "flex", alignItems: "center", gap: 7 }}>
            <span style={{ fontSize: 13 }}>{icon}</span>
            <span style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 13, color: C.ink }}>{val}</span>
          </div>
        ))}
      </div>

      {/* Modules grouped by tier */}
      {tiers.map(tier => {
        const tierMods  = MODULES.filter(m => m.tier === tier);
        const tierColor = TIER_COLORS[tier];
        const tierLabel = t(lang, TIER_KEYS[tier]);

        return (
          <div key={tier} style={{ marginBottom: 28 }}>

            {/* Tier header */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ flex: 1, height: 1, background: C.border }} />
              <div style={{ fontFamily: F.family, fontSize: 10, fontWeight: F.bold, color: tierColor, letterSpacing: 2, background: `${tierColor}14`, padding: "4px 12px", borderRadius: 20, border: `1px solid ${tierColor}30` }}>
                TIER {tier} · {tierLabel}
              </div>
              <div style={{ flex: 1, height: 1, background: C.border }} />
            </div>

            {tierMods.map((mod) => {
              const doneLessons = mod.lessons.filter(l => completed.has(l.id)).length;
              const pct         = Math.round((doneLessons / mod.lessons.length) * 100);
              const prevTierComplete = tier === 1 || MODULES.filter(m => m.tier === tier - 1).every(m => m.lessons.every(l => completed.has(l.id)));
              const isLocked = !prevTierComplete;
              const modTitle = getTitle(mod.id, mod.title, lang);

              return (
                <div key={mod.id} style={{ marginBottom: 16, opacity: isLocked ? 0.45 : 1 }}>
                  <div style={{ background: C.card, border: `1.5px solid ${pct > 0 && pct < 100 ? C.neon : C.border}`, borderRadius: R.xxl, overflow: "hidden" }}>

                    {/* Module header */}
                    <div style={{ padding: "18px 20px 14px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div style={{ background: `${tierColor}14`, border: `1px solid ${tierColor}30`, borderRadius: R.md, padding: "3px 10px", fontFamily: F.family, fontSize: 10, fontWeight: F.bold, color: tierColor, letterSpacing: 1 }}>
                            {mod.tag}
                          </div>
                          <span style={{ fontFamily: F.family, fontSize: 11, color: C.grey }}>{pct}%</span>
                        </div>
                        <span style={{ fontSize: 24 }}>{mod.icon}</span>
                      </div>

                      <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 19, color: C.ink, marginBottom: 12, lineHeight: 1.25 }}>
                        {modTitle}
                      </div>

                      <div style={{ height: 4, background: C.cardAlt, borderRadius: 4, overflow: "hidden" }}>
                        <div style={{ width: `${pct}%`, height: "100%", background: C.neon, borderRadius: 4, transition: "width .4s" }} />
                      </div>
                    </div>

                    {/* Lesson rows */}
                    {mod.lessons.map((lesson, li) => {
                      const prevMod        = li === 0 ? null : mod.lessons[li - 1];
                      const lessonUnlocked = !isLocked && (li === 0 || completed.has(prevMod.id));
                      const done           = completed.has(lesson.id);
                      const hasQuiz        = !!(QUIZZES[lesson.id] && (Array.isArray(QUIZZES[lesson.id]) ? QUIZZES[lesson.id].length : Object.values(QUIZZES[lesson.id]).some(v => Array.isArray(v) && v.length)));
                      const lessonTitle    = getTitle(lesson.id, lesson.title, lang);

                      return (
                        <div key={lesson.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 20px", borderTop: `1px solid ${C.border}`, background: done ? "#F0FDF4" : "transparent" }}>
                          <div style={{ width: 34, height: 34, borderRadius: R.md, flexShrink: 0, background: done ? C.neon : lessonUnlocked ? C.cardAlt : C.border, display: "flex", alignItems: "center", justifyContent: "center", fontSize: done ? 15 : 13, color: done ? C.white : C.grey, fontWeight: F.bold }}>
                            {done ? "✓" : lessonUnlocked ? "▶" : "🔒"}
                          </div>

                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontFamily: F.family, fontWeight: F.semi, fontSize: 14, color: lessonUnlocked ? C.ink : C.grey, lineHeight: 1.3 }}>{lessonTitle}</div>
                            <div style={{ fontFamily: F.family, fontSize: 11, color: done ? C.neon : C.greyDark, marginTop: 2 }}>
                              {done ? `${t(lang, "modules_completed")} · ` : ""}{lesson.xp} XP
                            </div>
                          </div>

                          <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                            {lessonUnlocked && !done && (
                              <button onClick={() => onStartLesson(mod, lesson)} style={{ background: C.neon, color: C.white, border: "none", borderRadius: R.md, padding: "9px 16px", fontFamily: F.family, fontWeight: F.bold, fontSize: 12, cursor: "pointer" }}>
                                {t(lang, "modules_start")}
                              </button>
                            )}
                            {done && (
                              <button onClick={() => onStartLesson(mod, lesson)} style={{ background: "transparent", color: C.grey, border: `1.5px solid ${C.border}`, borderRadius: R.md, padding: "8px 14px", fontFamily: F.family, fontWeight: F.bold, fontSize: 11, cursor: "pointer" }}>
                                ↩ {lang === "hi" ? "दोबारा" : "REVISIT"}
                              </button>
                            )}
                            {done && hasQuiz && (
                              <button onClick={() => onStartQuiz(mod, lesson)} style={{ background: "transparent", color: C.neon, border: `1.5px solid ${C.neon}44`, borderRadius: R.md, padding: "8px 14px", fontFamily: F.family, fontWeight: F.bold, fontSize: 11, cursor: "pointer" }}>
                                {t(lang, "modules_quiz")}
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}