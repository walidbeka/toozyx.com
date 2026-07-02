"use client";

import { useState } from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { mainNavItems } from "@/config/navigation";
import Container from "./Container";
import Logo from "./Logo";
import LocaleSwitcher from "./LocaleSwitcher";
import { trackNavigation } from "@/lib/analytics";

export default function Header() {
  const t = useTranslations("nav");
  const params = useParams();
  const pathname = usePathname();
  const locale = (params.locale as string) || "en";
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => {
    const fullPath = `/${locale}${path === "/" ? "" : path}`;
    return pathname === fullPath;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Logo locale={locale} />

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                href={`/${locale}${item.path === "/" ? "" : item.path}`}
                onClick={() => trackNavigation(item.label.replace("nav.", ""))}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-[#3D49A8]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {t(item.label.replace("nav.", ""))}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LocaleSwitcher />
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 pb-6">
            <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  href={`/${locale}${item.path === "/" ? "" : item.path}`}
                  onClick={() => { setMobileOpen(false); trackNavigation(item.label.replace("nav.", "")); }}
                  className={`text-sm font-medium px-2 py-2 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? "text-[#3D49A8] bg-primary-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {t(item.label.replace("nav.", ""))}
                </Link>
              ))}
              <div className="pt-2 px-2">
                <LocaleSwitcher />
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
