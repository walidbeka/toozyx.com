import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Container from "@/components/Container";
import Card from "@/components/Card";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { siteConfig, localeAlternates, localePath } from "@/config/site";
import type { Metadata } from "next";

interface ProductsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ProductsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  const isAr = locale === "ar";
  const title = t("title");
  const suffix = isAr ? " | توزيكس" : " | Toozyx";

  return {
    title: { absolute: title + suffix },
    description: t("description"),
    alternates: localeAlternates(locale, "/products"),
    openGraph: {
      title: { absolute: title + suffix },
      description: t("description"),
            url: `https://toozyx.com${localePath(locale, "/products")}`,
      siteName: "Toozyx",
      locale: isAr ? "ar_SA" : "en_US",
      type: "website",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: { absolute: title + suffix },
      description: t("description"),
      images: [siteConfig.ogImage],
      site: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
  };
}

const productKeys = ["tools", "agent", "media"] as const;

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });

  const gradients = [
    "from-[#3D49A8] to-[#6874E8]",
    "from-[#6874E8] to-[#8d95d7]",
    "from-[#3D49A8] to-[#8d95d7]",
  ];

  const icons = [
    <svg key="tools" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>,
    <svg key="agent" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <path d="M8 10h.01M12 10h.01M16 10h.01" />
    </svg>,
    <svg key="media" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>,
  ];

  const urls = [
    "https://tools.toozyx.com",
    "https://agent.toozyx.com",
    "https://media.toozyx.com",
  ];

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
              { "@type": "ListItem", position: 2, name: t("title"), item: `https://toozyx.com${localePath(locale, "/products")}` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: t("title"),
            description: t("description"),
      url: `https://toozyx.com${localePath(locale, "/products")}`,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: productKeys.map((key, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "Product",
                  name: t(`${key}.name`),
                  description: t(`${key}.description`),
                  url: urls[i],
                  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                },
              })),
            },
          }),
        }}
      />

      {/* ===== ECOSYSTEM INTRO ===== */}
      <Section>
        <SectionHeader title={t("title")} description={t("description")} />
        <div className="relative overflow-hidden rounded-3xl gradient-bg p-8 sm:p-12 lg:p-16 text-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {t("ecosystemIntro.headline")}
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {t("ecosystemIntro.description")}
            </p>
          </div>
        </div>
      </Section>

      {/* ===== PRODUCT CARDS ===== */}
      <Section className="pt-0">
        <div className="grid md:grid-cols-3 gap-8">
          {productKeys.map((key, i) => (
            <Card key={key} className="p-8 flex flex-col">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-6`}>
                {icons[i]}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                {t(`${key}.name`)}
              </h2>
              <p className="text-sm font-semibold text-[#6874E8] mb-1">
                {t(`${key}.role`)}
              </p>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
                {t(`${key}.outcome`)}
              </p>
              <p className="text-gray-500 leading-relaxed mb-8 flex-1">
                {t(`${key}.description`)}
              </p>
              <div className="space-y-2 mb-8">
                {(t.raw(`${key}.features`) as string[]).map(
                  (feature: string, fi: number) => (
                    <div key={fi} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3D49A8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </div>
                  )
                )}
              </div>
              <TrackedExternalLink
                href={urls[i]}
                label={t(`${key}.name`)}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#3D49A8] to-[#6874E8] text-white px-6 py-3 text-sm font-medium transition-all hover:opacity-90 shadow-lg shadow-primary-500/20"
              >
                {t(`${key}.cta`)}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </TrackedExternalLink>
            </Card>
          ))}
        </div>
      </Section>

      {/* ===== WHY ECOSYSTEM ===== */}
      <Section className="bg-gradient-to-b from-primary-50/50 to-white">
        <SectionHeader
          title={t("whyEcosystem.title")}
          description={t("whyEcosystem.description")}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(t.raw("whyEcosystem.items") as Array<{ title: string; description: string }>).map(
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
      </Section>

      {/* ===== PHILOSOPHY ===== */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl gradient-bg p-8 sm:p-12 lg:p-16 text-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {t("philosophy.title")}
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              {t("philosophy.description")}
            </p>
          </div>
        </div>
      </Section>

      {/* ===== LINK TO ABOUT ===== */}
      <Section className="pt-0">
        <div className="text-center">
          <Link
            href={`/${locale}/about`}
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#3D49A8] to-[#6874E8] text-white px-8 py-3.5 text-sm font-medium transition-all hover:opacity-90 shadow-lg shadow-primary-500/20"
          >
            {t("aboutLink")}
          </Link>
        </div>
      </Section>

      {/* ===== FUTURE VISION ===== */}
      <Section className="bg-gray-50/50">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {t("futureVision.title")}
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            {t("futureVision.description")}
          </p>
        </div>
      </Section>
    </>
  );
}
