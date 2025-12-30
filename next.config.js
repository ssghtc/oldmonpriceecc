/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commented out for dev server - uncomment for static export builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/ads.txt',
        destination: 'https://srv.adstxtmanager.com/19390/oldmonkprice.in',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;