/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  server: {
    target: "server",
    port: 3001,
    host: '192.168.10.14'
  }
}

module.exports = nextConfig
