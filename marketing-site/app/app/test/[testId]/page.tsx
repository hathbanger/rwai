"use client";

import Link from "next/link";

export default function TestPage({ params }: { params: { testId: string } }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Dynamic Route</h1>
      <p className="mb-4">Test ID: {params.testId}</p>
      <Link href="/test" className="text-blue-500 hover:underline">
        Back to Test
      </Link>
    </div>
  );
} 