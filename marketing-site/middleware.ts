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
  const isVercel = hostname.includes('vercel.app');
  
  // IMPORTANT: Always log essential information
  console.log(`🔍 MIDDLEWARE - ${new Date().toISOString()}`);
  console.log(`📌 Host: ${hostname}`);
  console.log(`📌 Path: ${pathname}`);
  console.log(`📌 Vercel: ${isVercel ? 'Yes' : 'No'}`);

  // Check if the hostname is a subdomain
  const currentHost = hostname.split(':')[0];
  
  // Handle app subdomain
  if (currentHost.startsWith('app.')) {
    console.log(`🚀 App subdomain detected: ${hostname}`);

    // Static assets pass-through
    if (
      pathname.startsWith('/_next/') ||
      pathname.startsWith('/favicon.ico') ||
      pathname.startsWith('/favicon_io/') ||
      pathname.startsWith('/images/')
    ) {
      console.log('⏩ Static asset - passing through');
      return NextResponse.next();
    }

    // Get GA tracking parameters from the URL
    const glParam = url.searchParams.get('_gl');
    const gaParam = url.searchParams.get('_ga');

    // Create the rewrite URL without query parameters
    const newUrl = new URL(`/app${pathname}`, request.url);
    console.log(`➡️ Rewriting to: ${newUrl.toString()}`);

    // Create response with rewrite
    const response = NextResponse.rewrite(newUrl);

    // If we have tracking parameters, set them as cookies instead
    if (glParam || gaParam) {
      if (glParam) {
        response.cookies.set('_gl', glParam, {
          domain: '.rwai.xyz',
          path: '/',
          secure: true,
          sameSite: 'none'
        });
      }
      if (gaParam) {
        response.cookies.set('_ga', gaParam, {
          domain: '.rwai.xyz',
          path: '/',
          secure: true,
          sameSite: 'none'
        });
      }
    }

    return response;
  }

  console.log('✅ Not a subdomain - proceeding normally');
  return NextResponse.next();
} 
