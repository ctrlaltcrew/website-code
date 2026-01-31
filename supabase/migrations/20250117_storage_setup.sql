-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- Enable RLS on storage objects
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Allow public read access to blog images
CREATE POLICY "Public Access for Blog Images"
ON storage.objects FOR SELECT
USING (bucket_id = 'blog-images');

-- Allow authenticated admins to upload images
CREATE POLICY "Authenticated users can upload blog images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

-- Allow authenticated admins to delete images
CREATE POLICY "Authenticated users can delete blog images"
ON storage.objects FOR DELETE
USING (bucket_id = 'blog-images' AND auth.role() = 'authenticated');
