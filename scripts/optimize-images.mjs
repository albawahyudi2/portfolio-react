import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();

const jobs = [
  {
    input: "public/profile.png",
    output: "public/profile.webp",
    width: 1200,
    quality: 86,
  },
  {
    input: "public/Photo.png",
    output: "public/Photo.webp",
    width: 512,
    quality: 88,
  },
  {
    input: "public/Meta.png",
    output: "public/Meta.webp",
    width: 1200,
    quality: 86,
  },
];

const toMB = (bytes) => (bytes / (1024 * 1024)).toFixed(2);

async function optimizeImage({ input, output, width, quality }) {
  const inputPath = path.join(rootDir, input);
  const outputPath = path.join(rootDir, output);

  await fs.access(inputPath);
  const inputStats = await fs.stat(inputPath);

  const pipeline = sharp(inputPath).rotate();

  if (width) {
    pipeline.resize({ width, withoutEnlargement: true });
  }

  await pipeline.webp({ quality }).toFile(outputPath);

  const outputStats = await fs.stat(outputPath);
  const savings = inputStats.size - outputStats.size;
  const savingsPercent = ((savings / inputStats.size) * 100).toFixed(1);

  console.log(
    `${input} -> ${output} | ${toMB(inputStats.size)}MB -> ${toMB(outputStats.size)}MB | hemat ${savingsPercent}%`
  );
}

async function run() {
  for (const job of jobs) {
    try {
      await optimizeImage(job);
    } catch (error) {
      console.error(`Gagal optimize ${job.input}:`, error.message);
    }
  }
}

run();
