import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: "C:\\Users\\drnik\\infinite-gundawar-webapp"
  },
  async rewrites() {
    return [
      {
        source: "/whatsapp/api/:path*",
        destination: "http://127.0.0.1:3212/api/:path*",
      },
    ];
  },
};

export default nextConfig;