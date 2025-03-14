"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import SectionHeading from '../ui/SectionHeading';
import { faqs } from '../../data/faqs';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-background/90 to-background">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="FAQ Everything you need to know about RWAi"
          highlightedText="FAQ"
          gradientDirection="diagonal"
        />
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="mb-4 border-none shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up"
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