// src/lib/supabase.ts

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ppjihblyoxkdhbjohdgz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwamloYmx5b3hrZGhiam9oZGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxNDQ5NjAsImV4cCI6MjA1OTcyMDk2MH0.faUU0uMcISt4s4awJbrWc0Vxm2fxvSk-SjODEY9DOWM';

export const supabase = createClient(supabaseUrl, supabaseKey);
