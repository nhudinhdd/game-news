/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "game-addict.s3.ap-northeast-2.amazonaws.com",
      "ssl.nexon.com",
      "media.contentapi.ea.com",
    ],
  },
  env: {
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  },
};

module.exports = nextConfig;
