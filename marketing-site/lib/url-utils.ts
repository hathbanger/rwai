/**
 * URL utilities for handling subdomain navigation in a way
 * that works across all environments (local, production, Vercel)
 */

/**
 * Get the app subdomain URL
 * Works for:
 * - Local development (app.localhost:3000)
 * - Vercel preview deployments (app.[branch]-[project].vercel.app)
 * - Vercel production (app.yourdomain.com)
 */
export function getAppUrl(path = ''): string {
  if (typeof window === 'undefined') {
    return ''; // Return empty string for SSR
  }

  const { protocol, host } = window.location;
  
  // If already on app subdomain, just use current host
  if (host.startsWith('app.')) {
    return `${protocol}//${host}${path.startsWith('/') ? path : `/${path}`}`;
  }
  
  // Otherwise prepend 'app.' to current host
  return `${protocol}//app.${host}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Get the main domain URL from an app subdomain
 * Handles:
 * - Local (app.localhost:3000 → localhost:3000)
 * - Vercel (app.example.vercel.app → example.vercel.app)
 * - Production (app.yourdomain.com → yourdomain.com)
 */
export function getMainUrl(path = ''): string {
  if (typeof window === 'undefined') {
    return ''; // Return empty string for SSR
  }

  const { protocol, host } = window.location;
  
  // If not on app subdomain, just use current host
  if (!host.startsWith('app.')) {
    return `${protocol}//${host}${path.startsWith('/') ? path : `/${path}`}`;
  }
  
  // Remove 'app.' prefix from host
  const mainHost = host.replace(/^app\./, '');
  return `${protocol}//${mainHost}${path.startsWith('/') ? path : `/${path}`}`;
} 