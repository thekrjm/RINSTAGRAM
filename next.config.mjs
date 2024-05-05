/** @type {import('next').NextConfig} */
const nextConfig = {
  //   experimental: {
  //     appDir: true,
  //   },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
