// ============================================
// KONFIGURASI SUPABASE — HANYA ADVENTURE
// ============================================
// Ganti 2 nilai di bawah ini dengan punya Kakak sendiri,
// ambil dari Supabase Dashboard -> Settings -> API
//
// SUPABASE_URL   : "Project URL" (bentuknya https://xxxxx.supabase.co)
// SUPABASE_KEY   : "anon public" key (kode panjang diawali eyJ...)
//
// File ini AMAN untuk dipakai di browser/publik — anon key memang
// didesain untuk sisi frontend, keamanan sebenarnya diatur lewat
// Row Level Security (RLS) yang sudah di-setup di database.
// ============================================

const SUPABASE_URL = "https://btroljrblakoinnldutq.supabase.co";
const SUPABASE_KEY = "sb_publishable_EowT6566gZEMwdRWns8CXw_revpRjwe";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
