/**
 * URL utilities for handling subdomain navigation in a way
 * that works across all environments (local, production, Vercel)
 */

/**
 * Checks if we're running on a Vercel platform
 */
function isVercel(): boolean {
  return Boolean(
    typeof window !== 'undefined' && 
    window.location.host.includes('vercel.app')
  );
}

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
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // If already on app subdomain, just use current host
  if (host.startsWith('app.')) {
    return `${protocol}//${host}${normalizedPath}`;
  }
  
  // For Vercel deployments, the URL structure is more complex
  // For example: project-8jf728z-username.vercel.app
  const isVercelDeployment = isVercel();
  
  console.log('Current host:', host);
  console.log('Is Vercel deployment:', isVercelDeployment);
  
  // For Vercel deployments, construct app subdomain
  if (isVercelDeployment) {
    // For Vercel, prefix with app.
    return `${protocol}//app.${host}${normalizedPath}`;
  }
  
  // For development/custom domains
  return `${protocol}//app.${host}${normalizedPath}`;
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
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // If not on app subdomain, just use current host
  if (!host.startsWith('app.')) {
    return `${protocol}//${host}${normalizedPath}`;
  }
  
  // Remove 'app.' prefix from host
  const mainHost = host.replace(/^app\./, '');
  return `${protocol}//${mainHost}${normalizedPath}`;
} 