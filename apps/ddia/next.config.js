/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
  },
  images: {
    domains: ["cdn.zappy.app"],
  },
};

module.exports = nextConfig;
