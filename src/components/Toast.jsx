import { useEffect } from "react";
import { C, F } from "../styles/theme.js";

export default function Toast({ toast, onDismiss }) {
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(onDismiss, 2800);
    return () => clearTimeout(t);
  }, [toast, onDismiss]);

  if (!toast) return null;

  return (
    <div style={{
      position: "absolute", top: 24, left: "50%",
      transform: "translateX(-50%)",
      background: C.ink,
      borderRadius: 14, padding: "10px 20px",
      display: "flex", alignItems: "center", gap: 10,
      zIndex: 999, pointerEvents: "none", whiteSpace: "nowrap",
      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    }}>
      <span style={{ fontSize: 16 }}>{toast.icon ?? "⚡"}</span>
      <span style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 14, color: C.white }}>
        {toast.msg}
      </span>
    </div>
  );
}
