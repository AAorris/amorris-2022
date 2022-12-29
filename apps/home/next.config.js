/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    newNextLinkBehavior: true,
    runtime: "edge",
  },
};

module.exports = nextConfig;
