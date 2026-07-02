"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3D49A8] to-[#6874E8] flex items-center justify-center mb-8">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Something went wrong
      </h1>
      <p className="text-lg text-gray-500 mb-8 max-w-md">
        An unexpected error occurred. Please try again or contact support if the issue persists.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#3D49A8] to-[#6874E8] text-white px-8 py-3.5 text-sm font-medium transition-all hover:opacity-90 shadow-lg shadow-primary-500/20"
      >
        Try again
      </button>
    </div>
  );
}
