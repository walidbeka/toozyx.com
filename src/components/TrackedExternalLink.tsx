"use client";

import { trackExternalLink } from "@/lib/analytics";

interface TrackedExternalLinkProps {
  href: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}

export default function TrackedExternalLink({
  href,
  label,
  className = "",
  children,
}: TrackedExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackExternalLink(label)}
      className={className}
    >
      {children}
    </a>
  );
}
