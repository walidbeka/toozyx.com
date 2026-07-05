import { getTranslations } from "next-intl/server";
import Section from "@/components/Section";
import Container from "@/components/Container";
import { siteConfig, localeAlternates, localePath } from "@/config/site";
import type { Metadata } from "next";

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  const isAr = locale === "ar";
  const title = t("title");
  const suffix = isAr ? " | توزيكس" : " | Toozyx";

  return {
    title: title + suffix,
    description: isAr ? "سياسة الخصوصية لشركة توزيكس" : "Toozyx Privacy Policy — how we collect, use, and protect your information.",
    alternates: localeAlternates(locale, "/privacy"),
    openGraph: {
      title: title + suffix,
      description: isAr ? "سياسة الخصوصية لشركة توزيكس" : "Toozyx Privacy Policy — how we collect, use, and protect your information.",
      url: `https://toozyx.com${localePath(locale, "/privacy")}`,
      siteName: "Toozyx",
      locale: isAr ? "ar_SA" : "en_US",
      type: "website",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.ogImageAlt }],
    },
    twitter: {
      card: "summary",
      title: title + suffix,
      site: siteConfig.twitterHandle,
    },
    robots: { index: false, follow: true },
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `https://toozyx.com${localePath(locale, "")}` },
              { "@type": "ListItem", position: 2, name: t("title"), item: `https://toozyx.com${localePath(locale, "/privacy")}` },
            ],
          }),
        }}
      />
      <Section>
        <Container className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-sm text-gray-500 mb-12">{t("lastUpdated")}</p>
          <div className="space-y-10">
            {(t.raw("sections") as Array<{ title: string; content: string }>).map(
              (section, i) => (
                <div key={i}>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              )
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
