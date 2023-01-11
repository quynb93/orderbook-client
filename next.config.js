/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_WS_URL: process.env.NEXT_WS_URL,
  },
}

module.exports = nextConfig
