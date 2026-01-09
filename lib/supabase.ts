import { createClient, SupabaseClient } from "@supabase/supabase-js"

// Lazy initialization to avoid build-time errors when env vars are missing
let _supabaseAdmin: SupabaseClient | null = null

// Server-side only (service role key - bypasses RLS)
export function getSupabaseAdmin(): SupabaseClient {
  if (!_supabaseAdmin) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (!url || !key) {
      throw new Error("Missing Supabase environment variables: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY required")
    }
    _supabaseAdmin = createClient(url, key)
  }
  return _supabaseAdmin
}

// Export for backwards compatibility - use getSupabaseAdmin() instead
export { getSupabaseAdmin as supabaseAdmin }
