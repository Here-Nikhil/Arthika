import { useState } from "react";
import { C, F, R, S } from "../styles/theme.js";
import { signUpEmail, signInEmail } from "../lib/db.js";
import { SUPABASE_READY } from "../lib/supabase.js";

export default function AuthScreen({ onAuth }) {
  const [isSignUp, setSignUp] = useState(false);
  const [name,     setName]   = useState("");
  const [email,    setEmail]  = useState("");
  const [pass,     setPass]   = useState("");
  const [loading,  setLoad]   = useState(false);
  const [err,      setErr]    = useState("");

  async function handleSubmit() {
    if (!email || pass.length < 6) {
      setErr("Enter a valid email and password (min 6 characters).");
      return;
    }
    setLoad(true); setErr("");
    try {
      const user = isSignUp
        ? await signUpEmail(email, pass, name)
        : await signInEmail(email, pass);
      onAuth(user);
    } catch (e) {
      setErr(e.message);
    }
    setLoad(false);
  }

  return (
    <div style={{
      minHeight: "100dvh", background: C.bg,
      padding: "52px 24px 40px",
      display: "flex", flexDirection: "column",
    }}>

      {/* Logo */}
      <div style={{ marginBottom: 40 }}>
        <div style={{
          width: 56, height: 56, background: C.neon,
          borderRadius: 16, display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: 26, color: C.ink,
          fontWeight: F.bold, marginBottom: 24,
        }}>₹</div>
        <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 30, color: C.ink, lineHeight: 1.2, marginBottom: 8, whiteSpace: "pre-line" }}>
          {"Master Your\nMoney Path."}
        </div>
        <div style={{ fontFamily: F.family, fontSize: 15, color: C.grey }}>
          Financial education for every Indian.
        </div>
      </div>

      {/* Not configured warning */}
      {!SUPABASE_READY && (
        <div style={{ background: "#FEF3C7", border: `1.5px solid #D97706`, borderRadius: R.xl, padding: "14px 18px", marginBottom: 24 }}>
          <div style={{ fontFamily: F.family, fontWeight: F.bold, fontSize: 13, color: "#92400E", marginBottom: 4 }}>⚠️ Backend not configured</div>
          <div style={{ fontFamily: F.family, fontSize: 12, color: "#78350F", lineHeight: 1.6 }}>
            Add your Supabase URL and anon key to <code>.env</code> to enable sign in.
          </div>
        </div>
      )}

      {/* Sign In / Sign Up toggle */}
      <div style={{ display: "flex", background: C.cardAlt, borderRadius: R.lg, padding: 4, marginBottom: 28, gap: 4 }}>
        {[["Sign In", false], ["Sign Up", true]].map(([label, val]) => (
          <button key={label} onClick={() => { setSignUp(val); setErr(""); }} style={{
            flex: 1, padding: "11px 0",
            background: isSignUp === val ? C.white : "transparent",
            border: "none", borderRadius: R.md,
            fontFamily: F.family, fontWeight: F.bold, fontSize: 14,
            color: isSignUp === val ? C.ink : C.grey,
            cursor: "pointer",
            boxShadow: isSignUp === val ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
            transition: "all .15s",
          }}>{label}</button>
        ))}
      </div>

      {/* Fields */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {isSignUp && (
          <div>
            <label style={{ fontFamily: F.family, fontSize: 12, fontWeight: F.bold, color: C.grey, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 6 }}>
              Name
            </label>
            <input
              style={S.input}
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        )}

        <div>
          <label style={{ fontFamily: F.family, fontSize: 12, fontWeight: F.bold, color: C.grey, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 6 }}>
            Email
          </label>
          <input
            style={S.input}
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            onKeyDown={e => e.key === "Enter" && handleSubmit()}
          />
        </div>

        <div>
          <label style={{ fontFamily: F.family, fontSize: 12, fontWeight: F.bold, color: C.grey, letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 6 }}>
            Password
          </label>
          <input
            style={S.input}
            placeholder="Password (min 6 chars)"
            value={pass}
            onChange={e => setPass(e.target.value)}
            type="password"
            onKeyDown={e => e.key === "Enter" && handleSubmit()}
          />
        </div>
      </div>

      {/* Error */}
      {err && (
        <div style={{ background: C.redDim, border: `1px solid ${C.red}`, borderRadius: R.md, padding: "12px 16px", marginTop: 16, fontFamily: F.family, fontSize: 13, color: C.red, lineHeight: 1.5 }}>
          {err}
        </div>
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{ ...S.btn, marginTop: 24, opacity: loading ? 0.6 : 1 }}
      >
        {loading ? "PLEASE WAIT…" : isSignUp ? "CREATE ACCOUNT" : "SIGN IN"}
      </button>

      {/* Trust */}
      <div style={{ marginTop: "auto", paddingTop: 32, display: "flex", justifyContent: "center", gap: 24 }}>
        {["Free forever", "No ads", "Secure"].map(label => (
          <span key={label} style={{ fontFamily: F.family, fontSize: 12, color: C.greyDark }}>✓ {label}</span>
        ))}
      </div>
    </div>
  );
}
