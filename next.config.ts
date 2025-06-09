import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['miro.medium.com', 'dev.to', 'res.cloudinary.com', 'media.licdn.com'], // add any domains you need
  },
};

export default nextConfig;
