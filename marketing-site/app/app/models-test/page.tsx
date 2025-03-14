"use client";

import modelsData from "../../../src/data/models.json";

export default function ModelsTestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Models Test Page</h1>
      <p className="mb-4">Number of models: {modelsData.length}</p>
      <ul className="list-disc pl-5">
        {modelsData.map((model: any) => (
          <li key={model.id} className="mb-2">
            <strong>{model.name}</strong> (ID: {model.id})
          </li>
        ))}
      </ul>
    </div>
  );
} 