import { createClient } from "@supabase/supabase-js";

const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpZGRiZ25nZG5pdG9pYmdrZWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg5NTk1MTUsImV4cCI6MTk4NDUzNTUxNX0.e1wvrFUaqYtrs7RRGyIYOYauL8w3mkRiZ3YMgYWWaO4"
const PROJECT_URL = "https://widdbgngdnitoibgkefh.supabase.co"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video").select("*")
        }
    }
}