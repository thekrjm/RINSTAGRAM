/** @type {import('next').NextConfig} */
const nextConfig = {
  //   experimental: {
  //     appDir: true,
  //   },
  typescript: {
    ignoreBuildErrors: true,
  },
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
