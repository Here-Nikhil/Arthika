import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Both values must be present — that's the only check.
// No placeholder string comparisons that can false-positive.
const isConfigured = Boolean(url && key);

export const supabase = isConfigured ? createClient(url, key) : null;
export const SUPABASE_READY = isConfigured;
