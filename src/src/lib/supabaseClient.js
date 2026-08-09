import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

// If the two environment variables below are not set, `supabase` stays
// null and src/lib/storage.js automatically falls back to localStorage.
// This means the app keeps working with zero configuration; connecting
// Supabase is an opt-in upgrade, not a requirement.
export const isSupabaseConfigured = Boolean(url && key);

export const supabase = isSupabaseConfigured
  ? createClient(url, key, {
      realtime: { params: { eventsPerSecond: 5 } },
    })
  : null;
