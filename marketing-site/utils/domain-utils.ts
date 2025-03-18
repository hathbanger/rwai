/**
 * Domain utility functions for handling cross-subdomain navigation
 */

/**
 * Gets the main domain URL by stripping any subdomains
 * @param currentHost Current hostname (window.location.host)
 * @param protocol Current protocol (window.location.protocol)
 * @returns The base URL for the main domain
 */
export const getMainDomainUrl = (currentHost: string, protocol: string): string => {
  // Handle localhost development case
  if (currentHost.includes('localhost')) {
    return `${protocol}//${currentHost}`;
  }
  
  // For production, remove any subdomain
  const parts = currentHost.split('.');
  if (parts.length > 2) {
    // Has a subdomain, get the main domain parts
    const mainDomain = parts.slice(1).join('.');
    return `${protocol}//${mainDomain}`;
  }
  
  // Already on main domain
  return `${protocol}//${currentHost}`;
};

/**
 * Gets the app subdomain URL
 * @param currentHost Current hostname (window.location.host)
 * @param protocol Current protocol (window.location.protocol)
 * @returns The base URL for the app subdomain
 */
export const getAppDomainUrl = (currentHost: string, protocol: string): string => {
  // Don't duplicate app subdomain if we're already on it
  if (currentHost.startsWith('app.')) {
    return `${protocol}//${currentHost}`;
  }
  
  // Handle localhost development case
  if (currentHost.includes('localhost')) {
    return `${protocol}//app.${currentHost}`;
  }
  
  // For production, ensure we use the main domain with app subdomain
  const parts = currentHost.split('.');
  if (parts.length > 2) {
    // Already has a subdomain, replace it with 'app'
    const mainDomain = parts.slice(1).join('.');
    return `${protocol}//app.${mainDomain}`;
  }
  
  // Add app subdomain to main domain
  return `${protocol}//app.${currentHost}`;
};

/**
 * Creates a URL for the main domain with the provided path
 * @param path Path to append to the main domain URL
 * @returns Full URL to the specified path on the main domain
 */
export const createMainDomainUrl = (path: string): string => {
  if (typeof window === 'undefined') {
    return path; // Server-side rendering case
  }
  
  const mainDomain = getMainDomainUrl(window.location.host, window.location.protocol);
  return `${mainDomain}${path.startsWith('/') ? path : `/${path}`}`;
};

/**
 * Creates a URL for the app subdomain with the provided path
 * @param path Path to append to the app subdomain URL
 * @returns Full URL to the specified path on the app subdomain
 */
export const createAppDomainUrl = (path: string): string => {
  if (typeof window === 'undefined') {
    return path; // Server-side rendering case
  }
  
  const appDomain = getAppDomainUrl(window.location.host, window.location.protocol);
  return `${appDomain}${path.startsWith('/') ? path : `/${path}`}`;
}; 