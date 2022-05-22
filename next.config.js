/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com']
  },
  async redirects() {
    return [
      {
        source: '/r/:hash',
        destination: '/repository/:hash',
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
