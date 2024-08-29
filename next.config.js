/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/privacy',
        destination: '/',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/',
        permanent: true,
      },
      {
        source: '/team/ambreen-dar',
        destination: '/',
        permanent: true,
      },
      {
        source: '/team/join-us',
        destination: '/',
        permanent: true,
      },
      {
        source: '/team/kristen-dahlin',
        destination: '/',
        permanent: true,
      },
      {
        source: '/team/raquel-radice',
        destination: '/',
        permanent: true,
      },
      {
        source: '/team/rebekah-radice',
        destination: '/',
        permanent: true,
      },
      {
        source: '/team/sam-rizvi',
        destination: '/',
        permanent: true,
      },
      {
        source: '/team/susan-rov',
        destination: '/',
        permanent: true,
      },
    ];
  },
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
