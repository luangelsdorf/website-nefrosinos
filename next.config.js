/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { svgo: false } }],
    })

    return config
  },

  images: {
    domains: ['picsum.photos', 'localhost', 'nefrosinos.com', 'nefrosinos.com.br'],
  }
}

module.exports = nextConfig
