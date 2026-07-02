"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <html>
      <body className="min-h-screen flex items-center justify-center px-6 bg-white">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3D49A8] to-[#6874E8] flex items-center justify-center mx-auto mb-8">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Critical error
          </h1>
          <p className="text-lg text-gray-500 mb-8">
            A critical error occurred. Please refresh the page or try again later.
          </p>
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#3D49A8] to-[#6874E8] text-white px-8 py-3.5 text-sm font-medium transition-all hover:opacity-90 shadow-lg shadow-primary-500/20"
          >
            Refresh page
          </button>
        </div>
      </body>
    </html>
  );
}
