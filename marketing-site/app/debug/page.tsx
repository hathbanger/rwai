"use client";

import React, { useEffect, useState } from 'react';
import { isVercel } from '../../lib/url-utils';

export default function DebugPage() {
  const [hostname, setHostname] = useState<string>('');
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isVercelEnv, setIsVercelEnv] = useState<boolean>(false);
  const [appSubdomainUrl, setAppSubdomainUrl] = useState<string>('');

  useEffect(() => {
    setIsClient(true);
    
    if (typeof window !== 'undefined') {
      setHostname(window.location.host);
      setIsVercelEnv(isVercel());
      
      // Generate app subdomain URL
      const { protocol, host } = window.location;
      
      // If already on app subdomain
      if (host.startsWith('app.')) {
        setAppSubdomainUrl(window.location.href);
      } else if (host.includes('vercel.app')) {
        // Vercel deployment
        setAppSubdomainUrl(`${protocol}//app.rwai-eight.vercel.app`);
      } else {
        // Local or other deployment
        setAppSubdomainUrl(`${protocol}//app.${host}`);
      }
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Debugging Information</h1>
      
      {!isClient && (
        <div className="p-4 mb-4 bg-yellow-100 text-yellow-800 rounded">
          Loading client-side data...
        </div>
      )}
      
      <div className="space-y-6">
        <div className="p-4 border rounded bg-gray-50">
          <h2 className="text-lg font-bold mb-2">Environment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div><span className="font-medium">Hostname:</span> {hostname}</div>
            <div><span className="font-medium">Vercel Environment:</span> {isVercelEnv ? 'Yes' : 'No'}</div>
            <div><span className="font-medium">Node Environment:</span> {process.env.NODE_ENV}</div>
            <div><span className="font-medium">Current URL:</span> {isClient ? window.location.href : 'N/A'}</div>
          </div>
        </div>
        
        <div className="p-4 border rounded bg-gray-50">
          <h2 className="text-lg font-bold mb-2">Subdomain Testing</h2>
          <div>
            <div className="mb-2"><span className="font-medium">App Subdomain URL:</span> {appSubdomainUrl}</div>
            <a 
              href={appSubdomainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Test App Subdomain
            </a>
          </div>
        </div>
        
        <div className="p-4 border rounded bg-gray-50">
          <h2 className="text-lg font-bold mb-2">Request Headers</h2>
          <div className="mb-2">Client-side cannot access all request headers due to browser security restrictions.</div>
          <div><span className="font-medium">User Agent:</span> {isClient ? window.navigator.userAgent : 'N/A'}</div>
        </div>
      </div>
    </div>
  );
} 