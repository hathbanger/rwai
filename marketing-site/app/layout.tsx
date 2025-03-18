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
  title: {
    default: "RWAi",
    template: "%s | RWAi",
  },
  description: "Tokenizing AI's Infrastructure",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rwai.io'),
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
