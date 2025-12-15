/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ['gsap', 'framer-motion'],
  },
  // Pour export statique si nécessaire
  // output: 'export',
  // trailingSlash: true,
}

module.exports = nextConfig

