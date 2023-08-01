/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["game-addict.s3.ap-northeast-2.amazonaws.com"] },
  env: {
    DOMAIN: process.env.DOMAIN,
  },
};

module.exports = nextConfig;
