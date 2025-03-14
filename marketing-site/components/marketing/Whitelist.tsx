import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

const Whitelist = () => {
  return (
    <section id="whitelist" className="relative py-24 bg-[#000414] dark:bg-[#000414]">
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary font-medium animate-fade-in">
              April 2024
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold leading-tight animate-slide-up text-white">
              Whitelist: <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-500">
                AI RIG sale
              </span>
            </h2>
            
            <p className="text-lg text-gray-200 animate-slide-up animation-delay-200">
              RWAi is the first platform where anyone purchase fractional ownership and earn passive income from high-performance AI rigs packaged with the latest and greatest GPUs, CPUs, Memory Capacity, and Storage. The ownership of each AI rig is then tokenized into AI Compute Tokens (ACTs). As each rig assists with AI compute and inference the associated revenue stream is distributed as USDC to holders on a weekly basis.
            </p>
            
            <p className="text-lg text-gray-200 animate-slide-up animation-delay-300">
              The Dell XE9680 servers with 8 H100 GPUs are cutting edge high performance rigs built for AI optimization and secured in Tier-1 data centers. They're optimized to run top open-source models like DeepSeek & Llama, delivering inference & other AI optimized compute services to a high demand paying market.
            </p>
          </div>
          
          <div className="lg:ml-auto lg:max-w-md">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-xl p-8 border border-gray-200 dark:border-gray-800 shadow-xl animate-slide-up animation-delay-400">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Upcoming AI Rig Sale</h3>
              <h4 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Dell XE9680 servers with 8 H200 GPUs</h4>
              
              <div className="font-bold mb-4 text-gray-900 dark:text-white">Fractionalized into AI Compute Tokens (ACT)</div>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Each High-Performance RIG is fractionalized into ACT Tokens on Ethereum mainnet.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Real yield in USDC from AI compute and inference is distributed to token holders on a weekly basis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Plus additional ecosystem partner opportunities for AI Compute Token (ACT) holders.</span>
                </li>
              </ul>
              
              <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                <Link href="/whitelist">
                  Join Our Whitelist
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whitelist; 