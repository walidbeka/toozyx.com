import { getTranslations } from "next-intl/server";
import Section from "@/components/Section";
import Container from "@/components/Container";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });
  const isAr = locale === "ar";
  const title = t("title");
  const suffix = isAr ? " | توزيكس" : " | Toozyx";

  return {
    title: title + suffix,
    description: isAr ? "شروط خدمة توزيكس" : "Toozyx Terms of Service — rules and guidelines for using Toozyx products and services.",
    alternates: {
      canonical: `https://toozyx.com/${locale}/terms`,
      languages: { en: "https://toozyx.com/en/terms", ar: "https://toozyx.com/ar/terms" },
    },
    openGraph: {
      title: title + suffix,
      description: isAr ? "شروط خدمة توزيكس" : "Toozyx Terms of Service — rules and guidelines for using Toozyx products and services.",
      url: `https://toozyx.com/${locale}/terms`,
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

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `https://toozyx.com/${locale}` },
              { "@type": "ListItem", position: 2, name: t("title"), item: `https://toozyx.com/${locale}/terms` },
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
