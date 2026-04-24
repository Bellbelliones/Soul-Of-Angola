import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ttmepsdzizzjetqrsxal.supabase.co"
const supabaseAnonKey = "sb_publishable_Auy0m7t2eKHaUJWYThkrzQ_lRrpQE0e"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)