"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function LocaleSwitcher() {
  const t = useTranslations("locale");
  const params = useParams();
  const currentLocale = (params.locale as string) || "en";
  const isEn = currentLocale === "en";

  return (
    <Link
      href={isEn ? "/ar" : "/"}
      className="text-sm text-gray-500 hover:text-[#3D49A8] transition-colors font-medium"
    >
      {isEn ? "عربي" : "EN"}
    </Link>
  );
}
