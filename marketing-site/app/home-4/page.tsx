import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function HomeFour() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/texture_11.png"
              alt="AI Infrastructure Background"
              fill
              style={{objectFit: 'cover'}}
              className="opacity-30"
            />
          </div>
          <div className="container mx-auto px-8 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 mb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 text-sm font-medium rounded-full">
                    INSTITUTIONAL-GRADE INVESTMENT
                  </span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  AI Infrastructure as a
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> High-Yield Asset</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Access institutional-grade AI infrastructure investments. Generate stable yields through 
                  our established inference business model and growing enterprise client base.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/whitelist" 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg transition-all duration-300 text-white"
                  >
                    Access Investment
                  </Link>
                  <Link 
                    href="#investment-thesis" 
                    className="border border-white/20 hover:border-white/40 px-8 py-4 rounded-lg text-white transition-colors duration-300"
                  >
                    Investment Thesis
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl"></div>
                <div className="grid grid-cols-2 gap-4 relative">
                  <div className="space-y-4">
                    <div className="bg-gray-900/80 backdrop-blur p-6 rounded-lg border border-purple-500/10">
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">15-20%</div>
                      <div className="text-sm text-gray-400">Target Annual Yield</div>
                    </div>
                    <div className="bg-gray-900/80 backdrop-blur p-6 rounded-lg border border-purple-500/10">
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">100%</div>
                      <div className="text-sm text-gray-400">Asset-Backed</div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="bg-gray-900/80 backdrop-blur p-6 rounded-lg border border-purple-500/10">
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">85%+</div>
                      <div className="text-sm text-gray-400">Utilization Rate</div>
                    </div>
                    <div className="bg-gray-900/80 backdrop-blur p-6 rounded-lg border border-purple-500/10">
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">Monthly</div>
                      <div className="text-sm text-gray-400">USDC Distributions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="py-24 bg-black/50 border-y border-purple-500/10">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                  Capturing the $250B+ AI Infrastructure Market
                </h2>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  The demand for AI compute is growing exponentially, with enterprises facing 6+ month 
                  wait times for GPU access. Our infrastructure provides immediate solutions for this 
                  critical market need.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-900/80 backdrop-blur p-6 rounded-lg border border-purple-500/10">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">90%</div>
                    <div className="text-sm text-gray-400">GPU Shortage in Market</div>
                  </div>
                  <div className="bg-gray-900/80 backdrop-blur p-6 rounded-lg border border-purple-500/10">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">4.5x</div>
                    <div className="text-sm text-gray-400">YoY Demand Growth</div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl group-hover:opacity-75 transition-opacity duration-500"></div>
                <Image
                  src="/images/RWAi_00131_-enhanced.png"
                  alt="AI Infrastructure Demand"
                  fill
                  style={{objectFit: 'cover'}}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Business Model */}
        <section id="investment-thesis" className="py-24 bg-black">
          <div className="container mx-auto px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Enterprise-Focused Business Model</h2>
              <p className="text-gray-300 text-lg">
                A proven infrastructure-as-a-service model generating consistent returns through 
                long-term enterprise partnerships.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Infrastructure Deployment',
                  metrics: ['5,000+ GPUs', '99.9% Uptime', 'Enterprise-Grade'],
                  description: 'State-of-the-art GPU clusters and computing centers optimized for AI workloads.',
                  image: '/images/GPU_13.png'
                },
                {
                  title: 'Client Partnerships',
                  metrics: ['Fortune 500 Clients', 'Multi-Year Contracts', '85%+ Utilization'],
                  description: 'Long-term partnerships with leading enterprises ensuring stable revenue streams.',
                  image: '/images/GPU_11.png'
                },
                {
                  title: 'Yield Generation',
                  metrics: ['15-20% Target Yield', 'Monthly USDC', 'Asset-Backed'],
                  description: 'Consistent monthly distributions backed by real infrastructure revenue.',
                  image: '/images/GPU_10.png'
                }
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative bg-gray-900/80 backdrop-blur p-8 rounded-lg border border-purple-500/10">
                    <div className="relative h-48 mb-6">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        style={{objectFit: 'cover'}}
                        className="rounded-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <ul className="space-y-2 mb-4">
                      {item.metrics.map((metric, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mr-2"></div>
                          {metric}
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Clients */}
        <section className="py-24 bg-black/50 border-y border-purple-500/10">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Enterprise Client Base</h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Powering AI innovation for industry leaders across technology, finance, and healthcare sectors.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  category: 'Technology',
                  stats: '45%',
                  detail: 'of Revenue',
                  examples: 'AI Companies, Cloud Providers'
                },
                {
                  category: 'Finance',
                  stats: '30%',
                  detail: 'of Revenue',
                  examples: 'Banks, Trading Firms'
                },
                {
                  category: 'Healthcare',
                  stats: '15%',
                  detail: 'of Revenue',
                  examples: 'Research, Diagnostics'
                },
                {
                  category: 'Enterprise',
                  stats: '10%',
                  detail: 'of Revenue',
                  examples: 'Fortune 500 Companies'
                }
              ].map((sector, index) => (
                <div key={index} className="bg-gray-900/80 backdrop-blur p-8 rounded-lg border border-purple-500/10">
                  <h3 className="text-xl font-bold mb-4">{sector.category}</h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">{sector.stats}</div>
                  <div className="text-sm text-gray-400 mb-4">{sector.detail}</div>
                  <div className="text-sm text-gray-500">{sector.examples}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Details */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8">Investment Structure</h2>
                <div className="space-y-6">
                  <div className="bg-gray-900/80 backdrop-blur p-8 rounded-lg border border-purple-500/10">
                    <h3 className="text-xl font-bold mb-4">Token Economics</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mt-2 mr-3"></div>
                        <div>
                          <div className="font-medium mb-1">1:1 Asset Backing</div>
                          <div className="text-sm text-gray-400">Each token represents direct ownership of AI infrastructure</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mt-2 mr-3"></div>
                        <div>
                          <div className="font-medium mb-1">Revenue Distribution</div>
                          <div className="text-sm text-gray-400">80% of net revenue distributed to token holders</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mt-2 mr-3"></div>
                        <div>
                          <div className="font-medium mb-1">Monthly Payments</div>
                          <div className="text-sm text-gray-400">USDC distributions on the 1st of each month</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/80 backdrop-blur p-8 rounded-lg border border-purple-500/10">
                    <h3 className="text-xl font-bold mb-4">Investment Terms</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Minimum Investment</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">$5,000</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Lock-up Period</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">6 Months</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Target IRR</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">25%+</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Token Type</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">ERC-20</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-64 group">
                    <Image
                      src="/images/GPU_4.png"
                      alt="Infrastructure Asset"
                      fill
                      style={{objectFit: 'cover'}}
                      className="rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-48 group">
                    <Image
                      src="/images/GPU_5.png"
                      alt="Data Center"
                      fill
                      style={{objectFit: 'cover'}}
                      className="rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-48 group">
                    <Image
                      src="/images/GPU_7.png"
                      alt="GPU Cluster"
                      fill
                      style={{objectFit: 'cover'}}
                      className="rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-64 group">
                    <Image
                      src="/images/GPU_8.png"
                      alt="Server Room"
                      fill
                      style={{objectFit: 'cover'}}
                      className="rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-t border-purple-500/10">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Access Institutional-Grade AI Infrastructure Investment
            </h2>
            <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
              Join leading investors in the next generation of AI infrastructure. 
              Limited allocation available for qualified investors.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link 
                href="/whitelist" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-12 py-4 rounded-lg transition-all duration-300 text-white"
              >
                Request Investment Access
              </Link>
              <Link 
                href="/contact" 
                className="border border-white/20 hover:border-white/40 px-12 py-4 rounded-lg text-white transition-colors duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 