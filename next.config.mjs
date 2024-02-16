/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/products/0',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
