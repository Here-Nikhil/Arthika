import { useState, useEffect } from "react";
import { C, F, R, S } from "../styles/theme.js";
import { getQuiz } from "../data/quizzes.js";
import { t } from "../data/strings.js";
import { translateText, translateArray, needsTranslation } from "../lib/translate.js";
import { useTTS } from "../hooks/useTTS.js";

async function translateQuestions(qs, lang) {
  return Promise.all(qs.map(async q => {
    const [question, opts, exp] = await Promise.all([
      translateText(q.q, lang),
      translateArray(q.opts, lang),
      translateText(q.exp, lang),
    ]);
    return { ...q, q: question, opts, exp };
  }));
}

export default function QuizScreen({ lang = "en", mode = "beginner", mod, lesson, onPass, onFail, onBack }) {
  const rawQs = getQuiz(lesson.id, mode, lang);

  const [qs,          setQs]          = useState(rawQs);
  const [translating, setTranslating] = useState(false);
  const [idx,         setIdx]         = useState(0);
  const [score,       setScore]       = useState(0);
  const [lives,       setLives]       = useState(3);
  const [done,        setDone]        = useState(false);
  const [lastOk,      setLastOk]      = useState(null);
  const [lastExp,     setLastExp]     = useState("");
  const [selected,    setSelected]    = useState(null);

  const { speaking, speakText, stopSpeaking } = useTTS();

  useEffect(() => {
    const raw = getQuiz(lesson.id, mode, lang);
    setQs(raw);
    setIdx(0); setScore(0); setLives(3); setDone(false);
    setLastOk(null); setSelected(null);
    stopSpeaking();

    if (!needsTranslation(lang) || !raw.length) return;
    setTranslating(true);
    translateQuestions(raw, lang)
      .then(translated => { setQs(translated); setTranslating(false); })
      .catch(() => setTranslating(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson.id, mode, lang]);

  // Mode badge label
  const modeBadge =
    mode === "advanced" ? t(lang, "lesson_advanced") :
    mode === "normal"   ? t(lang, "lesson_normal") :
                          t(lang, "lesson_simple");

  if (translating) {
    return (
      <div style={{ padding: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <div style={{ fontFamily: F.family, fontSize: 16, color: C.grey }}>Translating quiz…</div>
        <div style={{ width: 200, height: 4, background: C.cardAlt, borderRadius: 4, overflow: "hidden" }}>
          <div style={{ width: "60%", height: "100%", background: C.neon, borderRadius: 4, animation: "pulse 1.5s ease-in-out infinite" }} />
        </div>
        <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
      </div>
    );
  }

  if (!qs.length) {
    return (
      <div style={{ padding: 36, textAlign: "center" }}>
        <div style={{ fontFamily: F.family, fontSize: 18, color: C.ink, marginBottom: 24 }}>
          {t(lang, "quiz_no_quiz")}
        </div>
        <button onClick={onBack} style={S.btn}>{t(lang, "quiz_back_btn")}</button>
      </div>
    );
  }

  function answer(i) {
    if (selected !== null) return;
    const q       = qs[idx];
    const ok      = i === q.ans;
    setSelected(i); setLastOk(ok); setLastExp(q.exp);
    const newScore = score + (ok ? 1 : 0);
    const newLives = ok ? lives : lives - 1;
    setTimeout(() => {
      const nextIdx = idx + 1;
      const isDone  = nextIdx >= qs.length || newLives <= 0;
      setScore(newScore); setLives(newLives);
      setSelected(null); setLastOk(null);
      stopSpeaking();
      if (isDone) {
        setDone(true);
        if (newScore === qs.length && newLives > 0) onPass(newScore, qs.length, newLives);
        else onFail?.(newScore, qs.length, newLives);
      } else {
        setIdx(nextIdx);
      }
    }, 1300);
  }

  // Results screen
  if (done) {
    const perfect = score === qs.length && lives > 0;
    return (
      <div style={{ padding: "60px 24px 40px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", background: C.bg, minHeight: "100%" }}>
        <div style={{ fontSize: 80, marginBottom: 20 }}>{perfect ? "🏆" : score >= qs.length / 2 ? "😊" : "😅"}</div>
        <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 26, color: C.ink, marginBottom: 10 }}>
          {perfect ? t(lang, "quiz_perfect") : score >= qs.length / 2 ? t(lang, "quiz_well_done") : t(lang, "quiz_keep_going")}
        </div>
        <div style={{ fontFamily: F.family, fontSize: 15, color: C.grey, marginBottom: 30 }}>
          {score} / {qs.length} {t(lang, "quiz_correct_text")}
        </div>
        {perfect && (
          <div style={{ background: "#F0FDF4", border: `1.5px solid ${C.neon}`, borderRadius: R.xl, padding: 22, marginBottom: 30, width: "100%" }}>
            <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 22, color: C.neon }}>
              +{lesson.xp} {t(lang, "quiz_xp_earned")}
            </div>
          </div>
        )}
        <div style={{ display: "flex", gap: 12, width: "100%" }}>
          <button onClick={onBack} style={{ ...S.btnGhost, flex: 1 }}>{t(lang, "quiz_back")}</button>
          {!perfect && (
            <button
              onClick={() => {
                setIdx(0); setScore(0); setLives(3);
                setDone(false); setLastOk(null); setSelected(null); setQs(rawQs);
              }}
              style={{ ...S.btn, flex: 1 }}
            >
              {t(lang, "quiz_try_again")}
            </button>
          )}
        </div>
      </div>
    );
  }

  const q      = qs[idx];
  const LABELS = ["A", "B", "C", "D"];

  return (
    <div style={{ padding: "28px 20px 28px", background: C.bg }}>

      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <button onClick={() => { stopSpeaking(); onBack(); }} style={{
          background: C.card, border: `1px solid ${C.border}`, borderRadius: R.md,
          width: 40, height: 40, cursor: "pointer", color: C.ink, fontSize: 14,
          display: "flex", alignItems: "center", justifyContent: "center", fontWeight: F.bold,
        }}>✕</button>
        <div style={{ flex: 1, height: 6, background: C.cardAlt, borderRadius: 6, overflow: "hidden" }}>
          <div style={{ width: `${(idx / qs.length) * 100}%`, height: "100%", background: C.neon, borderRadius: 6 }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: C.card, border: `1px solid ${C.border}`, borderRadius: 20, padding: "6px 14px" }}>
          <span style={{ fontSize: 14 }}>❤️</span>
          <span style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 14, color: C.ink }}>{lives}</span>
        </div>
      </div>

      {/* Level badge + counter */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <div style={{ background: "#FEF3C7", color: "#92400E", borderRadius: R.md, padding: "5px 12px", fontFamily: F.family, fontWeight: F.bold, fontSize: 11, letterSpacing: 1 }}>
          {modeBadge}
        </div>
        <div style={{ fontFamily: F.family, fontSize: 12, color: C.grey }}>
          {t(lang, "quiz_question")} {idx + 1} {t(lang, "quiz_of")} {qs.length}
        </div>
      </div>

      {/* Question card + speaker */}
      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: R.xxl, padding: "24px 20px", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
          <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 20, color: C.ink, lineHeight: 1.45, flex: 1 }}>
            {q.q}
          </div>
          <button
            onClick={() => speaking ? stopSpeaking() : speakText(q.q, lang)}
            disabled={translating}
            title={speaking ? "Stop" : "Listen"}
            style={{
              background: speaking ? C.neon : C.cardAlt,
              border: `1.5px solid ${speaking ? C.neon : C.border}`,
              borderRadius: "50%", width: 36, height: 36, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: translating ? 0.4 : 1,
              cursor: translating ? "default" : "pointer", fontSize: 16, transition: "all .15s",
            }}
          >{speaking ? "⏹" : "🔊"}</button>
        </div>
      </div>

      {/* Feedback */}
      {lastOk !== null && (
        <div style={{ background: lastOk ? "#F0FDF4" : "#FEF2F2", border: `1.5px solid ${lastOk ? C.neon : C.red}`, borderRadius: R.xl, padding: "14px 18px", marginBottom: 16 }}>
          <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 14, color: lastOk ? C.neon : C.red, marginBottom: 6 }}>
            {lastOk ? t(lang, "quiz_correct") : t(lang, "quiz_wrong")}
          </div>
          <div style={{ fontFamily: F.family, fontSize: 13, color: "#374151", lineHeight: 1.6 }}>{lastExp}</div>
        </div>
      )}

      {/* Answer options */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {q.opts.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect  = i === q.ans;
          let bg = C.card, border = C.border, color = C.ink;
          if (selected !== null) {
            if (isCorrect)       { bg = "#F0FDF4"; border = C.neon; color = "#166534"; }
            else if (isSelected) { bg = "#FEF2F2"; border = C.red;  color = C.red; }
          }
          return (
            <button key={i} onClick={() => answer(i)} style={{
              background: bg, border: `2px solid ${border}`, borderRadius: R.xl,
              padding: "18px 14px", cursor: selected !== null ? "default" : "pointer",
              textAlign: "left", minHeight: 84, transition: "all .15s",
            }}>
              <div style={{
                background: isCorrect && selected !== null ? C.neon : C.cardAlt,
                color: isCorrect && selected !== null ? C.white : C.grey,
                borderRadius: R.sm, width: 30, height: 30,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: F.family, fontWeight: F.bold, fontSize: 13, marginBottom: 10,
              }}>
                {LABELS[i]}
              </div>
              <div style={{ fontFamily: F.family, fontWeight: F.semi, fontSize: 14, color, lineHeight: 1.4 }}>{opt}</div>
            </button>
          );
        })}
      </div>

      {/* Correct flash */}
      {selected !== null && lastOk && (
        <div style={{ marginTop: 16, background: "#F0FDF4", border: `1.5px solid ${C.neon}`, borderRadius: R.xl, padding: "14px 20px", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 26 }}>🎉</span>
          <span style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 18, color: C.neon }}>{t(lang, "quiz_excellent")}</span>
        </div>
      )}
    </div>
  );
}