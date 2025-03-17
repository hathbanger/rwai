import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: [
    // Match all request paths
    '/(.*)',
  ],
};

export default function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';
  const pathname = url.pathname;
  
  // Always log in all environments for debugging
  console.log('🔍 Middleware processing:');
  console.log(`📌 Full URL: ${request.url}`);
  console.log(`📌 Hostname: ${hostname}`);
  console.log(`📌 Pathname: ${pathname}`);
  console.log(`📌 Environment: ${process.env.NODE_ENV}`);
  console.log(`📌 Vercel?: ${hostname.includes('vercel.app') ? 'Yes' : 'No'}`);

  // Check if the hostname is a subdomain
  const currentHost = hostname.split(':')[0];
  
  // Handle app subdomain
  if (currentHost.startsWith('app.')) {
    console.log(`🚀 App subdomain detected: ${hostname}`);

    // Don't rewrite static assets or API routes
    if (
      pathname.startsWith('/_next/') ||
      pathname.startsWith('/favicon.ico') ||
      pathname.startsWith('/favicon_io/') ||
      pathname.startsWith('/images/')
    ) {
      console.log('⏩ Static asset requested, passing through');
      return NextResponse.next();
    }

    // Special case for Vercel deployments
    if (hostname.includes('vercel.app')) {
      console.log('⚠️ Vercel deployment detected for subdomain');
    }

    // Create a new URL for the rewrite
    const newUrl = new URL(`/app${pathname}`, request.url);
    
    console.log(`➡️ Rewriting ${hostname}${pathname} to /app${pathname}`);
    console.log(`📝 New URL: ${newUrl.toString()}`);

    if (pathname.startsWith('/models/') && pathname.split('/').length > 2) {
      const modelId = pathname.split('/')[2];
      console.log('- Model ID from path:', modelId);
    }

    // For root path, explicitly log
    if (pathname === '/') {
      console.log('- Root path detected for app subdomain');
      console.log('- Rewriting to /app/');
    }

    return NextResponse.rewrite(newUrl);
  }

  // If it's not a subdomain, proceed as normal
  console.log('✅ Not a subdomain, proceeding normally');
  return NextResponse.next();
} 
