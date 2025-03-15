import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function HomeTwo() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/texture_12.png"
              alt="Modern Architecture Background"
              fill
              style={{objectFit: 'cover'}}
              className="opacity-30"
            />
          </div>
          <div className="container mx-auto px-8 z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Architecting the Future of AI Computing
              </h1>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl">
                Enterprise-grade AI infrastructure, tokenized for the next generation of investors.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="/whitelist" className="bg-white text-black px-8 py-4 rounded-none hover:bg-gray-200 transition duration-300">
                  Join Whitelist
                </Link>
                <Link href="#learn-more" className="border border-white px-8 py-4 rounded-none hover:bg-white hover:text-black transition duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-zinc-900">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: 'Hardware Infrastructure',
                  description: 'State-of-the-art GPU clusters and computing centers built for AI workloads.',
                  image: '/images/GPU_13.png'
                },
                {
                  title: 'Tokenized Ownership',
                  description: 'Digital tokens backed by physical computing assets, providing true ownership.',
                  image: '/images/GPU_12.png'
                },
                {
                  title: 'Yield Generation',
                  description: 'Monthly USDC distributions from hardware leasing operations.',
                  image: '/images/GPU_10.png'
                }
              ].map((feature, index) => (
                <div key={index} className="group">
                  <div className="relative h-[300px] mb-8">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      style={{objectFit: 'cover'}}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Highlights */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">Investment Highlights</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Target Annual Yield',
                      value: '15-20%',
                      detail: 'Consistent monthly USDC distributions'
                    },
                    {
                      title: 'Asset-Backed Security',
                      value: '100%',
                      detail: 'Every token backed by physical hardware'
                    },
                    {
                      title: 'Minimum Investment',
                      value: '5,000 USDT',
                      detail: 'Professional investor focused'
                    }
                  ].map((highlight, index) => (
                    <div key={index} className="border border-gray-800 p-6 hover:border-gray-700 transition-colors duration-300">
                      <div className="text-sm text-gray-500 mb-2">{highlight.title}</div>
                      <div className="text-3xl font-bold mb-2">{highlight.value}</div>
                      <div className="text-gray-400">{highlight.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[600px]">
                <Image
                  src="/images/RWAi_00378_-1.png"
                  alt="Investment Visualization"
                  fill
                  style={{objectFit: 'cover'}}
                  className="rounded-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hardware Showcase */}
        <section className="py-24 bg-zinc-900">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold mb-16 text-center">Our Hardware Fleet</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-[400px] group">
                <Image
                  src="/images/GPU_7.png"
                  alt="NVIDIA H100 Clusters"
                  fill
                  style={{objectFit: 'cover'}}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-bold mb-2">NVIDIA H100 Clusters</h3>
                  <p className="text-gray-300">Enterprise-grade AI computing power</p>
                </div>
              </div>
              <div className="relative h-[400px] group">
                <Image
                  src="/images/GPU_5.png"
                  alt="Next-Gen Data Centers"
                  fill
                  style={{objectFit: 'cover'}}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-bold mb-2">Next-Gen Data Centers</h3>
                  <p className="text-gray-300">Optimized for AI workload efficiency</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black border-t border-gray-800">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Invest in AI Infrastructure?</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join our whitelist to be first in line for our upcoming token sale.
            </p>
            <Link href="/whitelist" className="bg-white text-black px-12 py-4 rounded-none hover:bg-gray-200 transition duration-300">
              Join Whitelist Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 