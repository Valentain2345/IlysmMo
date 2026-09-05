/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  output: 'export',
  basePath: '/IlysmMo',
  //assetPrefix: '/IlysmMo',
  trailingSlash: true,
}

export default nextConfig
