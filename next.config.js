/** @type {import('next').NextConfig} */
const nextConfig = {
  // existing configurations...
  output: 'export', // IMPORTANT: This is crucial for static exports for GitHub Pages
  basePath: '/homepage', // <--- REPLACE 'homepage' WITH YOUR REPO NAME
  assetPrefix: './', // Optional: This can sometimes help with relative paths, but basePath is usually sufficient.
};

module.exports = nextConfig;
