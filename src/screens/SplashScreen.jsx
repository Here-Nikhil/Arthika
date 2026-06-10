import { useEffect, useState } from "react";
import { C, F } from "../styles/theme.js";
import logo from "../assets/arthikalogo.png";


export default function SplashScreen({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); onDone(); return 100; }
        return p + 4;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div style={{
      height: "100%", minHeight: "100dvh",
      background: C.bg,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "40px 32px",
      position: "relative",
    }}>
      {/* Logo */}
      <img
        src={logo} 
        alt="Arthika"
        style={{
          width: 100, height: 100,
          borderRadius: 24,
          marginBottom: 24,
          boxShadow: "0 4px 24px rgba(22,163,74,0.30)",
        }}
      />

      <div style={{
        fontFamily: F.family, fontWeight: F.bold,
        fontSize: 38, color: C.ink, letterSpacing: -1, marginBottom: 8,
      }}>
        ARTHIKA
      </div>

      <div style={{
        fontFamily: F.family, fontSize: 14, color: C.grey, marginBottom: 60,
      }}>
        Financial Education for Everyone 🇮🇳
      </div>

      {/* Progress bar */}
      <div style={{ position: "absolute", bottom: 60, left: 40, right: 40 }}>
        <div style={{ height: 3, background: C.cardAlt, borderRadius: 3, overflow: "hidden" }}>
          <div style={{
            height: "100%", width: `${progress}%`,
            background: C.neon, borderRadius: 3,
            transition: "width .06s linear",
          }} />
        </div>
      </div>
    </div>
  );
}