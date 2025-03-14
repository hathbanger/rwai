import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function WhitelistPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Join the <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-700">
                  RWAi Whitelist
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-slide-up animation-delay-200">
                Be among the first to access fractional ownership of high-performance AI rigs and earn passive income from AI compute services.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto bg-card rounded-xl p-8 border border-border shadow-lg animate-slide-up animation-delay-300">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="investment" className="block text-sm font-medium">
                    Estimated Investment Amount (USD)
                  </label>
                  <select
                    id="investment"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  >
                    <option value="">Select an amount</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-50000">$10,000 - $50,000</option>
                    <option value="50000-100000">$50,000 - $100,000</option>
                    <option value="100000+">$100,000+</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="experience" className="block text-sm font-medium">
                    Crypto/Investment Experience
                  </label>
                  <select
                    id="experience"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="professional">Professional</option>
                  </select>
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3 animate-bounce-subtle">
                    Submit Application
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground text-center pt-4">
                  By submitting this form, you agree to our <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 