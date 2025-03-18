import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RWAi | Tokenizing AI's Infrastructure",
  description: "RWAi enables fractional ownership of AI infrastructure through tokenization. Invest in GPU clusters, data centers, and AI computing resources with our innovative Web3 platform. Join the future of decentralized AI infrastructure ownership and earn passive income from high-demand computing resources.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rwai.xyz'),
  keywords: [
    "AI infrastructure",
    "GPU tokenization",
    "fractional ownership",
    "Web3",
    "blockchain",
    "data centers",
    "passive income",
    "AI computing",
    "decentralized infrastructure",
    "GPU investment"
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rwai.xyz',
    siteName: 'RWAi',
    title: 'RWAi | Tokenizing AI\'s Infrastructure',
    description: 'RWAi enables fractional ownership of AI infrastructure through tokenization. Invest in GPU clusters, data centers, and AI computing resources.',
    images: [
      {
        url: '/rwai_fb.png',
        width: 1200,
        height: 630,
        alt: 'RWAi - Tokenizing AI Infrastructure',
      },
      {
        url: '/rwai_in.png',
        width: 1200,
        height: 627,
        alt: 'RWAi - Tokenizing AI Infrastructure',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RWAi | Tokenizing AI\'s Infrastructure',
    description: 'RWAi enables fractional ownership of AI infrastructure through tokenization. Invest in GPU clusters, data centers, and AI computing resources.',
    images: [{
      url: '/rwai_x.png',
      width: 1200,
      height: 675,
      alt: 'RWAi - Tokenizing AI Infrastructure'
    }],
    creator: '@RWAi_xyz',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon_io/apple-touch-icon.png" }
    ],
    other: [
      {
        rel: "manifest",
        url: "/favicon_io/site.webmanifest",
      },
      {
        rel: "android-chrome",
        url: "/favicon_io/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        url: "/favicon_io/android-chrome-512x512.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // This script runs before React hydration to prevent flash of unstyled content
              try {
                // Check localStorage for theme preference
                const savedTheme = localStorage.getItem('theme') || 'dark';
                
                if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  // Default to dark mode for any other value or if not set
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {
                // Fail silently if localStorage is not available
                // Default to dark mode
                document.documentElement.classList.add('dark');
                console.error('Failed to access localStorage:', e);
              }
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="dark" storageKey="theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
