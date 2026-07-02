import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const isAr = locale === "ar";
  const title = t("title");
  const suffix = isAr ? " | توزيكس" : " | Toozyx";

  return {
    title: title + suffix,
    description: t("description"),
    alternates: {
      canonical: `https://toozyx.com/${locale}/blog`,
      languages: { en: "https://toozyx.com/en/blog", ar: "https://toozyx.com/ar/blog" },
    },
    openGraph: {
      title: title + suffix,
      description: t("description"),
      url: `https://toozyx.com/${locale}/blog`,
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

const articles = [
  {
    title: "How Automating Customer Conversations Helps Businesses Grow",
    description:
      "Discover how businesses are using conversation automation to respond faster, capture more leads, and reduce the workload on support teams.",
    date: "2025-01-15",
    slug: "automating-customer-conversations",
  },
  {
    title: "Reducing Operational Friction with Modern Technology",
    description:
      "An exploration of how disconnected tools and manual workflows create hidden costs — and how the right technology eliminates them.",
    date: "2025-02-01",
    slug: "reducing-operational-friction",
  },
  {
    title: "Building Practical Business Tools: A Technology Approach",
    description:
      "A look at the engineering principles behind building tools that are fast, reliable, and genuinely useful for everyday business tasks.",
    date: "2025-03-10",
    slug: "building-practical-business-tools",
  },
];

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString(locale === "ar" ? "ar" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
              { "@type": "ListItem", position: 2, name: t("title"), item: `https://toozyx.com/${locale}/blog` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: t("title"),
            description: t("description"),
            url: `https://toozyx.com/${locale}/blog`,
          }),
        }}
      />
      <Section>
        <SectionHeader title={t("title")} description={t("description")} />
        {articles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.map((article) => (
              <Card key={article.slug} className="p-6 sm:p-8">
                <p className="text-xs font-medium text-[#6874E8] uppercase tracking-wider mb-3">
                  {formatDate(article.date)}
                </p>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {article.description}
                </p>
                <Link
                  href={`/${locale}/blog/${article.slug}`}
                  className="inline-flex items-center text-sm font-medium text-[#3D49A8] hover:text-[#6874E8] transition-colors"
                >
                  {t("readMore")}
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
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500">{t("noArticles")}</p>
          </div>
        )}
      </Section>
    </>
  );
}
