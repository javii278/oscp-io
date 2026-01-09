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
  basePath: '/obdafoef834639f', // tu subruta ya configurada

  async redirects() {
  return [
    // Redirige la raíz
    {
      source: '/',
      destination: 'https://www.credential.net/welcome',
      permanent: true,
    },
    // Redirige todo lo que NO sea /obdafoef834639f o subrutas
    {
      source: '/((?!obdafoef834639f).*)',
      destination: 'https://www.credential.net/welcome',
      permanent: true,
    },
  ];
}
};

module.exports = nextConfig;
