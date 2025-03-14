"use client";

import React from 'react';

export default function TestImagesPage() {
  const images = [
    "/images/logo-llama_2.png",
    "/images/logo_deepseek.png",
    "/images/logo_mistral.png",
    "/images/logo_black-forrect.png"
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Images</h1>
      <div className="grid grid-cols-2 gap-4">
        {images.map((src, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <p className="mb-2">{src}</p>
            <div className="h-40 bg-gray-800 flex items-center justify-center">
              <img 
                src={src} 
                alt={`Test image ${index + 1}`} 
                className="h-24 w-24 object-contain"
                onError={(e) => {
                  console.error(`Failed to load image: ${src}`);
                  e.currentTarget.src = "/images/RWAi_logo-xs.png"; // Fallback image
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 