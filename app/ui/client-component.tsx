'use client';
import { useState } from 'react';

export default function ClientComponent({ temp }: { temp: number }) {
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  
  // Formula: (Celsius * 9/5) + 32
  const fahrenheit = (temp * 9/5) + 32;

  return (
    <div className="rounded-2xl bg-blue-600 p-8 shadow-lg text-white">
      <h2 className="text-xl font-semibold mb-4 opacity-90">Madison Weather (Client-Side)</h2>
      
      <div className="text-5xl font-extrabold mb-6">
        {isFahrenheit ? `${fahrenheit.toFixed(1)}°F` : `${temp}°C`}
      </div>
      
      <button 
        onClick={() => setIsFahrenheit(!isFahrenheit)}
        className="px-6 py-2 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all shadow-md"
      >
        Switch to {isFahrenheit ? 'Celsius' : 'Fahrenheit'}
      </button>
      
      <p className="text-xs mt-4 opacity-75">
        Interactive toggle powered by React State (Client-Side).
      </p>
    </div>
  );
}