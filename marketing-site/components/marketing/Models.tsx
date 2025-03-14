import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';

const models = [
  { 
    name: 'DeepSeek LLM', 
    description: 'Decentralize AI compute ownership.',
    date: 'April 2024',
    color: 'from-blue-500 to-cyan-400'
  },
  { 
    name: 'Flux', 
    description: 'Decentralize AI compute ownership.',
    date: 'April 2024',
    color: 'from-purple-500 to-pink-400'
  },
  { 
    name: 'Llama LLM', 
    description: 'Decentralize AI compute ownership.',
    date: 'April 2024',
    color: 'from-orange-500 to-amber-400'
  },
  { 
    name: 'Mistral', 
    description: 'Decentralize AI compute ownership.',
    date: 'April 2024',
    color: 'from-green-500 to-emerald-400'
  },
  { 
    name: 'GPU Rental', 
    description: 'Decentralize AI compute ownership.',
    date: 'April 2024',
    color: 'from-red-500 to-rose-400'
  },
];

const Models = () => {
  return (
    <section id="models" className="py-24 bg-gradient-to-b from-background/90 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            Models & <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-700">
              Real World Assets
            </span> that Power the AI Revolution
          </h2>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white animate-bounce-subtle">
            <Link href="/whitelist">
              Join Whitelist
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <Card 
              key={model.name}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className={`h-2 bg-gradient-to-r ${model.color}`} />
                <div className="p-6">
                  <h5 className="text-lg font-bold mb-2">{model.name}</h5>
                  <p className="text-muted-foreground mb-4">{model.description}</p>
                  <div className="text-xs text-muted-foreground">{model.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models; 