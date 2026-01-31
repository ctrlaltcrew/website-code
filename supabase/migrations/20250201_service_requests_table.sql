-- Create service_requests table if it doesn't exist
CREATE TABLE IF NOT EXISTS service_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  service_type TEXT NOT NULL,
  budget_range TEXT,
  timeline TEXT,
  project_description TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in-progress', 'completed', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS
ALTER TABLE service_requests ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users (admins) to read all service requests
CREATE POLICY "Admins can view all service requests"
ON service_requests FOR SELECT
TO authenticated
USING (true);

-- Allow anyone to insert service requests (public contact form)
CREATE POLICY "Anyone can submit service requests"
ON service_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow authenticated users to update service requests
CREATE POLICY "Admins can update service requests"
ON service_requests FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_service_requests_status ON service_requests(status);
CREATE INDEX IF NOT EXISTS idx_service_requests_created_at ON service_requests(created_at DESC);
