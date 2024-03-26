const withTM = require("next-transpile-modules")(["@iq/lib", "@iq/utils"]);

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/health',
        destination: '/api/health',
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});

module.exports = nextConfig;
