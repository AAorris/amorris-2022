/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["ui", "repositories"]);

module.exports = withTM({
  reactStrictMode: true,
});
