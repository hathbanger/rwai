import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/(.*)'],
};

export default function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host')?.split(':')[0] || '';
  const pathname = url.pathname;

  console.log('Middleware processing request:', {
    url: request.url,
    hostname,
    pathname,
  });

  if (hostname === 'app.omnisat.org') {
    console.log(`App subdomain detected: ${hostname}`);

    if (/^\/(?:_next|favicon\.ico|favicon_io|images)\//.test(pathname)) {
      console.log('- Static asset requested, passing through');
      return NextResponse.next();
    }

    const newUrl = new URL(`/app${pathname}`, request.url);
    console.log(`Rewriting ${hostname}${pathname} → ${newUrl.pathname}`);

    if (pathname.startsWith('/models/')) {
      const segments = pathname.split('/');
      if (segments.length > 2) {
        console.log('- Model ID from path:', segments[2]);
      }
    }

    if (pathname === '/') {
      console.log('- Root path detected, rewriting to /app/');
    }

    return NextResponse.rewrite(newUrl);
  }

  return NextResponse.next();
}
