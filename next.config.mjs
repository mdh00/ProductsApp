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
        },
        {
          protocol: "https",
          hostname: "icon-library.com"
        },
        {
          protocol: "http",
          hostname: "res.cloudinary.com"
        }
      ],
    },
    env: {
      MONGODB_URI: process.env.MONGODB_URI,
      MONGODB_DB: process.env.MONGODB_DB,
    },
  };

  
  
  export default nextConfig;
  

