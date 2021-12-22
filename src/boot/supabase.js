import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://bbftsoasrlqrslmemkpp.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDIwOTE4OSwiZXhwIjoxOTU1Nzg1MTg5fQ.FtmvV_4wsu9mCcgjYj6Z4t1Aniaeq9LZkxbrcVpXskM'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

console.log('init supabase');
export function UseSupabase() {
  return {
    supabase
  }
}
