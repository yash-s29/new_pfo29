/*
  # Portfolio Website Schema

  ## Overview
  Creates tables for managing a personal portfolio website including projects,
  certifications, and skills. Implements Row Level Security for data protection.

  ## New Tables
  
  ### `projects`
  Stores portfolio projects with details, images, and links
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Project name
  - `description` (text) - Project description
  - `image_url` (text) - Project screenshot/image
  - `technologies` (text[]) - Array of technologies used
  - `live_url` (text, nullable) - Live demo URL
  - `github_url` (text, nullable) - GitHub repository URL
  - `is_featured` (boolean) - Whether to show in carousel
  - `created_at` (timestamptz) - Creation timestamp
  - `order_index` (integer) - Display order

  ### `certifications`
  Stores professional certifications and achievements
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Certification name
  - `issuer` (text) - Issuing organization
  - `issue_date` (date) - Date issued
  - `credential_url` (text, nullable) - Verification URL
  - `file_url` (text, nullable) - Uploaded certificate file
  - `created_at` (timestamptz) - Creation timestamp

  ### `skills`
  Stores skills with proficiency levels
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Skill name
  - `category` (text) - Skill category (Frontend, Backend, etc.)
  - `proficiency` (integer) - Proficiency level (0-100)
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  - Enable RLS on all tables
  - Public read access for portfolio display
  - Authenticated access for management operations
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  technologies text[] NOT NULL DEFAULT '{}',
  live_url text,
  github_url text,
  is_featured boolean DEFAULT false,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create certifications table
CREATE TABLE IF NOT EXISTS certifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  issuer text NOT NULL,
  issue_date date NOT NULL,
  credential_url text,
  file_url text,
  created_at timestamptz DEFAULT now()
);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  proficiency integer NOT NULL CHECK (proficiency >= 0 AND proficiency <= 100),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- Projects policies
CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (true);

-- Certifications policies
CREATE POLICY "Anyone can view certifications"
  ON certifications FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert certifications"
  ON certifications FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update certifications"
  ON certifications FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete certifications"
  ON certifications FOR DELETE
  TO authenticated
  USING (true);

-- Skills policies
CREATE POLICY "Anyone can view skills"
  ON skills FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert skills"
  ON skills FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update skills"
  ON skills FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete skills"
  ON skills FOR DELETE
  TO authenticated
  USING (true);