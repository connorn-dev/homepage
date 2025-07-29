/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = 'homepage'; // Change if your repo name is different

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/homepage' : '',
  assetPrefix: isGithubPages ? '/homepage/' : '',
};

module.exports = nextConfig; 