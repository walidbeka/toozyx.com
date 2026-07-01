import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import type { Metadata } from "next";

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `/${locale}/blog` },
    openGraph: {
      title: t("title"),
      description: t("description"),
    },
  };
}

const articles = [
  {
    title: "Introducing Toozyx Agent: AI-Powered WhatsApp Automation",
    description:
      "We are excited to introduce Toozyx Agent — a platform designed to transform how businesses engage with customers through intelligent WhatsApp automation.",
    date: "2025-01-15",
    slug: "introducing-toozyx-agent",
  },
  {
    title: "Why AI-First Development Matters",
    description:
      "An exploration of how building with an AI-first approach leads to more capable, adaptable, and intelligent products.",
    date: "2025-02-01",
    slug: "why-ai-first-development-matters",
  },
  {
    title: "The Technology Behind Toozyx Tools",
    description:
      "A behind-the-scenes look at the modern web technologies that power our free online toolset.",
    date: "2025-03-10",
    slug: "technology-behind-toozyx-tools",
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
