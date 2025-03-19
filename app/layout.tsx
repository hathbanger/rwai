import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to GTM domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Async GTM loader */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KBSN67QN');
            `
          }}
        />
        
        {/* GTM configuration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.gtag = function(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3RT06YPS1M', {
                'cookie_domain': '.rwai.xyz',
                'cookie_flags': 'SameSite=None;Secure',
                'linker': {
                  'domains': ['rwai.xyz', 'app.rwai.xyz'],
                  'decorate_forms': true,
                  'accept_incoming': true,
                  'url_position': 'none'
                },
                'transport_url': 'https://rwai.xyz'
              });
            `
          }}
        />
      </head>
      <body>
        {/* GTM noscript - Deferred loading */}
        <noscript dangerouslySetInnerHTML={{
          __html: `
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KBSN67QN"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
              loading="lazy"
            ></iframe>
          `
        }} />
        {children}
      </body>
    </html>
  );
} 