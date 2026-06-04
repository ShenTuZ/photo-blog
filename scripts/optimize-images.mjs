import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import sharp from 'sharp'

export const imageOptions = {
  width: 1600,
  quality: 76
}

const supportedExtensions = new Set(['.jpg', '.jpeg', '.png'])

export function getOutputPath(inputDir, outputDir, fileName) {
  const parsedPath = path.parse(fileName)
  return path.join(outputDir, `${parsedPath.name}.webp`)
}

export async function optimizeImages(inputDir = 'public/images', outputDir = 'public/images-optimized') {
  await fs.mkdir(outputDir, { recursive: true })

  const entries = await fs.readdir(inputDir, { withFileTypes: true })
  let count = 0

  for (const entry of entries) {
    const inputPath = path.join(inputDir, entry.name)
    const outputPath = path.join(outputDir, entry.name)

    if (entry.isDirectory()) {
      count += await optimizeImages(inputPath, outputPath)
      continue
    }

    if (!supportedExtensions.has(path.extname(entry.name).toLowerCase())) continue

    const outputWebp = path.join(outputDir, `${path.parse(entry.name).name}.webp`)

    await sharp(inputPath)
      .resize({ width: imageOptions.width, withoutEnlargement: true })
      .webp({ quality: imageOptions.quality })
      .toFile(outputWebp)

    console.log(`optimized ${entry.name} -> ${path.basename(outputWebp)}`)
    count++
  }

  return count
}

const isMainModule = process.argv[1] === fileURLToPath(import.meta.url)

if (isMainModule) {
  optimizeImages().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
}
