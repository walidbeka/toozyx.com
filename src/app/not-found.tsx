import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Page not found</p>
          <Link
            href="/en"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#3D49A8] to-[#6874E8] px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90"
          >
            Back to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
