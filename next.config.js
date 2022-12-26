/** @type {import('next').NextConfig} */

// const withTM = require('next-transpile-modules')([
//   '@stripe/firestore-stripe-payments',
// ]);

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['rb.gy', 'image.tmdb.org'],
  },
}

module.exports = nextConfig
