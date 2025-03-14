"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { faqs } from '../../data/faqs';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-background/90 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary">FAQ</h3>
          <h2 className="text-3xl md:text-5xl font-bold">
            Everything you need to know about RWAi
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="mb-4 border-none shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out animate-slide-up dark:bg-gray-800/80"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <button
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <span className="text-2xl transition-transform duration-300" style={{ transform: activeIndex === index ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                </button>
                
                <div 
                  className="px-6 overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ 
                    maxHeight: activeIndex === index ? '500px' : '0',
                    opacity: activeIndex === index ? 1 : 0,
                    paddingBottom: activeIndex === index ? '1.5rem' : '0'
                  }}
                >
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 