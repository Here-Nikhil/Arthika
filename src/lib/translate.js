// ─────────────────────────────────────────────────────────────
// translate.js — On-demand content translation via NTK approach
//
// Strategy (Need-To-Know):
//   • English  → served directly from content.js (no network)
//   • Hindi    → served from pre-translated hi_* keys in content.js (no network)
//   • Others   → Google Translate free endpoint, cached in sessionStorage
//
// This means we only hit the network for the language the user actually
// chose, and only for the content they actually open. Zero wasted calls.
// ─────────────────────────────────────────────────────────────

// Languages with manual translations already in content.js — no network call needed
const MANUAL_LANGS = new Set(["en", "hi"]);

// Map our lang codes → Google Translate language codes
const GOOGLE_CODES = {
  bn: "bn",   // Bengali
  te: "te",   // Telugu
  mr: "mr",   // Marathi
  ta: "ta",   // Tamil
  gu: "gu",   // Gujarati
  kn: "kn",   // Kannada
  ml: "ml",   // Malayalam
  pa: "pa",   // Punjabi
  or: "or",   // Odia
  as: "as",   // Assamese
  ur: "ur",   // Urdu
  ne: "ne",   // Nepali
  mai: "mai", // Maithili (Google supports)
  kok: "mr",  // Konkani → Marathi fallback
  sd: "sd",   // Sindhi
  doi: "hi",  // Dogri → Hindi fallback
  bho: "hi",  // Bhojpuri → Hindi fallback
  mni: "bn",  // Manipuri → Bengali fallback
  ks: "ur",   // Kashmiri → Urdu fallback
  sa: "sa",   // Sanskrit
  sat: "sat", // Santali
};

// Human-readable language names (used in UI display)
export const LANGUAGE_NAMES = {
  en:  "English",
  hi:  "हिंदी",
  bn:  "বাংলা",
  te:  "తెలుగు",
  mr:  "मराठी",
  ta:  "தமிழ்",
  gu:  "ગુજરાતી",
  kn:  "ಕನ್ನಡ",
  ml:  "മലയാളം",
  pa:  "ਪੰਜਾਬੀ",
  or:  "ଓଡ଼ିଆ",
  as:  "অসমীয়া",
  ur:  "اردو",
  ne:  "नेपाली",
  mai: "मैथिली",
  kok: "कोंकणी",
  sd:  "سنڌي",
  doi: "डोगरी",
  bho: "भोजपुरी",
  mni: "মৈতৈলোন্",
  ks:  "کٲشُر",
  sa:  "संस्कृत",
  sat: "ᱥᱟᱱᱛᱟᱲᱤ",
};

// ─── Cache helpers ───────────────────────────────────────────

function cacheKey(lang, text) {
  // Fast djb2 hash on first 120 chars — avoids storing giant keys
  let h = 5381;
  for (let i = 0; i < Math.min(text.length, 120); i++) {
    h = ((h << 5) + h) ^ text.charCodeAt(i);
    h = h & 0xffffffff;
  }
  return `arthika_tr_${lang}_${Math.abs(h)}`;
}

function getCached(key) {
  try { return sessionStorage.getItem(key) ?? null; } catch { return null; }
}

function setCache(key, val) {
  try { sessionStorage.setItem(key, val); } catch { /* storage full — just skip */ }
}

// ─── Core translation function ───────────────────────────────

/**
 * Translate a single string to targetLang.
 * Returns the original text if:
 *   - text is empty
 *   - targetLang is en/hi (already handled by content.js)
 *   - the network call fails (graceful fallback to English)
 */
export async function translateText(text, targetLang) {
  if (!text?.trim()) return text;
  if (MANUAL_LANGS.has(targetLang)) return text;

  const key = cacheKey(targetLang, text);
  const cached = getCached(key);
  if (cached) return cached;

  const googleLang = GOOGLE_CODES[targetLang] ?? targetLang;

  try {
    const url =
      `https://translate.googleapis.com/translate_a/single` +
      `?client=gtx&sl=en&tl=${googleLang}&dt=t&q=${encodeURIComponent(text)}`;
    const res  = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    // Response format: [[[translatedChunk, originalChunk, ...], ...], ...]
    const translated = data[0]
      ?.map(chunk => chunk[0])
      .filter(Boolean)
      .join("") ?? text;

    if (translated && translated !== text) {
      setCache(key, translated);
      return translated;
    }
  } catch (e) {
    console.warn(`[arthika/translate] ${targetLang}:`, e.message);
  }

  return text; // graceful fallback to English
}

/**
 * Translate an array of strings (FAQ items, myths, quiz options).
 * Each item is translated independently so separator characters
 * don't corrupt multi-sentence chunks.
 * All items fire in parallel for speed.
 */
export async function translateArray(arr, targetLang) {
  if (!arr?.length) return arr;
  if (MANUAL_LANGS.has(targetLang)) return arr;
  return Promise.all(arr.map(item => translateText(item, targetLang)));
}

/**
 * Translate multiple independent strings in one parallel batch.
 * Returns an array of translated strings in the same order.
 *
 * Usage:
 *   const [title, text] = await translateBatch([topic, raw.text], lang);
 */
export async function translateBatch(strings, targetLang) {
  if (!strings?.length) return strings;
  if (MANUAL_LANGS.has(targetLang)) return strings;
  return Promise.all(strings.map(s => translateText(s, targetLang)));
}

/**
 * Returns true if this language needs runtime translation
 * (i.e. is not English or Hindi — the two manually translated languages).
 */
export function needsTranslation(lang) {
  return !MANUAL_LANGS.has(lang);
}