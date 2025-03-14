import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] w-full flex items-center justify-center py-16 lg:py-24">
      {/* Full width/height background image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/tokenization_2.png"
          alt="AI Tokenization"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="flex justify-center lg:justify-start">
          <Card className="max-w-2xl w-full backdrop-blur-sm bg-gray-50/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-800 shadow-xl">
            <CardContent className="p-8 md:p-10">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl font-bold animate-slide-up text-gray-900 dark:text-white">
                  Decentralizing Ownership of 
                  <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    AI Infrastructure with RWA Tokenization
                  </span>
                </h1>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 animate-slide-up animation-delay-200">
                  Run top open-source models like DeepSeek & Llama, delivering inference and other AI optimized compute services to a high demand market.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-300 pt-2">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    <Link href="#what-we-do" className="link-primary">
                      Introducing RWAi
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary dark:text-primary/80 hover:bg-primary/10 dark:hover:bg-primary/10">
                    <Link href="/app" className="link-secondary">
                      Launch App
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero; 