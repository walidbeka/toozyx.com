import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const isAr = locale === "ar";
  const title = t("title");
  const suffix = isAr ? " | توزيكس" : " | Toozyx";

  return {
    title: title + suffix,
    description: t("description"),
    alternates: {
      canonical: `https://toozyx.com/${locale}/about`,
      languages: { en: "https://toozyx.com/en/about", ar: "https://toozyx.com/ar/about" },
    },
    openGraph: {
      title: title + suffix,
      description: t("description"),
      url: `https://toozyx.com/${locale}/about`,
      siteName: "Toozyx",
      locale: isAr ? "ar_SA" : "en_US",
      type: "website",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: title + suffix,
      description: t("description"),
      images: [siteConfig.ogImage],
      site: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

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
              { "@type": "ListItem", position: 2, name: t("title"), item: `https://toozyx.com/${locale}/about` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: t("title"),
            description: t("description"),
            url: `https://toozyx.com/${locale}/about`,
            mainEntity: {
              "@type": "Organization",
              name: "Toozyx",
              description: t("mission.description"),
            },
          }),
        }}
      />
      <Section>
        <Container className="max-w-3xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t("title")}
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              {t("description")}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl gradient-bg p-8 sm:p-12 mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t("mission.title")}
            </h2>
            <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
              {t("mission.description")}
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("values.title")}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {(t.raw("values.items") as Array<{ title: string; description: string }>).map(
                (item, i) => (
                  <Card key={i} className="p-6 sm:p-8">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3D49A8] to-[#6874E8] flex items-center justify-center mb-4">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                )
              )}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {t("story.title")}
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto">
              {t("story.description")}
            </p>
            <div className="mt-10">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#3D49A8] to-[#6874E8] text-white px-8 py-3.5 text-sm font-medium transition-all hover:opacity-90 shadow-lg shadow-primary-500/20"
              >
                {t("cta")}
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
