const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const ContentSecurityPolicy = `
  default-src 'self';
  img-src https://*;
  child-src 'none';
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
  experimental: {
    legacyBrowsers: false,
  },
  transpilePackages: ['@codetest/api', '@codetest/pokeapi'],
};

module.exports = (phase) => {
  const config = [withBundleAnalyzer].reduce(
    (acc, plugin) => plugin(acc),
    nextConfig
  );

  if (phase !== PHASE_DEVELOPMENT_SERVER) {
    return {
      async headers() {
        return [
          {
            source: '/:path*',
            headers: securityHeaders,
          },
        ];
      },
      ...config,
    };
  }

  return config;
};
