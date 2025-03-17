/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove basePath as it can interfere with subdomain routing
  // basePath: process.env.NODE_ENV === 'production' ? '/app' : '',
  trailingSlash: false,
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      // Local development
      'app.localhost', 
      'localhost',
      // Production custom domains 
      'rwai.xyz', 
      'app.rwai.xyz', 
      'www.rwai.xyz',
      // Vercel domains
      'vercel.app',
      'rwai-eight.vercel.app',
      'app.rwai-eight.vercel.app'
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      // Local development patterns
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
      },
      // Production custom domain patterns
      {
        protocol: 'https',
        hostname: 'rwai.xyz',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'app.rwai.xyz',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.rwai.xyz',
        pathname: '/**',
      },
      // Vercel deployment patterns
      {
        protocol: 'https',
        hostname: '*.vercel.app',
        pathname: '/**',
      }
    ],
    unoptimized: true,
    path: '',
    loader: 'default'
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
