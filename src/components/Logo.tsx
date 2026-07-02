import Link from "next/link";

interface LogoProps {
  locale: string;
  className?: string;
}

export default function Logo({ locale, className = "" }: LogoProps) {
  return (
    <Link
      href={`/${locale}`}
      aria-label="Toozyx — back to homepage"
      className={`flex items-center gap-2 ${className}`}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" fill="url(#logo-gradient)" />
        <path
          d="M10 22V10L16 22L22 10V22"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="logo-gradient"
            x1="0"
            y1="0"
            x2="32"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3D49A8" />
            <stop offset="1" stopColor="#6874E8" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-xl font-bold text-gray-900">Toozyx</span>
    </Link>
  );
}
