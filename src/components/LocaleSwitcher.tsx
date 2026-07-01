"use client";

import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("locale");
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  const otherLocale = routing.locales.find((l) => l !== currentLocale);
  if (!otherLocale) return null;

  const switchPath = pathname.replace(`/${currentLocale}`, `/${otherLocale}`);

  return (
    <Link
      href={switchPath}
      className="text-sm text-gray-500 hover:text-[#3D49A8] transition-colors font-medium"
    >
      {t("switchTo")}
    </Link>
  );
}
