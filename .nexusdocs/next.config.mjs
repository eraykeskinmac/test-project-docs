import { createMDX } from 'fumadocs-mdx/next';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { config as dotenvConfig } from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env.local from parent directory (project root)
dotenvConfig({ path: join(__dirname, '..', '.env.local') });

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX(config);
