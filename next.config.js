const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add the following two lines.
  basePath: isProd ? '/homepage' : '',
  assetPrefix: isProd ? '/homepage/' : '',
};

module.exports = nextConfig;