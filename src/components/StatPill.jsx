import { C, F, R } from "../styles/theme.js";

export default function StatPill({ icon, value, label }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 6,
      background: C.card, border: `1px solid ${C.border}`,
      borderRadius: R.xl, padding: "7px 12px",
    }}>
      <span style={{ fontSize: 14 }}>{icon}</span>
      <div>
        <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 14, color: C.ink, lineHeight: 1 }}>{value}</div>
        {label && <div style={{ fontFamily: F.family, fontSize: 9, fontWeight: F.bold, color: C.grey, letterSpacing: 1, lineHeight: 1.2, textTransform: "uppercase" }}>{label}</div>}
      </div>
    </div>
  );
}
