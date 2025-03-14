"use client";

import Link from "next/link";

export default function TestDynamicPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Dynamic Route</h1>
      <p className="mb-4">ID from params: {params.id}</p>
      <pre className="bg-gray-100 p-4 rounded mb-4">
        {JSON.stringify(params, null, 2)}
      </pre>
      <Link href="/model-debug" className="text-blue-500 hover:underline">
        Back to Debug Page
      </Link>
    </div>
  );
} 