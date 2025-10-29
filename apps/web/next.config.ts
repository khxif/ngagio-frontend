import dotenv from 'dotenv';
import type { NextConfig } from 'next';
import { resolve } from 'path';

dotenv.config({ path: resolve(process.cwd(), '../../.env') });

const nextConfig: NextConfig = {
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  },
};

export default nextConfig;
