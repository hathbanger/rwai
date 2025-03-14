import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const Whitelist = () => {
  return (
    <section id="whitelist" className="py-24 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium animate-fade-in">
              April 2024
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold leading-tight animate-slide-up">
              Whitelist: <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-700">
                AI RIG sale
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground animate-slide-up animation-delay-200">
              RWAi is the first platform where anyone purchase fractional ownership and earn passive income from high-performance AI rigs packaged with the latest and greatest GPUs, CPUs, Memory Capacity, and Storage. The ownership of each AI rig is then tokenized into AI Compute Tokens (ACTs). As each rig assists with AI compute and inference the associated revenue stream is distributed as USDC to holders on a weekly basis.
            </p>
            
            <p className="text-lg text-muted-foreground animate-slide-up animation-delay-300">
              The Dell XE9680 servers with 8 H100 GPUs are cutting edge high performance rigs built for AI optimization and secured in Tier-1 data centers. They're optimized to run top open-source models like DeepSeek & Llama, delivering inference & other AI optimized compute services to a high demand paying market.
            </p>
            
            <div className="bg-card rounded-xl p-6 border border-border animate-slide-up animation-delay-400">
              <h3 className="text-xl font-bold mb-4">Upcoming AI Rig Sale</h3>
              <h4 className="text-2xl font-bold mb-6">Dell XE9680 servers with 8 H200 GPUs</h4>
              
              <div className="font-bold mb-4">Fractionalized into AI Compute Tokens (ACT)</div>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Each High-Performance RIG is fractionalized into ACT Tokens on Ethereum mainnet.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Real yield in USDC from AI compute and inference is distributed to token holders on a weekly basis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Plus additional ecosystem partner opportunities for AI Compute Token (ACT) holders.</span>
                </li>
              </ul>
              
              <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                <Link href="/whitelist">
                  Join Our Whitelist
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative h-[600px] order-1 lg:order-2 animate-float">
            <Image
              src="/images/RWAi_00060_.png"
              alt="AI Rig"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-purple-600/10 rounded-xl animate-pulse animation-duration-4000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whitelist; 