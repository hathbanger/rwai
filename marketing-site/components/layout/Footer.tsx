import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/RWAi_logo-xs.png" 
                alt="RWAi" 
                width={120} 
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              RWAi is the first platform where anyone can access, own, and earn passive income from state-of-the-art AI Rigs that run top open-source models.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#rigs" className="text-muted-foreground hover:text-primary transition-colors">
                  Rigs
                </Link>
              </li>
              <li>
                <Link href="#models" className="text-muted-foreground hover:text-primary transition-colors">
                  Models
                </Link>
              </li>
              <li>
                <Link href="#whitelist" className="text-muted-foreground hover:text-primary transition-colors">
                  Whitelist
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                Email: info@rwai.xyz
              </li>
              <li className="text-muted-foreground">
                Twitter: @RWAi_xyz
              </li>
              <li className="text-muted-foreground">
                Discord: discord.gg/rwai
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 RWAi. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 