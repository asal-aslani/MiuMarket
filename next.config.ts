import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,  // این خط بهینه‌سازی خودکار رو غیرفعال می‌کنه
  },
};

export default nextConfig;