import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://csuurssjasorihjbhigc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzdXVyc3NqYXNvcmloamJoaWdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4Nzc0NjQsImV4cCI6MjA4NTQ1MzQ2NH0.CD64S7Qc4v2XR8X-D8v2TCyeYqqlwlIU2k062oDl9sc";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
