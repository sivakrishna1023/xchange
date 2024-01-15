// next.config.js
const nextConfig = {
  reactStrictMode: true,
  
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemap',
      },
    ];
  },
};

module.exports = nextConfig;
