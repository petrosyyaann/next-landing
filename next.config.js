/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: true,
  },
  experimental: {
    // отключаем lightningcss для Vercel
    optimizeCss: false,
  },
}

module.exports = nextConfig
