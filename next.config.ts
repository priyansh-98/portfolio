import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: {
    appIsrStatus: false, // Disables the dynamic/static indicator badge in the bottom corner of the browser
  },
};

export default nextConfig;
