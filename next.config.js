const withTM = require("next-transpile-modules")(["@iq/lib", "@iq/utils"]);

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  output: 'export',
  images: { unoptimized: true },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});

module.exports = nextConfig;
