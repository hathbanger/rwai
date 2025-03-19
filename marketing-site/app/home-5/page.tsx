import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function HomeFive() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <Navbar />
      <main>
        {/* Hero Section - Inspired by Snøhetta's clean typography */}
        <section className="relative min-h-[90vh] flex items-center bg-white">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-light text-zinc-900 mb-12 leading-tight">
                We build the
                <br />
                infrastructure
                <br />
                for AI's future.
              </h1>
              <div className="inline-block border border-zinc-900 px-4 py-1 text-sm font-medium text-zinc-900">
                TOKENIZED COMPUTING INFRASTRUCTURE
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid - Architectural style grid */}
        <section className="py-24 bg-white border-t border-zinc-200">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-light text-zinc-900">Featured Projects</h2>
                <div className="h-px w-full bg-zinc-200"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="space-y-6">
                <div className="relative h-[400px] bg-zinc-100">
                  <Image 
                    src="/images/RWAi_00131_-enhanced.png"
                    alt="H100 Cluster Facility"
                    fill
                    style={{objectFit: 'cover'}}
                    className="hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
                <div>
                  <div className="text-sm text-zinc-500 mb-2">2023—2024</div>
                  <h3 className="text-xl font-light text-zinc-900">H100 Cluster Facility</h3>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative h-[400px] bg-zinc-100">
                  <Image 
                    src="/images/GPU_14.png"
                    alt="Next-Gen Computing Center"
                    fill
                    style={{objectFit: 'cover'}}
                    className="hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
                <div>
                  <div className="text-sm text-zinc-500 mb-2">2024—Present</div>
                  <h3 className="text-xl font-light text-zinc-900">Next-Gen Computing Center</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services - Minimal list style */}
        <section className="py-24 bg-zinc-100">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-light text-zinc-900 mb-8">Services</h2>
              </div>
              <div className="md:col-span-2">
                <div className="space-y-12">
                  {[
                    {
                      title: 'Infrastructure Investment',
                      description: 'Tokenized ownership of enterprise-grade AI computing hardware.',
                      image: '/images/GPU_11.png'
                    },
                    {
                      title: 'Yield Generation',
                      description: 'Monthly USDC distributions from hardware leasing revenue.',
                      image: '/images/GPU_8.png'
                    },
                    {
                      title: 'Asset Management',
                      description: 'Professional deployment and maintenance of AI infrastructure.',
                      image: '/images/RWAi_00060_.png'
                    }
                  ].map((service, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 border-b border-zinc-200 last:border-0">
                      <div>
                        <h3 className="text-xl font-light text-zinc-900 mb-4">{service.title}</h3>
                        <p className="text-zinc-600">{service.description}</p>
                      </div>
                      <div className="relative h-[200px]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          style={{objectFit: 'cover'}}
                          className="rounded-sm"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats - Clean, minimal style */}
        <section className="py-24 bg-white border-t border-zinc-200">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '15-20%', label: 'Target Annual Yield' },
                { number: '24/7', label: 'Infrastructure Uptime' },
                { number: '100%', label: 'Asset-Backed Tokens' },
                { number: '5,000+', label: 'GPUs Deployed' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-light text-zinc-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About - Architectural style */}
        <section className="py-24 bg-zinc-100">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-2xl font-light text-zinc-900 mb-8">About RWAi</h2>
                <p className="text-zinc-600 mb-8 text-lg leading-relaxed">
                  RWAi is pioneering the tokenization of AI infrastructure, creating a bridge between 
                  digital assets and physical computing power. Our platform enables investors to own 
                  real-world AI hardware while earning consistent yields.
                </p>
                <Link 
                  href="/whitelist" 
                  className="inline-block border border-zinc-900 px-6 py-3 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors duration-300"
                >
                  Join Whitelist
                </Link>
              </div>
              <div className="relative h-[500px]">
                <Image
                  src="/images/RWAi_00307_.png"
                  alt="RWAi Infrastructure"
                  fill
                  style={{objectFit: 'cover'}}
                  className="rounded-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact - Minimal footer style */}
        <section className="py-24 bg-white border-t border-zinc-200">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-light text-zinc-900 mb-4">Ready to invest in AI infrastructure?</h2>
                <p className="text-zinc-600">Connect with us to learn more about our tokenized hardware investment opportunities.</p>
              </div>
              <div className="flex items-center justify-start md:justify-end">
                <Link 
                  href="/contact" 
                  className="inline-block border border-zinc-900 px-6 py-3 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors duration-300"
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 