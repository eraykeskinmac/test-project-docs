import { createMDX } from 'fumadocs-mdx/next';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env.local if it exists (local development)
const envPath = join(__dirname, '.env.local');
if (existsSync(envPath)) {
  const { config: dotenvConfig } = await import('dotenv');
  dotenvConfig({ path: envPath });
}

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX(config);
