import { useState } from "react";
import { C, F, R, S } from "../styles/theme.js";
import { INDIAN_LANGUAGES } from "../data/strings.js";

const LEVELS = [
  { id: "beginner", icon: "🌱", label: "Beginner",     sub: "Just starting out" },
  { id: "normal",   icon: "📖", label: "Intermediate", sub: "Know the basics" },
  { id: "advanced", icon: "🚀", label: "Advanced",     sub: "Comfortable with finance" },
];

export default function PreferencesScreen({ onDone }) {
  const [step,  setStep]  = useState(0); // 0 = language, 1 = level
  const [lang,  setLang]  = useState(null);
  const [level, setLevel] = useState(null);

  function handleLangPick(code) {
    setLang(code);
    setStep(1);
  }

  function handleDone() {
    if (!lang || !level) return;
    onDone({ language: lang, mode: level });
  }

  return (
    <div style={{ minHeight: "100dvh", background: C.bg, padding: "52px 24px 40px", display: "flex", flexDirection: "column" }}>

      {/* Progress bar */}
      <div style={{ display: "flex", gap: 6, marginBottom: 36 }}>
        {[0, 1].map(i => (
          <div key={i} style={{ height: 3, flex: 1, borderRadius: 3, background: i <= step ? C.neon : C.cardAlt, transition: "background .3s" }} />
        ))}
      </div>

      {/* ── STEP 0: Language ── */}
      {step === 0 && (
        <>
          <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 26, color: C.ink, marginBottom: 6, lineHeight: 1.3 }}>
            Choose your language
          </div>
          <div style={{ fontFamily: F.family, fontSize: 14, color: C.grey, marginBottom: 28 }}>
            All 22 scheduled languages of India supported.
          </div>

          {/* Language grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, flex: 1, overflowY: "auto" }}>
            {INDIAN_LANGUAGES.map(lng => (
              <button
                key={lng.code}
                onClick={() => handleLangPick(lng.code)}
                style={{
                  background: lang === lng.code ? C.neonDim : C.card,
                  border: `1.5px solid ${lang === lng.code ? C.neon : C.border}`,
                  borderRadius: R.xl,
                  padding: "16px 14px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all .15s",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 17, color: lang === lng.code ? C.neon : C.ink, lineHeight: 1.2 }}>
                  {lng.name}
                </div>
                <div style={{ fontFamily: F.family, fontSize: 12, color: C.grey }}>
                  {lng.name_en}
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {/* ── STEP 1: Level ── */}
      {step === 1 && (
        <>
          <button
            onClick={() => setStep(0)}
            style={{ background: "none", border: "none", cursor: "pointer", color: C.grey, fontFamily: F.family, fontSize: 14, textAlign: "left", marginBottom: 24, padding: 0 }}
          >
            ← Back
          </button>

          <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 26, color: C.ink, marginBottom: 6, lineHeight: 1.3 }}>
            Your financial knowledge
          </div>
          <div style={{ fontFamily: F.family, fontSize: 14, color: C.grey, marginBottom: 32 }}>
            We'll adjust content difficulty to match your level.
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
            {LEVELS.map(lv => (
              <button
                key={lv.id}
                onClick={() => setLevel(lv.id)}
                style={{
                  background: level === lv.id ? C.neonDim : C.card,
                  border: `2px solid ${level === lv.id ? C.neon : C.border}`,
                  borderRadius: R.xl,
                  padding: "20px 20px",
                  display: "flex", alignItems: "center", gap: 18,
                  cursor: "pointer", textAlign: "left",
                  transition: "all .15s",
                }}
              >
                <span style={{ fontSize: 30 }}>{lv.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 16, color: level === lv.id ? C.neon : C.ink, marginBottom: 4 }}>
                    {lv.label}
                  </div>
                  <div style={{ fontFamily: F.family, fontSize: 13, color: C.grey }}>
                    {lv.sub}
                  </div>
                </div>
                {level === lv.id && (
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: C.neon, display: "flex", alignItems: "center", justifyContent: "center", color: C.ink, fontSize: 14, fontWeight: F.bold, flexShrink: 0 }}>
                    ✓
                  </div>
                )}
              </button>
            ))}
          </div>

          <button
            style={{ ...S.btn, opacity: !level ? 0.4 : 1, marginTop: "auto" }}
            onClick={handleDone}
            disabled={!level}
          >
            GET STARTED
          </button>
        </>
      )}
    </div>
  );
}
