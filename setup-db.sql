-- 在 Neon 控制台的 SQL Editor 中执行以下语句

-- 创建点赞表
CREATE TABLE IF NOT EXISTS likes (
  id SERIAL PRIMARY KEY,
  path VARCHAR(255) NOT NULL,
  ip VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(path, ip)
);

-- 创建评论表
CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  path VARCHAR(255) NOT NULL,
  nick VARCHAR(100) NOT NULL,
  content TEXT NOT NULL,
  ip VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

-- 创建索引加速查询
CREATE INDEX IF NOT EXISTS idx_likes_path ON likes(path);
CREATE INDEX IF NOT EXISTS idx_comments_path ON comments(path);
