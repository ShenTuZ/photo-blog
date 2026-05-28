import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'

const vercelConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf8'))

test('Vercel serves optimized images before the SPA fallback', () => {
  const optimizedRouteIndex = vercelConfig.routes.findIndex((route) => route.src === '/images-optimized/(.*)')
  const fallbackRouteIndex = vercelConfig.routes.findIndex((route) => route.src === '/(.*)')

  assert.notEqual(optimizedRouteIndex, -1)
  assert.ok(optimizedRouteIndex < fallbackRouteIndex)
  assert.equal(vercelConfig.routes[optimizedRouteIndex].dest, 'images-optimized/$1')
})
