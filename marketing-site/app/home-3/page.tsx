import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function HomeThree() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/texture_11.png" 
              alt="AI Infrastructure" 
              fill 
              style={{objectFit: 'cover'}}
              className="opacity-40"
            />
          </div>
          <div className="container mx-auto px-8 z-10">
            <div className="max-w-4xl">
              <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
                TOKENIZED AI INFRASTRUCTURE
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Invest in AI Hardware.<br />
                Earn Passive Yield.
              </h1>
              <p className="text-xl mb-10 text-gray-300 max-w-2xl">
                RWAI tokenizes high-performance AI infrastructure, allowing investors to own real-world assets that generate consistent USDC yield.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link href="/whitelist" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition duration-300">
                  Join Whitelist
                </Link>
                <Link href="#how-it-works" className="border border-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-black transition duration-300">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-gray-900">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">How RWAI Works</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A simple three-step process that connects investors with high-yield AI infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-gray-800 rounded-xl p-8 relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-2xl font-bold">1</div>
                <h3 className="text-2xl font-bold mb-4 mt-4">Purchase Tokens</h3>
                <p className="text-gray-400">
                  Join our whitelist to gain early access to RWAI tokens. Each token represents fractional ownership of real AI hardware.
                </p>
                <div className="mt-8">
                  <Image 
                    src="/images/GPU_14.png" 
                    alt="Purchase Tokens" 
                    width={300} 
                    height={200} 
                    className="rounded-lg mx-auto"
                  />
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-8 relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-2xl font-bold">2</div>
                <h3 className="text-2xl font-bold mb-4 mt-4">We Deploy Hardware</h3>
                <p className="text-gray-400">
                  Your investment funds the purchase of high-performance AI hardware (GPUs, servers) which is then deployed in secure data centers.
                </p>
                <div className="mt-8">
                  <Image 
                    src="/images/GPU_11.png" 
                    alt="Deploy Hardware" 
                    width={300} 
                    height={200} 
                    className="rounded-lg mx-auto"
                  />
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-8 relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-2xl font-bold">3</div>
                <h3 className="text-2xl font-bold mb-4 mt-4">Earn USDC Yield</h3>
                <p className="text-gray-400">
                  RWAI leases the hardware back, generating revenue that's distributed to token holders as USDC yield on a regular basis.
                </p>
                <div className="mt-8">
                  <Image 
                    src="/images/GPU_8.png" 
                    alt="Earn Yield" 
                    width={300} 
                    height={200} 
                    className="rounded-lg mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hardware Assets Section */}
        <section className="py-24 bg-gray-900">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Hardware Assets</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Enterprise-grade AI infrastructure powering the next generation of AI applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-xl overflow-hidden group">
                <div className="h-64 relative">
                  <Image 
                    src="/images/RWAi_00131_-enhanced.png" 
                    alt="NVIDIA H100 Clusters" 
                    fill 
                    style={{objectFit: 'cover'}}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">NVIDIA H100 Clusters</h3>
                  <p className="text-gray-400 mb-4">
                    State-of-the-art GPU clusters optimized for large-scale AI training and inference.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-500 font-bold">8x H100 GPUs</span>
                    <span className="text-gray-400">640GB VRAM</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl overflow-hidden group">
                <div className="h-64 relative">
                  <Image 
                    src="/images/RWAi_00060_.png" 
                    alt="Dell PowerEdge Servers" 
                    fill 
                    style={{objectFit: 'cover'}}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Dell PowerEdge Servers</h3>
                  <p className="text-gray-400 mb-4">
                    Enterprise-grade servers with redundant power and cooling for 24/7 operation.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-500 font-bold">128-core CPU</span>
                    <span className="text-gray-400">1TB RAM</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl overflow-hidden group">
                <div className="h-64 relative">
                  <Image 
                    src="/images/RWAi_00307_.png" 
                    alt="Custom AI Accelerators" 
                    fill 
                    style={{objectFit: 'cover'}}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Custom AI Accelerators</h3>
                  <p className="text-gray-400 mb-4">
                    Specialized hardware configurations optimized for specific AI workloads.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-500 font-bold">Workload Optimized</span>
                    <span className="text-gray-400">High Efficiency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Opportunity Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">The Investment Opportunity</h2>
                <p className="text-xl text-gray-400 mb-6">
                  AI compute demand is growing exponentially, creating a massive opportunity for infrastructure investors.
                </p>
                <ul className="space-y-4">
                  {[
                    "Own fractional shares of physical AI hardware assets",
                    "Generate consistent USDC yield from hardware leasing",
                    "Benefit from the growing demand for AI compute",
                    "Assets backed by real-world, high-value hardware",
                    "Liquid investment with tokenized ownership"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="text-purple-500 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
                <div className="relative bg-gray-800 rounded-xl p-8 border border-gray-700">
                  <h3 className="text-2xl font-bold mb-6">Investment Highlights</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-900 p-6 rounded-lg">
                      <div className="text-4xl font-bold text-purple-500 mb-2">15-20%</div>
                      <div className="text-gray-400">Target Annual Yield</div>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg">
                      <div className="text-4xl font-bold text-blue-500 mb-2">5,000</div>
                      <div className="text-gray-400">Min. Investment (USDT)</div>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg">
                      <div className="text-4xl font-bold text-purple-500 mb-2">Monthly</div>
                      <div className="text-gray-400">Yield Distribution</div>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg">
                      <div className="text-4xl font-bold text-blue-500 mb-2">USDC</div>
                      <div className="text-gray-400">Yield Currency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
                  <Image 
                    src="/images/tokenization_2.png" 
                    alt="Tokenomics" 
                    width={500} 
                    height={500} 
                    className="rounded-xl relative z-10"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold mb-8">Tokenomics</h2>
                <p className="text-xl text-gray-400 mb-6">
                  Our tokenization model creates a direct link between digital tokens and physical AI hardware assets.
                </p>
                <div className="space-y-6">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">1:1 Asset Backing</h3>
                    <p className="text-gray-400">
                      Each token is backed by a proportional share of physical AI hardware, ensuring real-world value.
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Lease-Back Model</h3>
                    <p className="text-gray-400">
                      RWAI leases the hardware from token holders, generating consistent revenue that's distributed as yield.
                    </p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">USDC Yield Distribution</h3>
                    <p className="text-gray-400">
                      Monthly payments in USDC provide stable, predictable returns independent of token price fluctuations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Invest in AI Infrastructure?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Join the whitelist today to secure your position in the next generation of AI infrastructure investment.
            </p>
            <Link href="/whitelist" className="bg-white text-purple-900 px-10 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition duration-300">
              Join the Whitelist
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 