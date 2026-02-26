import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname, // FORCE frontend as workspace root
  },
};

export default nextConfig;