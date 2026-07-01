import { getTranslations } from "next-intl/server";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Container from "@/components/Container";
import Card from "@/components/Card";
import type { Metadata } from "next";

interface ProductsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ProductsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `/${locale}/products` },
    openGraph: {
      title: t("title"),
      description: t("description"),
    },
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
              { "@type": "ListItem", position: 1, name: "Home", item: `https://toozyx.com/${locale}` },
              { "@type": "ListItem", position: 2, name: t("title"), item: `https://toozyx.com/${locale}/products` },
            ],
          }),
        }}
      />
      <Section>
        <SectionHeader title={t("title")} description={t("description")} />
        <div className="grid md:grid-cols-3 gap-8">
          {productKeys.map((key, i) => (
            <Card key={key} className="p-8 flex flex-col">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-6`}>
                {icons[i]}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {t(`${key}.name`)}
              </h2>
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
              <a
                href={urls[i]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#3D49A8] to-[#6874E8] text-white px-6 py-3 text-sm font-medium transition-all hover:opacity-90 shadow-lg shadow-primary-500/20"
              >
                {t(`${key}.cta`)}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
