import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/vllm-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
