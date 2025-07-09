import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ✅ Ignore les erreurs TS au build
  },
  // Tu peux ajouter d'autres options ici si besoin
};

export default nextConfig;