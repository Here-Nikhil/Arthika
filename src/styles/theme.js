// ─────────────────────────────────────────────
// Arthika Design System — Light / White Theme
// ─────────────────────────────────────────────

export const C = {
  // Backgrounds
  bg:       "#FFFFFF",   // page background
  card:     "#F7F8FA",   // card surface
  cardAlt:  "#EDEEF1",   // input / secondary surface
  border:   "#E2E4E9",   // subtle divider

  // Primary accent — green (readable on white)
  neon:     "#16A34A",   // primary CTA, active states
  neonDim:  "#16A34A18", // tinted background
  neonText: "#16A34A",

  // Secondary accent — amber
  yellow:    "#D97706",
  yellowDim: "#D9770618",

  // Text
  white:     "#FFFFFF",
  ink:       "#111827",  // primary text (replaces old "white" on dark)
  grey:      "#6B7280",  // secondary text
  greyDark:  "#9CA3AF",  // placeholder / muted

  // Feedback
  green:   "#16A34A",
  red:     "#DC2626",
  redDim:  "#DC262614",
};

export const F = {
  family:  "'Space Grotesk', sans-serif",
  regular: 400,
  medium:  500,
  semi:    600,
  bold:    700,
};

export const R = {
  sm:  8,
  md:  12,
  lg:  16,
  xl:  20,
  xxl: 28,
};

export const S = {
  card: {
    background:   C.card,
    borderRadius: R.xl,
    border:       `1px solid ${C.border}`,
    padding:      "18px 16px",
  },
  btn: {
    background:    C.neon,
    color:         C.white,
    border:        "none",
    borderRadius:  R.lg,
    padding:       "16px 24px",
    fontFamily:    F.family,
    fontWeight:    F.bold,
    fontSize:      15,
    letterSpacing: 0.5,
    cursor:        "pointer",
    width:         "100%",
  },
  btnGhost: {
    background:   "transparent",
    color:        C.ink,
    border:       `1.5px solid ${C.border}`,
    borderRadius: R.lg,
    padding:      "14px 24px",
    fontFamily:   F.family,
    fontWeight:   F.semi,
    fontSize:     14,
    cursor:       "pointer",
    width:        "100%",
  },
  input: {
    background:   C.card,
    color:        C.ink,
    border:       `1.5px solid ${C.border}`,
    borderRadius: R.lg,
    padding:      "14px 16px",
    fontFamily:   F.family,
    fontSize:     15,
    fontWeight:   F.medium,
    outline:      "none",
    width:        "100%",
  },
};
