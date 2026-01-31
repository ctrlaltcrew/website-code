import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vdvtfqzybecwdaozfynr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkdnRmcXp5YmVjd2Rhb3pmeW5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc5NzEwODcsImV4cCI6MjA0MzU0NzA4N30.kk1FpLnWy0njKhb5r61Ycg3hqMjEXDRSGPFEIGRFRp4";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
