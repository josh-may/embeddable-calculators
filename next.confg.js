/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => [
    {
      source: '/public/bigcommerce-cpm-calc.html',
      destination: '/pages/api/bigcommerce-cpm-calc.js'
    }
  ]
  /* config options here */
};

module.exports = nextConfig;
