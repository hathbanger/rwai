/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove basePath as it can interfere with subdomain routing
  // basePath: process.env.NODE_ENV === 'production' ? '/app' : '',
  trailingSlash: false,
  images: {
    domains: ['app.localhost', 'localhost'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'app.localhost',
        port: '3000',
        pathname: '/**',
      }
    ],
    unoptimized: true,
    path: '',
    loader: 'default'
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // Enable hostname rewrites for development
  experimental: {
    turbo: {
      rules: {
        // Disable the experimental CSS features for Turbopack
        '*.css': {
          loaders: ['postcss-loader'],
        },
      },
    },
  },
};

export default nextConfig; 
