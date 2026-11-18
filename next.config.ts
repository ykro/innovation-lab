import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/proyectos/escudo-encargo-agentic-web",
        destination: "/proyectos/escudo-agentic-web",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
