const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/homepage' : '',
  assetPrefix: isProd ? '/homepage/' : '', // Note the trailing slash here
};

module.exports = nextConfig;