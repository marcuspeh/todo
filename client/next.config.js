/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_URL: "https://protected-scrubland.herokuapp.com/api",
    FRONTEND_URL: "https://todo-lime-theta.vercel.app/",
    API_KEY: "VERY SECRET KEY"
  }
}

module.exports = nextConfig
 