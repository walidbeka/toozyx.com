import Link from "next/link";

interface NotFoundProps {
  params: Promise<{ locale: string }>;
}

export default async function NotFound({ params }: NotFoundProps) {
  const { locale } = await params;

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3D49A8] to-[#6874E8] flex items-center justify-center mb-8">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        404
      </h1>
      <p className="text-lg text-gray-500 mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href={`/${locale}`}
        className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#3D49A8] to-[#6874E8] text-white px-8 py-3.5 text-sm font-medium transition-all hover:opacity-90 shadow-lg shadow-primary-500/20"
      >
        Back to homepage
      </Link>
    </div>
  );
}
