'use client';

import { useState } from 'react';

export default function ClientComponent() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="rounded-xl bg-blue-50 p-6 shadow-sm border border-blue-100">
      <h2 className="text-xl font-bold mb-2 text-blue-900">Client Component</h2>
      <p className="mb-4">test</p>
      
      <div className="flex items-center gap-4">
        <span className="text-2xl font-mono font-bold">{counter}</span>
        <button
          onClick={() => setCounter(counter + 1)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
        >
         Click and Increase
        </button>
      </div>
    </div>
  );
}