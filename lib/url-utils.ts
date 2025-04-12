/**
 * URL utilities for handling subdomain navigation in a way
 * that works across all environments (local, production, Vercel)
 */

/**
 * Checks if we're running on a Vercel platform
 */
export function isVercel(): boolean {
  return Boolean(
    typeof window !== 'undefined' && 
    window.location.host.includes('vercel.app')
  );
}

/**
 * Get the app subdomain URL
 * Works for:
 * - Local development (app.localhost:3000)
 * - Vercel deployments (app.rwai-eight.vercel.app)
 * - Production (app.yourdomain.com)
 */
export function getAppUrl(path = ''): string {
  if (typeof window === 'undefined') {
    return ''; // Return empty string for SSR
  }

  const { protocol, host } = window.location;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // If already on app subdomain, just use current host
  if (host.startsWith('app.')) {
    return `${protocol}//${host}${normalizedPath}`;
  }
  
  // For Vercel deployments - hardcode the proper format
  if (isVercel()) {
    // For Vercel deployment to rwai-eight.vercel.app
    // We want to ensure it's app.rwai-eight.vercel.app
    return `${protocol}//app.rwai-eight.vercel.app${normalizedPath}`;
  }
  
  // For local development and other environments
  return `${protocol}//app.${host}${normalizedPath}`;
}

/**
 * Get the main domain URL from an app subdomain
 */
export function getMainUrl(path = ''): string {
  if (typeof window === 'undefined') {
    return ''; // Return empty string for SSR
  }

  const { protocol, host } = window.location;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // If not on app subdomain, just use current host
  if (!host.startsWith('app.')) {
    return `${protocol}//${host}${normalizedPath}`;
  }
  
  // Remove 'app.' prefix from host
  const mainHost = host.replace(/^app\./, '');
  
  // For Vercel deployments - hardcode the proper format if needed
  if (isVercel()) {
    return `${protocol}//rwai-eight.vercel.app${normalizedPath}`;
  }
  
  return `${protocol}//${mainHost}${normalizedPath}`;
} 