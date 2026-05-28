import test from 'node:test'
import assert from 'node:assert/strict'
import path from 'node:path'

import { getOutputPath, imageOptions } from './optimize-images.mjs'

test('getOutputPath writes webp files into output directory', () => {
  assert.equal(
    getOutputPath('public/images', 'public/images-optimized', 'campus.jpg'),
    path.join('public/images-optimized', 'campus.webp')
  )
})

test('imageOptions keeps large images web ready', () => {
  assert.deepEqual(imageOptions, {
    width: 1600,
    quality: 76
  })
})
