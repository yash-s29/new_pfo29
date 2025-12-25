import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Project = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  technologies: string[];
  live_url?: string;
  github_url?: string;
  is_featured: boolean;
  order_index: number;
  created_at: string;
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issue_date: string;
  credential_url?: string;
  file_url?: string;
  created_at: string;
};

export type Skill = {
  id: string;
  name: string;
  category: string;
  proficiency: number;
  created_at: string;
};
