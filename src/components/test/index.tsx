import { useEffect } from "react"
import SupabaseService from "../../lib/supabase"

export default function Test() {

  useEffect(() => {
    const supabase = SupabaseService.getClient()

    console.log("Supabase conectado:", supabase)
  }, [])

  return <h1>Home</h1>
}