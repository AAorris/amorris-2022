const withTM = require("next-transpile-modules")(["ui", "repositories"]);

module.exports = withTM({
  reactStrictMode: true,
  experimental: {
    reactRoot: true,
  },
  async redirects() {
    return [
      {
        source: "/links",
        destination: "/links-tagged",
        permanent: false,
      },
    ];
  },
});
