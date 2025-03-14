"use client";

import Link from "next/link";
import modelsData from "../../../src/data/models.json";

export default function ModelDebugPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Model Debug Page</h1>
      <p className="mb-4">Number of models: {modelsData.length}</p>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Model IDs</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-40">
          {JSON.stringify(modelsData.map(m => m.id), null, 2)}
        </pre>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Test Links</h2>
        <ul className="space-y-2">
          {modelsData.map((model: any) => (
            <li key={model.id} className="border-b pb-2">
              <div><strong>ID:</strong> {model.id}</div>
              <div><strong>Name:</strong> {model.name}</div>
              <div className="mt-1 space-y-1">
                <div>
                  <Link 
                    href={`/models/${model.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    Regular Link: /models/{model.id}
                  </Link>
                </div>
                <div>
                  <Link 
                    href={`/models/${model.id}/simple-page`}
                    className="text-blue-500 hover:underline"
                  >
                    Simple Page: /models/{model.id}/simple-page
                  </Link>
                </div>
                <div>
                  <Link 
                    href={`/models/${model.id}`}
                    className="text-green-500 hover:underline"
                  >
                    New Dynamic Route: /models/{model.id}
                  </Link>
                </div>
                <div>
                  <Link 
                    href={`/models/${model.id}/detail`}
                    className="text-purple-500 hover:underline"
                  >
                    Catch-All Route: /models/{model.id}/detail
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Test Dynamic Routing</h2>
        <div className="space-y-2">
          <div>
            <Link 
              href="/test-dynamic/test-id"
              className="text-blue-500 hover:underline"
            >
              Test Dynamic Route: /test-dynamic/test-id
            </Link>
          </div>
          <div>
            <Link 
              href="/test-dynamic/llama-3-1"
              className="text-blue-500 hover:underline"
            >
              Test Dynamic Route with Model ID: /test-dynamic/llama-3-1
            </Link>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Alternative Route Test</h2>
        <ul className="space-y-2">
          {modelsData.slice(0, 3).map((model: any) => (
            <li key={model.id} className="border-b pb-2">
              <div><strong>ID:</strong> {model.id}</div>
              <div><strong>Name:</strong> {model.name}</div>
              <div className="mt-1">
                <Link 
                  href={`/model-items/${model.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Alternative Route: /model-items/{model.id}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">API Route Test</h2>
        <ul className="space-y-2">
          {modelsData.slice(0, 3).map((model: any) => (
            <li key={model.id} className="border-b pb-2">
              <div><strong>ID:</strong> {model.id}</div>
              <div><strong>Name:</strong> {model.name}</div>
              <div className="mt-1">
                <a 
                  href={`/api/models/${model.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  API Route: /api/models/{model.id}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-8">
        <Link href="/models" className="text-blue-500 hover:underline">
          Back to Models
        </Link>
      </div>
    </div>
  );
} 