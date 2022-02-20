const withPlugins = require("next-compose-plugins");

const withTM = require("next-transpile-modules")(["ui"])({
  reactStrictMode: true,
});

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

module.exports = withPlugins(
  [
    [withTM],
    [
      withMDX,
      {
        pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
      },
    ],
  ],
  {
    experimental: {
      reactRoot: true,
      concurrentFeatures: true,
      runtime: "edge",
      serverComponents: true,
    },
  }
);
