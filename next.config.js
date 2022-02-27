/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/shop/all', // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
};
