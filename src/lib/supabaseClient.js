import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fgeppduibtbosnmrlqdb.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZXBwZHVpYnRib3NubXJscWRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2NDIxNjEsImV4cCI6MjA3OTIxODE2MX0.PpMFJgiMQ1Y9z2PL4KyCdQeAKNFyfjOPPjxSOpKfCY4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
