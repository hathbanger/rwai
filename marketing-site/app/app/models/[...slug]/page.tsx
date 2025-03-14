"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import modelsData from "../../../../src/data/models.json";

export default function ModelCatchAllPage({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  
  console.log("Catch-all route loaded");
  console.log("Slug from params:", slug);
  
  // If the slug has at least one segment, use the first segment as the model ID
  const modelId = slug[0];
  
  console.log("Model ID from slug:", modelId);
  console.log("Models data loaded:", modelsData ? "yes" : "no");
  console.log("Models count:", modelsData ? modelsData.length : 0);
  
  // Find the model by ID
  const model = modelsData.find((m: any) => m.id === modelId);
  
  console.log("Model found:", model ? "yes" : "no");
  
  // If model not found, show 404
  if (!model) {
    console.log("Model not found, showing 404");
    notFound();
  }
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Model Catch-All Page</h1>
      <p className="mb-4">Model ID: {modelId}</p>
      <p className="mb-4">Full slug: {slug.join('/')}</p>
      
      {model && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{model.name}</h2>
          <p>{model.description}</p>
        </div>
      )}
      
      <div className="mt-8">
        <Link href="/models" className="text-blue-500 hover:underline">
          Back to Models
        </Link>
      </div>
    </div>
  );
} 