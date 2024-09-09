/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
      },
      reactStrictMode: false,
      assetPrefix: process.env.NODE_ENV === 'production' ? 'https://ajfoundation.site' : ''
};

export default nextConfig;
