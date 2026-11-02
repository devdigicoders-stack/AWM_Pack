import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    cpus: 1,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.nefab.com",
      },
      {
        protocol: "https",
        hostname: "nefab.com",
      },
    ],
  },
};

export default nextConfig;
