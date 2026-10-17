import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.1.26", "192.168.1.*"],
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/Login",
      },
    ];
  },
};

export default nextConfig;
