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
 * Get the project name from a Vercel URL
 * Converts: [branch]-[project]-[username].vercel.app 
 * or: [project]-[username].vercel.app
 * to: [project]
 */
function getVercelProjectName(host: string): string {
  // For Vercel preview deployments, format is typically:
  // [branch]-[project]-[username].vercel.app
  
  // For production Vercel deployments, format is typically:
  // [project]-[username].vercel.app
  
  console.log('Parsing Vercel host:', host);
  
  if (host.includes('vercel.app')) {
    const parts = host.split('.');
    if (parts.length > 0) {
      const deploymentPart = parts[0]; // e.g., "rwai-eight" or "branch-rwai-eight"
      console.log('Deployment part:', deploymentPart);
      return deploymentPart; // Just return it as-is for now
    }
  }
  
  // Fallback
  return host;
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
    console.log('getAppUrl called during SSR');
    return ''; // Return empty string for SSR
  }

  const { protocol, host } = window.location;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  console.log('getAppUrl called');
  console.log('Current host:', host);
  console.log('Protocol:', protocol);
  console.log('Path:', normalizedPath);
  
  // If already on app subdomain, just use current host
  if (host.startsWith('app.')) {
    console.log('Already on app subdomain');
    return `${protocol}//${host}${normalizedPath}`;
  }
  
  // For Vercel deployments
  if (isVercel()) {
    console.log('Vercel deployment detected');
    
    // For Vercel, the subdomain should be app.rwai-eight.vercel.app
    // not app.[branch]-rwai-eight.vercel.app
    return `${protocol}//app.${host}${normalizedPath}`;
  }
  
  // For development/custom domains
  console.log('Standard environment (development or production)');
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
    console.log('getMainUrl called during SSR');
    return ''; // Return empty string for SSR
  }

  const { protocol, host } = window.location;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  console.log('getMainUrl called');
  console.log('Current host:', host);
  
  // If not on app subdomain, just use current host
  if (!host.startsWith('app.')) {
    console.log('Not on app subdomain, returning current host');
    return `${protocol}//${host}${normalizedPath}`;
  }
  
  // Remove 'app.' prefix from host
  const mainHost = host.replace(/^app\./, '');
  console.log('Converted app subdomain to main domain:', mainHost);
  return `${protocol}//${mainHost}${normalizedPath}`;
} 