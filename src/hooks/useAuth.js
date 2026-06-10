import { useState, useEffect } from "react";
import { supabase, SUPABASE_READY } from "../lib/supabase.js";
import { getSessionUser, onAuthChange } from "../lib/db.js";

/**
 * useAuth
 *
 * authUser   : undefined (loading) | null (logged out) | user object (logged in)
 * authLoading: true while initial session check is in flight
 *
 * NO demo mode. If Supabase is not configured the user stays on the
 * auth screen and sees a "not configured" message.
 */
export function useAuth() {
  const [authUser, setAuthUser] = useState(undefined);

  useEffect(() => {
    if (!SUPABASE_READY) {
      // Supabase not configured — stay logged out, show auth screen
      setAuthUser(null);
      return;
    }

    // Check for an existing session (e.g. returning user with a valid JWT)
    getSessionUser().then(user => setAuthUser(user ?? null));

    // Keep in sync with login / logout / token refresh events
    const { data: { subscription } } = onAuthChange(user => setAuthUser(user ?? null));
    return () => subscription.unsubscribe();
  }, []);

  return {
    authUser,
    authLoading: authUser === undefined,
    uid: authUser?.id ?? null,
  };
}
