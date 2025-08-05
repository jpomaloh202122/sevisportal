-- SEVIS Portal Database Schema for Supabase

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (main user information)
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'citizen' CHECK (role IN ('citizen', 'admin', 'staff')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_login TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Auth users table (for password storage)
CREATE TABLE IF NOT EXISTS auth_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    encrypted_password VARCHAR(255) NOT NULL,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);



-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_auth_users_email ON auth_users(email);
CREATE INDEX IF NOT EXISTS idx_auth_users_user_id ON auth_users(user_id);


-- Enable Row Level Security (RLS) - but with permissive policies for custom auth
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE auth_users ENABLE ROW LEVEL SECURITY;


-- RLS Policies for users table - permissive for custom JWT auth
CREATE POLICY "Allow all operations on users" ON users
    FOR ALL USING (true);

-- RLS Policies for auth_users table - permissive for custom JWT auth
CREATE POLICY "Allow all operations on auth_users" ON auth_users
    FOR ALL USING (true);



-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_users_updated_at 
    BEFORE UPDATE ON users 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();



-- Insert demo users (optional - you can remove this in production)
-- Note: These passwords are hashed versions of 'password123'
INSERT INTO users (id, email, name, role, created_at) VALUES
    ('550e8400-e29b-41d4-a716-446655440001', 'admin@sevis.gov', 'System Administrator', 'admin', '2024-01-01 00:00:00+00'),
    ('550e8400-e29b-41d4-a716-446655440002', 'citizen@example.com', 'John Citizen', 'citizen', '2024-01-15 00:00:00+00')
ON CONFLICT (email) DO NOTHING;

INSERT INTO auth_users (email, encrypted_password, user_id) VALUES
    ('admin@sevis.gov', '$2b$12$QEbarszsHimBrxM3iQdzUuejxvQ/Ruu0rpxB9URfFsxV9lbecNC1W', '550e8400-e29b-41d4-a716-446655440001'),
    ('citizen@example.com', '$2b$12$QEbarszsHimBrxM3iQdzUuejxvQ/Ruu0rpxB9URfFsxV9lbecNC1W', '550e8400-e29b-41d4-a716-446655440002')
ON CONFLICT (email) DO NOTHING;

-- Create a view for user statistics (optional)
CREATE OR REPLACE VIEW user_stats AS
SELECT 
    role,
    COUNT(*) as total_users,
    COUNT(CASE WHEN last_login IS NOT NULL THEN 1 END) as active_users,
    AVG(EXTRACT(EPOCH FROM (NOW() - created_at))/86400) as avg_days_since_registration
FROM users 
GROUP BY role;

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO anon, authenticated; 