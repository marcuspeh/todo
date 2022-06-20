/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_URL: "http://localhost:3000/api",
    FRONTEND_URL: "http://localhost:3001",
    API_KEY: "VERY SECRET KEY"
  }
}

module.exports = nextConfig
