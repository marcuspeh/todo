/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_URL: "https://todo-manager-2.herokuapp.com/api",
    FRONTEND_URL: "https://todo-manager-2.herokuapp.com",
    API_KEY: "VERY SECRET KEY"
  }
}

module.exports = nextConfig
 