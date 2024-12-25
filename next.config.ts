import type { NextConfig } from "next";

module.exports = {
  
  trailingSlash: true,
};
const nextConfig: NextConfig = {
   webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
  reactStrictMode: true,

};

export default nextConfig;

