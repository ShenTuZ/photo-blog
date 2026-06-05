const { neon } = require('@neondatabase/serverless')

const sql = neon(process.env.DATABASE_URL)

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  try {
    if (req.method === 'GET') {
      const { path } = req.query
      if (!path) return res.status(400).json({ error: 'path is required' })

      const comments = await sql`
        SELECT id, nick, content, created_at
        FROM comments
        WHERE path = ${path}
        ORDER BY created_at DESC
        LIMIT 50
      `

      return res.status(200).json({ comments })
    }

    if (req.method === 'POST') {
      const { path, nick, content } = req.body

      if (!path || !nick || !content) {
        return res.status(400).json({ error: 'path, nick and content are required' })
      }

      if (nick.length > 50) {
        return res.status(400).json({ error: '昵称不能超过50个字符' })
      }
      if (content.length > 2000) {
        return res.status(400).json({ error: '评论不能超过2000个字符' })
      }

      const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || 'unknown'

      const result = await sql`
        INSERT INTO comments (path, nick, content, ip)
        VALUES (${path}, ${nick.trim()}, ${content.trim()}, ${ip})
        RETURNING id, nick, content, created_at
      `

      return res.status(201).json({ comment: result[0] })
    }

    return res.status(405).json({ error: 'Method not allowed' })
  } catch (err) {
    console.error('Comment API error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
