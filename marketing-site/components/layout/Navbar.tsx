import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ThemeToggle } from '../ui/theme-toggle';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md py-4 px-6 md:px-12 border-b border-border/40">
      <div className="w-full flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/RWAi_logo-xs.png" 
            alt="RWAi Logo" 
            width={120} 
            height={40} 
            style={{ height: 'auto' }}
            priority
            className="dark:invert"
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#rigs" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Rigs
          </Link>
          <Link href="#models" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Models
          </Link>
          <Link href="#whitelist" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Whitelist
          </Link>
          <Link href="#faqs" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            FAQs
          </Link>
          <Link href="#blog" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Blog
          </Link>
          <ThemeToggle variant="icon" />
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            <ThemeToggle variant="icon" />
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/whitelist">
              AI RIG Whitelist
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 