import { useState, useEffect } from 'react';
import { createMainDomainUrl, createAppDomainUrl } from '../utils/domain-utils';

/**
 * Custom hook for handling cross-domain navigation between main site and app subdomain
 * 
 * @returns Object containing:
 *  - isMounted: Boolean indicating if component is mounted and window is available
 *  - getMainDomainUrl: Function to get a URL on the main domain
 *  - getAppDomainUrl: Function to get a URL on the app subdomain
 */
export const useCrossDomainNavigation = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const getMainDomainUrl = (path: string): string => {
    if (!isMounted) return '#'; // Fallback for SSR
    return createMainDomainUrl(path);
  };
  
  const getAppDomainUrl = (path: string): string => {
    if (!isMounted) return '#'; // Fallback for SSR
    return createAppDomainUrl(path);
  };
  
  return {
    isMounted,
    getMainDomainUrl,
    getAppDomainUrl
  };
}; 