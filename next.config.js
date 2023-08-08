/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    env: {
      
        BASE_URL: "https://demo-api.autobse.com",
        API_URL: "https://demo-api.autobse.com/api/graphql",
     },
    images: {
        domains: [
            "chnimgs3bkt.s3.ap-south-1.amazonaws.com",
            "photos.google.com",
            "firebasestorage.googleapis.com",
            
        ],
    },
};

module.exports = nextConfig;