/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // @see https://react-svgr.com/docs/next/
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
