"use client";

import Link from "next/link";
import Card from "./Card";
import { trackBlogOpen } from "@/lib/analytics";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  slug: string;
  locale: string;
  readMore: string;
}

export default function BlogCard({
  title,
  description,
  date,
  slug,
  locale,
  readMore,
}: BlogCardProps) {
  return (
    <Card className="p-6 sm:p-8">
      <div className="flex flex-col h-full">
        <p className="text-xs font-medium text-[#6874E8] uppercase tracking-wider mb-3">
          {date}
        </p>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
          {description}
        </p>
        <Link
          href={`/${locale}/blog/${slug}`}
          onClick={() => trackBlogOpen(title)}
          className="inline-flex items-center text-sm font-medium text-[#3D49A8] hover:text-[#6874E8] transition-colors"
        >
          {readMore}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1.5 rtl:rotate-180"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </Card>
  );
}
