// next.config.ts

const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? '/testingdentalwebsite' : '',
  assetPrefix: isProd ? '/testingdentalwebsite/' : '',
  output: 'export', // Required for static export to GitHub Pages
  images: {
    unoptimized: true, // Disable image optimization for export
  },
}

export default nextConfig;
