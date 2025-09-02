/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      "images.unsplash.com",
      "via.placeholder.com",
      "example.com"
    ],
  },

  experimental: {
    appDir: true, // Next.js 13+ ke liye
  },
};

export default nextConfig;
