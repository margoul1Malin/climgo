import React from 'react';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-12 px-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg border border-gray-200 p-8">
        {children}
      </div>
    </div>
  );
}
