import type { NextConfig } from 'next';
const { i18n } = require('./next-i18next.config');

const nextConfig: NextConfig = {
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'controlt.io',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'parquesoftmeta.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
