import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] w-full py-16 lg:py-24">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background to-background/50 pointer-events-none" />
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div className="space-y-8 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold animate-slide-up">
              Decentralizing Ownership of 
              <span className="chaos-strike block mt-2">
                AI Infrastructure with RWA Tokenization
              </span>
            </h1>
            
            <p className="body-text text-muted-foreground animate-slide-up animation-delay-200">
              Run top open-source models like DeepSeek & Llama, delivering inference and other AI optimized compute services to a high demand market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-300">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link href="#what-we-do" className="link-primary">
                  Introducing RWAi
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative aspect-[4/3] w-full lg:aspect-square animate-fade-in animation-delay-500">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-600/20 animate-pulse animation-duration-4000 z-10" />
              <Image
                src="/images/RWAi_00060_.png"
                alt="AI Rig"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-cover"
                style={{ borderRadius: 'var(--radius)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 