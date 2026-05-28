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

  const files = await fs.readdir(inputDir)
  const imageFiles = files.filter((file) => supportedExtensions.has(path.extname(file).toLowerCase()))

  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file)
    const outputPath = getOutputPath(inputDir, outputDir, file)

    await sharp(inputPath)
      .resize({ width: imageOptions.width, withoutEnlargement: true })
      .webp({ quality: imageOptions.quality })
      .toFile(outputPath)

    console.log(`optimized ${file} -> ${path.basename(outputPath)}`)
  }

  return imageFiles.length
}

const isMainModule = process.argv[1] === fileURLToPath(import.meta.url)

if (isMainModule) {
  optimizeImages().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
}
