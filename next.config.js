/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qheijdbhlmoraisnzano.supabase.co",
        port: "",
      },
    ],
  },
}

module.exports = nextConfig
