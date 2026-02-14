CREATE TABLE launch_interest (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text,
  phone text,
  apps text[] NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE launch_interest ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous inserts" ON launch_interest FOR INSERT WITH CHECK (true);
