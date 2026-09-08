/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["10.67.70.171"],

  reactCompiler: true,

  images: {
    domains: ["images.unsplash.com"],
  },

};

export default nextConfig;