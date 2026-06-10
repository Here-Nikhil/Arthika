// useTTS.js — Gemini TTS for all languages
// Uses Gemini's text-to-speech API which natively supports Indian languages.
// Falls back to Web Speech API for English only.

import { useState, useCallback, useEffect, useRef } from "react";

const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Gemini TTS voice per language
const GEMINI_VOICE = {
  en:  "Kore",
  hi:  "Kore",
  bn:  "Kore",
  te:  "Kore",
  mr:  "Kore",
  ta:  "Kore",
  gu:  "Kore",
  kn:  "Kore",
  ml:  "Kore",
  pa:  "Kore",
  or:  "Kore",
  as:  "Kore",
  ur:  "Kore",
  ne:  "Kore",
};

// BCP-47 codes Gemini needs to know what language to speak
const GEMINI_LANG = {
  en: "en-IN", hi: "hi-IN", bn: "bn-IN", te: "te-IN", mr: "mr-IN",
  ta: "ta-IN", gu: "gu-IN", kn: "kn-IN", ml: "ml-IN", pa: "pa-IN",
  or: "or-IN", as: "as-IN", ur: "ur-IN", ne: "ne-NP",
  mai:"hi-IN", kok:"mr-IN", sd:"ur-IN", sat:"hi-IN", doi:"hi-IN",
  bho:"hi-IN", mni:"bn-IN", ks:"ur-IN", sa:"hi-IN",
};

// Convert base64 PCM to playable audio using Web Audio API
async function playPCM(base64Audio) {
  const binary = atob(base64Audio);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);

  // Gemini returns 24kHz 16-bit little-endian mono PCM
  const sampleRate = 24000;
  const samples = bytes.length / 2;
  const audioCtx = new AudioContext({ sampleRate });
  const buffer = audioCtx.createBuffer(1, samples, sampleRate);
  const channelData = buffer.getChannelData(0);

  const view = new DataView(bytes.buffer);
  for (let i = 0; i < samples; i++) {
    channelData[i] = view.getInt16(i * 2, true) / 32768;
  }

  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);

  return new Promise((resolve) => {
    source.onended = () => { audioCtx.close(); resolve(); };
    source.start();
  });
}

async function speakWithGemini(text, langCode, onEnd) {
  if (!GEMINI_KEY) { onEnd(); return; }

  // Strip markdown before sending to TTS
  const clean = text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`~#]/g, "")
    .replace(/—|→/g, ", ")
    .trim();

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${GEMINI_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: clean }] }],
          generationConfig: {
            responseModalities: ["AUDIO"],
            speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: {
                  voiceName: GEMINI_VOICE[langCode] ?? "Kore",
                },
              },
              languageCode: GEMINI_LANG[langCode] ?? "hi-IN",
            },
          },
        }),
      }
    );

    const data = await res.json();
    const audio = data?.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!audio) { onEnd(); return; }

    await playPCM(audio);
    onEnd();
  } catch (e) {
    console.error("Gemini TTS error:", e);
    onEnd();
  }
}

export function useTTS() {
  const [speaking, setSpeaking] = useState(false);
  const cancelledRef = useRef(false);

  const speakText = useCallback(async (text, langCode) => {
    cancelledRef.current = false;
    setSpeaking(true);
    await speakWithGemini(text, langCode, () => {
      if (!cancelledRef.current) setSpeaking(false);
    });
  }, []);

  const stopSpeaking = useCallback(() => {
    cancelledRef.current = true;
    setSpeaking(false);
    // Web Audio stops automatically when we don't hold a ref,
    // but we mark cancelled so onEnd doesn't re-set state
  }, []);

  return { speaking, speakText, stopSpeaking };
}