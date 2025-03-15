import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeOne() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/texture_11.png"
              alt="Background Texture"
              fill
              style={{objectFit: 'cover'}}
              className="opacity-30"
            />
          </div>
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-8 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-xl"></div>
                <div className="relative">
                  <div className="inline-flex items-center space-x-2 mb-6">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 text-sm font-medium rounded-full border border-purple-500/20">
                      ENTERPRISE AI INFRASTRUCTURE
                    </span>
                  </div>
                  <h1 className="text-4xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                    Power Your AI with
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                      World-Class Infrastructure
                    </span>
                  </h1>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                    Access high-performance GPUs and specialized hardware for your AI workloads. 
                    Scale effortlessly with enterprise-grade reliability.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      href="/whitelist" 
                      className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300"
                    >
                      Join Whitelist
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    <Link 
                      href="/app" 
                      className="group relative inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium py-4 px-8 rounded-lg transition-all duration-300"
                    >
                      Explore Models
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative">
                  <Image 
                    src="/images/GPU_1.png" 
                    alt="High Performance GPU" 
                    width={600} 
                    height={400} 
                    className="rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute -bottom-8 left-8 right-8 bg-gray-900/80 backdrop-blur p-6 rounded-lg border border-purple-500/10">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-400">Current Availability</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">5000+ GPUs</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Starting At</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">$0.99/hr</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Models Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
                Featured AI Models
              </h2>
              <p className="text-xl text-gray-300">
                Access the latest and most powerful AI models, optimized for performance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  logo: '/images/logo_openai.png',
                  name: 'OpenAI Models',
                  description: 'Access the latest GPT models with optimized performance',
                },
                {
                  logo: '/images/logo_mistral.png',
                  name: 'Mistral AI',
                  description: 'High-performance open models with exceptional capabilities',
                },
                {
                  logo: '/images/logo-llama_2.png',
                  name: 'Llama Models',
                  description: "Meta's powerful open-source large language models",
                },
                {
                  logo: '/images/logo_deepseek.png',
                  name: 'DeepSeek',
                  description: 'Advanced models for specialized AI applications',
                },
              ].map((model, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative bg-gray-900/80 backdrop-blur p-8 rounded-lg border border-purple-500/10">
                    <div className="h-16 mb-6 relative">
                      <Image
                        src={model.logo}
                        alt={model.name}
                        fill
                        style={{objectFit: 'contain'}}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{model.name}</h3>
                    <p className="text-gray-400">{model.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-24 relative overflow-hidden bg-black/50">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10"></div>
          <div className="container mx-auto px-8 relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-white">Our Hardware Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-16">
              {[
                { src: '/images/logo-nvidia-1.svg', alt: 'NVIDIA' },
                { src: '/images/logo-intel-1.svg', alt: 'Intel' },
                { src: '/images/logo-dell-1.svg', alt: 'Dell' },
                { src: '/images/logo-hpe-1.svg', alt: 'HPE' },
                { src: '/images/logo-pny-1.svg', alt: 'PNY' },
              ].map((partner, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={120}
                    height={60}
                    className="relative group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hardware Offerings */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
                Enterprise-Grade Hardware
              </h2>
              <p className="text-xl text-gray-300">
                Choose from our range of high-performance computing solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  image: '/images/gpu_2.png',
                  name: 'Standard GPU Rig',
                  description: 'Perfect for smaller AI projects and development',
                  specs: ['NVIDIA RTX A5000', '24GB VRAM', '32-core CPU', '128GB RAM'],
                  price: '$0.99/hour'
                },
                {
                  image: '/images/gpu_3.png',
                  name: 'Professional GPU Rig',
                  description: 'Ideal for production workloads and model training',
                  specs: ['NVIDIA A100', '80GB VRAM', '64-core CPU', '256GB RAM'],
                  price: '$2.99/hour'
                },
                {
                  image: '/images/_RWAi_GPU_seductive.png',
                  name: 'Enterprise GPU Cluster',
                  description: 'For large-scale AI research and deployment',
                  specs: ['8x NVIDIA H100', '640GB Total VRAM', '128-core CPU', '1TB RAM'],
                  price: '$9.99/hour'
                }
              ].map((rig, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative bg-gray-900/80 backdrop-blur rounded-lg border border-purple-500/10 overflow-hidden">
                    <div className="relative h-64">
                      <Image
                        src={rig.image}
                        alt={rig.name}
                        fill
                        style={{objectFit: 'cover'}}
                        className="group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3 text-white">{rig.name}</h3>
                      <p className="text-gray-400 mb-6">{rig.description}</p>
                      <ul className="space-y-2 mb-6">
                        {rig.specs.map((spec, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mr-3"></div>
                            {spec}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                          {rig.price}
                        </span>
                        <Link
                          href="/whitelist"
                          className="inline-flex items-center gap-2 text-white hover:text-purple-400 transition-colors duration-300"
                        >
                          Learn More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Whitelist Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl"></div>
                <div className="relative bg-gray-900/80 backdrop-blur p-12 rounded-xl border border-purple-500/10">
                  <div className="text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">Join Our Whitelist</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                      Get early access to our platform and exclusive pricing during our beta phase
                    </p>
                  </div>
                  <form className="max-w-md mx-auto">
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full px-6 py-4 rounded-lg bg-black/50 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40 transition-colors duration-300"
                      />
                      <button 
                        type="submit" 
                        className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-6 rounded-md transition-all duration-300"
                      >
                        Request Access
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
                Why Choose Our Platform
              </h2>
              <p className="text-xl text-gray-300">
                Enterprise-grade infrastructure with unmatched performance and reliability
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: 'High Performance',
                  description: 'Access to the latest GPU hardware optimized for AI workloads',
                  color: 'from-purple-600 to-blue-600'
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Cost Effective',
                  description: 'Pay only for what you use with no upfront hardware investment',
                  color: 'from-blue-600 to-cyan-600'
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: 'Secure & Reliable',
                  description: 'Enterprise-grade security with 99.9% uptime guarantee',
                  color: 'from-green-600 to-emerald-600'
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  title: 'Scalable',
                  description: 'Easily scale up or down based on your project requirements',
                  color: 'from-orange-600 to-amber-600'
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  ),
                  title: 'Customizable',
                  description: 'Configure your environment with the tools and frameworks you need',
                  color: 'from-red-600 to-rose-600'
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  ),
                  title: '24/7 Support',
                  description: 'Expert technical support available around the clock',
                  color: 'from-indigo-600 to-violet-600'
                }
              ].map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative bg-gray-900/80 backdrop-blur p-8 rounded-lg border border-purple-500/10">
                    <div className={`w-16 h-16 mb-6 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-300">
                  Everything you need to know about our platform
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    question: 'What types of GPUs do you offer?',
                    answer: 'We offer a range of high-performance GPUs including NVIDIA RTX A5000, A100, and H100 clusters, suitable for various AI workloads from development to large-scale deployment.'
                  },
                  {
                    question: 'How does billing work?',
                    answer: 'We offer hourly billing with per-second precision. You only pay for the compute time you use, with no minimum commitment required.'
                  },
                  {
                    question: 'What support do you provide?',
                    answer: 'We provide 24/7 technical support through multiple channels including chat, email, and phone. Our team of AI infrastructure experts is always ready to help.'
                  },
                  {
                    question: 'Can I scale my resources?',
                    answer: 'Yes, you can easily scale your resources up or down based on your needs. Our platform provides automatic scaling options and flexible resource allocation.'
                  }
                ].map((faq, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-gray-900/80 backdrop-blur p-8 rounded-lg border border-purple-500/10">
                      <h3 className="text-xl font-bold mb-4 text-white">{faq.question}</h3>
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 