import dotenv from 'dotenv';

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "ibb.co"
        },
        {
          protocol: "https",
          hostname: "i.ibb.co"
        }
      ],
    },
    env: {
      MONGODB_URI: process.env.MONGODB_URI,
      MONGODB_DB: process.env.MONGODB_DB,
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/products',
          permanent: true, // Set to true if the redirect is permanent
        },
      ];
    },
  
  
  };

  
  
  export default nextConfig;
  

