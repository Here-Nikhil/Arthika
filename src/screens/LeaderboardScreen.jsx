import { useState, useEffect } from "react";
import { C, F, R } from "../styles/theme.js";
import { getLeaderboard } from "../lib/db.js";
import { t } from "../data/strings.js";

export default function LeaderboardScreen({ lang = "en", uid, profile, xp, streak, onBack }) {
  const [players, setPlayers] = useState(undefined);
  const [tab,     setTab]     = useState("weekly");

  useEffect(() => {
    setPlayers(undefined);
    getLeaderboard(20)
      .then(data => setPlayers(data ?? []))
      .catch(() => setPlayers([]));
  }, []);

  const TABS = [
    { id: "weekly",  label: t(lang, "lb_weekly") },
    { id: "monthly", label: t(lang, "lb_monthly") },
    { id: "alltime", label: t(lang, "lb_alltime") },
  ];

  const list = (players ?? []).map(p => ({ ...p, isMe: p.id === uid }));
  const podium = [list[1], list[0], list[2]];
  const podiumH = [70, 96, 54];

  return (
    <div style={{ padding: "28px 20px 20px", background: C.bg }}>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
        <button onClick={onBack} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: R.md, width: 40, height: 40, cursor: "pointer", color: C.ink, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
        <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 22, color: C.ink }}>{t(lang, "lb_title")}</div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", background: C.card, border: `1px solid ${C.border}`, borderRadius: R.xxl, padding: 4, gap: 4, marginBottom: 24 }}>
        {TABS.map(tb => (
          <button key={tb.id} onClick={() => setTab(tb.id)} style={{
            flex: 1, background: tab === tb.id ? C.neon : "transparent",
            color: tab === tb.id ? C.white : C.grey,
            border: "none", borderRadius: R.xl, padding: "9px 0",
            fontFamily: F.family, fontWeight: F.bold, fontSize: 11,
            letterSpacing: lang === "hi" ? 0 : 1, cursor: "pointer", transition: "all .15s",
          }}>{tb.label}</button>
        ))}
      </div>

      {/* Loading */}
      {players === undefined && (
        <div style={{ textAlign: "center", padding: "60px 0", fontFamily: F.family, fontSize: 14, color: C.grey }}>
          {lang === "hi" ? "लोड हो रहा है…" : "Loading…"}
        </div>
      )}

      {/* Empty */}
      {players !== undefined && list.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <div style={{ fontSize: 52 }}>🏆</div>
          <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 20, color: C.ink }}>
            {lang === "hi" ? "अभी कोई नहीं!" : "No one here yet!"}
          </div>
          <div style={{ fontFamily: F.family, fontSize: 14, color: C.grey, lineHeight: 1.6 }}>
            {lang === "hi" ? "पाठ पूरा करें और XP कमाएं।" : "Complete lessons to earn XP and appear here."}
          </div>
        </div>
      )}

      {/* Podium */}
      {players !== undefined && list.length >= 3 && (
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 8, marginBottom: 24 }}>
          {podium.map((p, i) => {
            if (!p) return <div key={i} style={{ flex: 1 }} />;
            return (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div style={{ fontSize: 26 }}>{p.avatar_emoji || "⭐"}</div>
                <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 12, color: C.ink }}>{(p.display_name || "").split(" ")[0]}</div>
                <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 11, color: C.neon }}>{(p.xp / 1000).toFixed(1)}K XP</div>
                <div style={{ width: "100%", height: podiumH[i], background: C.card, border: `2px solid ${i === 1 ? C.neon : C.border}`, borderRadius: "10px 10px 0 0", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 8, position: "relative" }}>
                  <div style={{ position: "absolute", top: -11, right: -3, background: i === 1 ? C.neon : C.yellow, color: C.white, borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F.family, fontWeight: F.bold, fontSize: 11 }}>
                    {i === 1 ? "1" : i === 0 ? "2" : "3"}
                  </div>
                  <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 14, color: C.border }}>{["2ND", "1ST", "3RD"][i]}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* List */}
      {players !== undefined && list.map((p, i) => (
        <div key={p.id ?? i} style={{ display: "flex", alignItems: "center", gap: 14, background: p.isMe ? "#F0FDF4" : C.card, border: `1.5px solid ${p.isMe ? C.neon : C.border}`, borderRadius: R.xl, padding: "14px 16px", marginBottom: 10 }}>
          <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 14, color: i < 3 ? [C.yellow, C.neon, C.yellow][i] : C.greyDark, width: 28, textAlign: "center" }}>
            {String(i + 1).padStart(2, "0")}
          </div>
          <div style={{ width: 40, height: 40, background: C.cardAlt, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, border: `1px solid ${C.border}` }}>
            {p.avatar_emoji || "⭐"}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 14, color: p.isMe ? C.neon : C.ink }}>
              {(p.display_name ?? "—").toUpperCase()}{p.isMe ? ` ${t(lang, "lb_you")}` : ""}
            </div>
            <div style={{ fontFamily: F.family, fontSize: 11, color: C.grey, display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
              🔥 {p.streak_count ?? 0} {t(lang, "lb_streak")}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 15, color: C.ink }}>{(p.xp ?? 0).toLocaleString()}</div>
            <div style={{ fontFamily: F.family, fontSize: 10, color: C.grey }}>{t(lang, "lb_xp")}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
