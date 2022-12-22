/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'rb.gy',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'image.tmdb.org'
    //   }
    // ],
    domains: ['rb.gy', 'image.tmdb.org'],
  },
}

module.exports = nextConfig
