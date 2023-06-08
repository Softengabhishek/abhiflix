/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    images:{
      domains:["static.tvmaze.com"]
    }
  }
  
  module.exports = nextConfig
  