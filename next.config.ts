import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "taxi-02-strasbourg.vercel.app" }],
        destination: "https://www.taxi-02-strasbourg.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
