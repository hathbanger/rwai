import React from 'react';
import Image from 'next/image';

const partners = [
  { name: 'NVIDIA', logo: '/images/logo-nvidia-1.svg' },
  { name: 'HPE', logo: '/images/logo-hpe-1.svg' },
  { name: 'PNY', logo: '/images/logo-pny-1.svg' },
  { name: 'Intel', logo: '/images/logo-intel-1.svg' },
  { name: 'Dell', logo: '/images/logo-dell-1.svg' },
];

const Partners = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Custom Built for <span className="chaos-strike">High Performance AI Compute</span>
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="w-32 md:w-40 h-16 relative grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 