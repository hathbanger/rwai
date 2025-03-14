"use client";

import Link from "next/link";

export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Page</h1>
      <p className="mb-4">Click the link below to test dynamic routing:</p>
      <Link href="/test/test-id" className="text-blue-500 hover:underline">
        Test Dynamic Route
      </Link>
    </div>
  );
} 