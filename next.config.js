/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    BACKEND_SERVER_URL: process.env.BACKEND_SERVER_URL,
  }
}
