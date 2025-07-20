<<<<<<< HEAD
-- Vibe Coding Landing Page Database Setup
-- 在 Supabase SQL Editor 中运行此脚本

-- 创建兴趣报名表
CREATE TABLE IF NOT EXISTS interests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subscribed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 创建索引以提高查询性能
CREATE INDEX IF NOT EXISTS idx_interests_email ON interests(email);
CREATE INDEX IF NOT EXISTS idx_interests_created_at ON interests(created_at);

-- 启用行级安全策略 (RLS)
ALTER TABLE interests ENABLE ROW LEVEL SECURITY;

-- 创建插入策略（允许匿名用户插入数据）
CREATE POLICY "Allow anonymous inserts" ON interests
    FOR INSERT WITH CHECK (true);

-- 创建查询策略（允许匿名用户查询数据）
CREATE POLICY "Allow anonymous selects" ON interests
    FOR SELECT USING (true);

-- 创建函数来获取总报名数
CREATE OR REPLACE FUNCTION get_total_interests()
RETURNS INTEGER AS $$
BEGIN
    RETURN (SELECT COUNT(*) FROM interests);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 授予执行权限
GRANT EXECUTE ON FUNCTION get_total_interests() TO anon;

-- 插入一些示例数据（可选）
INSERT INTO interests (name, email, subscribed) VALUES
    ('John Doe', 'john@example.com', true),
    ('Jane Smith', 'jane@example.com', false),
    ('Mike Johnson', 'mike@example.com', true)
=======
-- Vibe Coding Landing Page Database Setup
-- 在 Supabase SQL Editor 中运行此脚本

-- 创建兴趣报名表
CREATE TABLE IF NOT EXISTS interests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subscribed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 创建索引以提高查询性能
CREATE INDEX IF NOT EXISTS idx_interests_email ON interests(email);
CREATE INDEX IF NOT EXISTS idx_interests_created_at ON interests(created_at);

-- 启用行级安全策略 (RLS)
ALTER TABLE interests ENABLE ROW LEVEL SECURITY;

-- 创建插入策略（允许匿名用户插入数据）
CREATE POLICY "Allow anonymous inserts" ON interests
    FOR INSERT WITH CHECK (true);

-- 创建查询策略（允许匿名用户查询数据）
CREATE POLICY "Allow anonymous selects" ON interests
    FOR SELECT USING (true);

-- 创建函数来获取总报名数
CREATE OR REPLACE FUNCTION get_total_interests()
RETURNS INTEGER AS $$
BEGIN
    RETURN (SELECT COUNT(*) FROM interests);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 授予执行权限
GRANT EXECUTE ON FUNCTION get_total_interests() TO anon;

-- 插入一些示例数据（可选）
INSERT INTO interests (name, email, subscribed) VALUES
    ('John Doe', 'john@example.com', true),
    ('Jane Smith', 'jane@example.com', false),
    ('Mike Johnson', 'mike@example.com', true)
>>>>>>> 1c91fd7f6a78733f222f646d2a928cbfa3893d34
ON CONFLICT (email) DO NOTHING; 