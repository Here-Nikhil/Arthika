import { useState, useRef } from "react";
import { C, F, R, S } from "../styles/theme.js";
import { MODULES } from "../data/knowledgeGraph.js";
import { signOut, updateProfile } from "../lib/db.js";
import { t, INDIAN_LANGUAGES } from "../data/strings.js";

const AVATAR_EMOJIS = [
  "⭐","🦁","🐯","🦊","🐼","🐨","🦄","🐸","🦋","🌻",
  "🌈","🔥","💎","🚀","🎯","🏆","🎓","💡","🌙","⚡",
  "🍀","🌸","🦅","🐬","🦁","🎸","🏄","🧠","💪","🎨",
];

export default function ProfileScreen({
  lang = "en", profile, completed, xp, gems, streak,
  lvl, lvlPct, lvlTo, mode, onSetMode, onLangChange,
  onSignOut, onBack, uid,
}) {
  const [showLangPicker,   setShowLangPicker]   = useState(false);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  // Avatar comes directly from profile (managed by useProfile/localStorage)
  const avatarUrl   = profile.avatar_url   ?? null;
  const avatarEmoji = profile.avatar_emoji ?? "⭐";
  const fileInputRef = useRef(null);

  const uname       = profile.display_name ?? "Learner";
  const currentLang = INDIAN_LANGUAGES.find(l => l.code === lang) ?? INDIAN_LANGUAGES[0];

  async function handleSignOut() {
    await signOut();
    onSignOut();
  }

  async function handleEmojiPick(emoji) {
    setShowAvatarPicker(false);
    await onUpdateAvatar?.({ avatar_emoji: emoji, avatar_url: null });
  }

  async function handleImageUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      const dataUrl = ev.target.result;
      setShowAvatarPicker(false);
      await onUpdateAvatar?.({ avatar_emoji: avatarEmoji, avatar_url: dataUrl });
    };
    reader.readAsDataURL(file);
  }

  const stats = [
    { icon: "⚡", val: xp,             label: t(lang, "profile_xp") },
    { icon: "🔥", val: streak,         label: t(lang, "profile_streak") },
    { icon: "💎", val: gems,           label: t(lang, "profile_gems") },
    { icon: "📚", val: completed.size, label: t(lang, "profile_lessons") },
    { icon: "🗺️", val: MODULES.length, label: t(lang, "profile_modules") },
    { icon: "🏆", val: `${lvl}`,       label: t(lang, "profile_lvl") },
  ];

  // ── Language picker ───────────────────────────────────────
  if (showLangPicker) {
    return (
      <div style={{ padding: "28px 20px", background: C.bg, minHeight: "100dvh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
          <button onClick={() => setShowLangPicker(false)} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: R.md, width: 40, height: 40, cursor: "pointer", color: C.ink, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
          <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 20, color: C.ink }}>{t(lang, "profile_change_lang")}</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {INDIAN_LANGUAGES.map(lng => (
            <button key={lng.code} onClick={() => { onLangChange?.(lng.code); setShowLangPicker(false); }}
              style={{ background: lng.code === lang ? "#F0FDF4" : C.card, border: `1.5px solid ${lng.code === lang ? C.neon : C.border}`, borderRadius: R.xl, padding: "14px 12px", cursor: "pointer", textAlign: "left" }}>
              <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 16, color: lng.code === lang ? C.neon : C.ink, marginBottom: 3 }}>{lng.name}</div>
              <div style={{ fontFamily: F.family, fontSize: 12, color: C.grey }}>{lng.name_en}</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ── Avatar picker overlay ─────────────────────────────────
  if (showAvatarPicker) {
    return (
      <div style={{ padding: "28px 20px", background: C.bg, minHeight: "100dvh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
          <button onClick={() => setShowAvatarPicker(false)} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: R.md, width: 40, height: 40, cursor: "pointer", color: C.ink, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
          <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 20, color: C.ink }}>{t(lang, "profile_avatar_change")}</div>
        </div>

        {/* Upload photo button */}
        <button
          onClick={() => fileInputRef.current?.click()}
          style={{ width: "100%", background: C.card, border: `1.5px dashed ${C.neon}`, borderRadius: R.xl, padding: "18px", marginBottom: 20, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}
        >
          <span style={{ fontSize: 22 }}>📷</span>
          <span style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 14, color: C.neon }}>{t(lang, "profile_avatar_upload")}</span>
        </button>
        <input ref={fileInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageUpload} />

        {/* Emoji grid */}
        <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 11, color: C.grey, letterSpacing: 2, marginBottom: 12 }}>
          {t(lang, "profile_avatar_pick").toUpperCase()}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10 }}>
          {AVATAR_EMOJIS.map(emoji => (
            <button
              key={emoji}
              onClick={() => handleEmojiPick(emoji)}
              style={{
                background: avatarEmoji === emoji && !avatarUrl ? "#F0FDF4" : C.card,
                border: `2px solid ${avatarEmoji === emoji && !avatarUrl ? C.neon : C.border}`,
                borderRadius: R.lg, height: 52, fontSize: 26, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >{emoji}</button>
          ))}
        </div>
      </div>
    );
  }

  // ── Main profile screen ───────────────────────────────────
  return (
    <div style={{ padding: "28px 20px 32px", background: C.bg }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={onBack} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: R.md, width: 40, height: 40, cursor: "pointer", color: C.ink, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
          <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 22, color: C.ink }}>{t(lang, "profile_title")}</div>
        </div>
        <button onClick={handleSignOut} style={{ background: "#FEF2F2", color: C.red, border: `1px solid #FECACA`, borderRadius: R.md, padding: "9px 14px", fontFamily: F.family, fontWeight: F.bold, fontSize: 12, cursor: "pointer" }}>
          {t(lang, "profile_signout")}
        </button>
      </div>

      {/* Avatar — tappable */}
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <button
            onClick={() => setShowAvatarPicker(true)}
            style={{ width: 80, height: 80, borderRadius: 20, background: "#F0FDF4", border: `3px solid ${C.neon}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 42, cursor: "pointer", overflow: "hidden", padding: 0 }}
          >
            {avatarUrl
              ? <img src={avatarUrl} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              : avatarEmoji
            }
          </button>
          {/* Edit badge */}
          <div style={{ position: "absolute", bottom: -4, right: -4, background: C.neon, borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, border: `2px solid ${C.bg}`, cursor: "pointer", pointerEvents: "none" }}>
            ✏️
          </div>
        </div>
        <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 22, color: C.ink, marginBottom: 4, marginTop: 14 }}>{uname}</div>
        <div style={{ fontFamily: F.family, fontSize: 13, color: C.neon, fontWeight: F.semi }}>
          {t(lang, "profile_level")} {lvl} · {xp} XP
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 16 }}>
        {stats.map(({ icon, val, label }) => (
          <div key={label} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: R.xl, padding: "14px 10px", textAlign: "center" }}>
            <div style={{ fontSize: 20, marginBottom: 6 }}>{icon}</div>
            <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 17, color: C.ink, marginBottom: 2 }}>{val}</div>
            <div style={{ fontFamily: F.family, fontSize: 9, fontWeight: F.bold, color: C.grey, letterSpacing: 1 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Level progress */}
      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: R.xl, padding: "16px 18px", marginBottom: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 13, color: C.ink }}>{t(lang, "profile_lvl_prog")} {lvl}</span>
          <span style={{ fontFamily: F.family, fontSize: 12, color: C.grey }}>{xp} / {lvlTo} XP</span>
        </div>
        <div style={{ height: 8, background: C.cardAlt, borderRadius: 8, overflow: "hidden" }}>
          <div style={{ width: `${lvlPct}%`, height: "100%", background: C.neon, borderRadius: 8 }} />
        </div>
      </div>

      {/* Mode toggle — 3 options */}
      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: R.xl, padding: "16px 18px", marginBottom: 14 }}>
        <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 11, color: C.grey, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
          {t(lang, "profile_mode")}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {[
            ["beginner", t(lang, "profile_mode_simple")],
            ["normal",   t(lang, "profile_mode_normal")],
            ["advanced", t(lang, "profile_mode_advanced")],
          ].map(([m, label]) => (
            <button key={m} onClick={() => onSetMode(m)} style={{
              flex: 1, background: mode === m ? "#F0FDF4" : C.cardAlt,
              border: `2px solid ${mode === m ? C.neon : C.border}`, borderRadius: R.lg, padding: "10px 4px",
              fontFamily: F.family, fontWeight: F.bold, fontSize: 11,
              color: mode === m ? C.neon : C.grey, cursor: "pointer",
            }}>{label}</button>
          ))}
        </div>
      </div>

      {/* Language */}
      <button onClick={() => setShowLangPicker(true)} style={{ width: "100%", background: C.card, border: `1px solid ${C.border}`, borderRadius: R.xl, padding: "16px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", marginBottom: 14 }}>
        <div>
          <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 11, color: C.grey, letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>{t(lang, "profile_language")}</div>
          <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 15, color: C.ink }}>{currentLang.name} · {currentLang.name_en}</div>
        </div>
        <div style={{ color: C.grey, fontSize: 18 }}>›</div>
      </button>

      {/* Module progress */}
      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: R.xl, padding: "16px 18px" }}>
        <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 11, color: C.grey, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
          {t(lang, "profile_mod_prog")}
        </div>
        {MODULES.map(mod => {
          const done = mod.lessons.filter(l => completed.has(l.id)).length;
          const pct  = (done / mod.lessons.length) * 100;
          return (
            <div key={mod.id} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ fontSize: 18, flexShrink: 0 }}>{mod.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <span style={{ fontFamily: F.family, fontSize: 13, color: C.ink }}>{mod.title}</span>
                  <span style={{ fontFamily: F.family, fontSize: 11, color: C.neon, fontWeight: F.bold }}>{done}/{mod.lessons.length}</span>
                </div>
                <div style={{ height: 4, background: C.cardAlt, borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ width: `${pct}%`, height: "100%", background: C.neon, borderRadius: 4 }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}