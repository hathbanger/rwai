import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: [
    // Match all paths except internals and static files
    '/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)',
  ],
};

// Fast check for tracking parameters
function hasTrackingParams(urlString: string): boolean {
  return /_g[al]/.test(urlString);
}

// Helper to get the root domain from any hostname
function getRootDomain(hostname: string): string {
  // Remove port if present
  const host = hostname.split(':')[0];
  
  // If it's an IP address or localhost, return as is
  if (
    /^localhost$/.test(host) ||
    /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(host)
  ) {
    return host;
  }

  // Split hostname into parts
  const parts = host.split('.');
  // Get the last two parts for normal domains (e.g., rwai.xyz)
  // or the whole thing for special cases (e.g., vercel.app domains)
  return parts.slice(-2).join('.');
}

export default function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';
  const pathname = url.pathname;
  
  // IMPORTANT: Always log essential information
  console.log(`🔍 MIDDLEWARE - ${new Date().toISOString()}`);
  console.log(`📌 Host: ${hostname}`);
  console.log(`📌 Path: ${pathname}`);

  // Get the current host without port
  const currentHost = hostname.split(':')[0];
  const rootDomain = getRootDomain(currentHost);
  
  // Check if this is an app subdomain request
  const isAppSubdomain = currentHost.startsWith('app.');
  
  if (isAppSubdomain) {
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

    // Handle tracking parameters
    if (hasTrackingParams(request.url)) {
      const TRACKING_PARAMS = new Set(['_gl', '_ga', '_ga_3RT06YPS1M']);
      const trackingParams: Record<string, string> = {};
      
      for (const [key, value] of url.searchParams.entries()) {
        if (TRACKING_PARAMS.has(key)) {
          trackingParams[key] = value;
          url.searchParams.delete(key);
        }
      }

      // Create clean URL preserving the original pathname
      const cleanUrl = new URL(pathname + url.search, request.url);
      console.log(`➡️ Redirecting to clean URL: ${cleanUrl.toString()}`);
      const response = NextResponse.redirect(cleanUrl);

      // Set cookies using the detected root domain
      Object.entries(trackingParams).forEach(([param, value]) => {
        console.log(`🍪 Setting cookie: ${param} for domain: ${rootDomain}`);
        response.cookies.set(param, value, {
          domain: `.${rootDomain}`,
          path: '/',
          secure: true,
          sameSite: 'none',
          maxAge: 2592000 // 30 days
        });
      });

      return response;
    }

    // For app subdomain without tracking params, rewrite to app directory
    const newUrl = new URL(`/app${pathname}`, request.url);
    console.log(`➡️ Rewriting app subdomain request to: ${newUrl.toString()}`);
    return NextResponse.rewrite(newUrl);
  }

  console.log('✅ Not a subdomain - proceeding normally');
  return NextResponse.next();
} 
