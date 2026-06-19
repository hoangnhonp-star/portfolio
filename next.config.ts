import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Ưu tiên AVIF (nhẹ nhất), fallback WebP. Ảnh local trong public/ không cần remotePatterns.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
