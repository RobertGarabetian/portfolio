import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
        pathname: '/f/**',
        search: '',

      },
      {
        protocol: 'https',
        hostname: 'oo4uynqbfg.ufs.sh',
        port: '',
        pathname: '/f/**',
        search: '',

      },
    ],
  },
};

export default nextConfig;
