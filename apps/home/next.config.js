const withTM = require("next-transpile-modules")(["ui"]);

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
  },
};

module.exports = withTM(config);
