import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      "@elevenlabs/client": "@11labs/client",
    },
  },
};

export default nextConfig;
