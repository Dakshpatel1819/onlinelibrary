/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gutendex.com',
        port: '',
        pathname: '/cache/epub/**',
      },
      {
        protocol: 'https',
        hostname: 'www.gutenberg.org',
        port: '',
        pathname: '/cache/epub/**',
      },
    ],
  },
};

module.exports = nextConfig;