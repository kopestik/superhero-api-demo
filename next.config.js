/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.superherodb.com",
        pathname: "/pictures2/**",
      },
    ],
  },
};

module.exports = nextConfig;
