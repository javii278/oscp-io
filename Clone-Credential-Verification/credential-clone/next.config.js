/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["*.preview.same-app.com"],

  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },

  basePath: '/obdafoef834639f', // Tu subruta

  async redirects() {
    return [
      // Redirige la raíz del dominio a la URL externa
      {
        source: '/',
        destination: 'https://www.credential.net/welcome',
        permanent: true,
      },
      // Redirige cualquier ruta que NO empiece con el basePath
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'credentials-lab.net',
          },
        ],
        async resolve(req) {
          const path = req.nextUrl.pathname;
          if (!path.startsWith('/obdafoef834639f')) {
            return 'https://www.credential.net/welcome';
          }
          return null; // deja pasar rutas válidas
        },
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
