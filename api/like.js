import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL)

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || 'unknown'

  try {
    // GET: 查询点赞数和当前用户是否已点赞
    if (req.method === 'GET') {
      const { path } = req.query
      if (!path) return res.status(400).json({ error: 'path is required' })

      const countResult = await sql`SELECT COUNT(*)::int AS count FROM likes WHERE path = ${path}`
      const likedResult = await sql`SELECT 1 FROM likes WHERE path = ${path} AND ip = ${ip} LIMIT 1`

      return res.status(200).json({
        count: countResult[0]?.count || 0,
        liked: likedResult.length > 0
      })
    }

    // POST: 切换点赞（点赞/取消）
    if (req.method === 'POST') {
      const { path } = req.body
      if (!path) return res.status(400).json({ error: 'path is required' })

      // 检查是否已点赞
      const existing = await sql`SELECT 1 FROM likes WHERE path = ${path} AND ip = ${ip} LIMIT 1`

      if (existing.length > 0) {
        // 取消点赞
        await sql`DELETE FROM likes WHERE path = ${path} AND ip = ${ip}`
      } else {
        // 点赞
        await sql`INSERT INTO likes (path, ip) VALUES (${path}, ${ip})`
      }

      // 返回最新状态
      const countResult = await sql`SELECT COUNT(*)::int AS count FROM likes WHERE path = ${path}`
      return res.status(200).json({
        count: countResult[0]?.count || 0,
        liked: existing.length === 0
      })
    }

    return res.status(405).json({ error: 'Method not allowed' })
  } catch (err) {
    console.error('Like API error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
