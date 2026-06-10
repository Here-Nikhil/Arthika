import { useState, useEffect } from "react";
import { C, F, R, S } from "../styles/theme.js";
import { getContent } from "../data/content.js";
import { t } from "../data/strings.js";
import { translateText, translateArray, needsTranslation } from "../lib/translate.js";
import { useTTS } from "../hooks/useTTS.js";

export default function LessonScreen({ lang = "en", mode = "beginner", mod, lesson, onSetMode, onComplete, onBack }) {
  const [page, setPage] = useState(0);
  const topics = lesson.topics;
  const topic  = topics[page];
  const isLast = page >= topics.length - 1;

  const [content,         setContent]         = useState(() => getContent(topic, mode, lang));
  const [translatedTitle, setTranslatedTitle] = useState(topic);
  const [translating,     setTranslating]     = useState(false);

  const { speaking, speakText, stopSpeaking } = useTTS();

  useEffect(() => {
    const raw = getContent(topic, mode, lang);
    setContent(raw);
    setTranslatedTitle(topic);
    stopSpeaking();

    if (!needsTranslation(lang) || !raw) return;
    setTranslating(true);
    Promise.all([
      translateText(topic, lang),
      translateText(raw.text, lang),
      translateArray(raw.faq,   lang),
      translateArray(raw.myths, lang),
    ]).then(([title, text, faq, myths]) => {
      setTranslatedTitle(title);
      setContent({ text, faq, myths });
      setTranslating(false);
    }).catch(() => setTranslating(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic, lang, mode]);

  function buildSpeakText() {
    const parts = [];
    if (translatedTitle) parts.push(translatedTitle);
    if (content?.text)          parts.push(content.text);
    if (content?.faq?.length)   content.faq.forEach(f => parts.push(f));
    if (content?.myths?.length) content.myths.forEach(m => parts.push(m));
    return parts.filter(Boolean).join(". ");
  }

  const MODE_OPTIONS = [
    ["beginner",  t(lang, "lesson_simple")],
    ["normal",    t(lang, "lesson_normal")],
    ["advanced",  t(lang, "lesson_advanced")],
  ];

  return (
    <div style={{ padding: "28px 20px 28px", background: C.bg }}>

      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <button onClick={() => { stopSpeaking(); onBack(); }} style={{
          background: C.card, border: `1px solid ${C.border}`, borderRadius: R.md,
          width: 40, height: 40, cursor: "pointer", color: C.ink, fontSize: 16,
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>✕</button>
        <div style={{ flex: 1, height: 6, background: C.cardAlt, borderRadius: 6, overflow: "hidden" }}>
          <div style={{ width: `${((page + 1) / topics.length) * 100}%`, height: "100%", background: C.neon, borderRadius: 6, transition: "width .3s" }} />
        </div>
        <div style={{ fontFamily: F.family, fontSize: 12, fontWeight: F.bold, color: C.grey, flexShrink: 0 }}>
          {page + 1}/{topics.length}
        </div>
      </div>

      {/* Mode toggle — 3 options */}
      <div style={{ display: "flex", gap: 6, marginBottom: 22 }}>
        {MODE_OPTIONS.map(([m, label]) => (
          <button key={m} onClick={() => onSetMode(m)} style={{
            flex: 1,
            background: mode === m ? C.neon : C.card,
            color:      mode === m ? C.white : C.grey,
            border:     `1.5px solid ${mode === m ? C.neon : C.border}`,
            borderRadius: R.lg, padding: "10px 0",
            fontFamily: F.family, fontWeight: F.bold, fontSize: 11,
            cursor: "pointer", transition: "all .15s",
          }}>{label}</button>
        ))}
      </div>

      {/* Content card */}
      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: R.xxl, padding: "24px 20px", marginBottom: 20 }}>

        {/* Tag + speaker */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ fontFamily: F.family, fontSize: 10, fontWeight: F.bold, color: C.neon, letterSpacing: 2, textTransform: "uppercase" }}>
            {mod?.tag ?? "LESSON"}
          </div>
          <button
            onClick={() => speaking ? stopSpeaking() : speakText(buildSpeakText(), lang)}
            disabled={translating}
            title={speaking ? "Stop" : "Listen"}
            style={{
              background: speaking ? C.neon : C.cardAlt,
              border: `1.5px solid ${speaking ? C.neon : C.border}`,
              borderRadius: "50%", width: 36, height: 36,
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: translating ? 0.4 : 1,
              cursor: translating ? "default" : "pointer", fontSize: 16, transition: "all .15s",
            }}
          >{speaking ? "⏹" : "🔊"}</button>
        </div>

        {/* Title */}
        <div style={{
          fontFamily: F.family, fontWeight: F.bold, fontSize: 18, color: C.ink,
          marginBottom: 18, lineHeight: 1.35, opacity: translating ? 0.5 : 1, transition: "opacity .2s",
        }}>
          {translatedTitle}
        </div>

        {translating && (
          <div style={{ fontFamily: F.family, fontSize: 13, color: C.grey, marginBottom: 12, fontStyle: "italic" }}>
            {t(lang, "lesson_translating")}
          </div>
        )}

        {content ? (
          <>
            {mode === "advanced" && (
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                background: "#FEF3C7", border: "1px solid #FDE68A",
                borderRadius: R.md, padding: "4px 10px",
                fontFamily: F.family, fontWeight: F.bold, fontSize: 10,
                color: "#92400E", letterSpacing: 1, marginBottom: 12,
              }}>
                🎓 {t(lang, "lesson_advanced")}
              </div>
            )}

            <div style={{ fontFamily: F.family, fontSize: 15, color: "#4B5563", lineHeight: 1.8, marginBottom: content.faq?.length ? 20 : 0 }}>
              {content.text}
            </div>

            {content.faq?.length > 0 && (
              <div style={{ background: "#F0FDF4", borderRadius: R.lg, padding: "16px 18px", marginBottom: 14 }}>
                <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 10, color: C.neon, letterSpacing: 2, marginBottom: 12 }}>
                  💬 {t(lang, "lesson_facts")}
                </div>
                {content.faq.map((f, i) => (
                  <div key={i} style={{ fontFamily: F.family, fontSize: 13, color: "#374151", lineHeight: 1.65, marginBottom: i < content.faq.length - 1 ? 10 : 0 }}>
                    • {f}
                  </div>
                ))}
              </div>
            )}

            {content.myths?.length > 0 && (
              <div style={{ background: "#FEF2F2", borderRadius: R.lg, padding: "16px 18px", border: `1px solid #FECACA` }}>
                <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 10, color: C.red, letterSpacing: 2, marginBottom: 12 }}>
                  ⚠️ {t(lang, "lesson_myths")}
                </div>
                {content.myths.slice(0, 2).map((m, i) => (
                  <div key={i} style={{ fontFamily: F.family, fontSize: 13, color: "#DC2626", lineHeight: 1.65, marginBottom: i < content.myths.length - 1 ? 10 : 0 }}>
                    × {m}
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div style={{ fontFamily: F.family, fontSize: 15, color: "#4B5563", lineHeight: 1.8 }}>
            {translatedTitle} is covered in this lesson. Keep going!
          </div>
        )}
      </div>

      {/* Navigation */}
      <div style={{ display: "flex", gap: 12 }}>
        {page > 0 && (
          <button onClick={() => { setPage(p => p - 1); stopSpeaking(); }} style={{ ...S.btnGhost, flex: 1 }}>
            {t(lang, "lesson_back")}
          </button>
        )}
        <button
          onClick={() => {
            if (isLast) { stopSpeaking(); onComplete(); }
            else { setPage(p => p + 1); stopSpeaking(); }
          }}
          style={{ ...S.btn, flex: 2 }}
        >
          {isLast ? t(lang, "lesson_quiz") : t(lang, "lesson_next")}
        </button>
      </div>
    </div>
  );
}