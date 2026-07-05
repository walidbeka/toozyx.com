import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Section from "@/components/Section";
import Container from "@/components/Container";
import { siteConfig, localeAlternates, localePath } from "@/config/site";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface ArticlePageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const articles: Record<string, { title: string; content: string; date: string }> = {
  "automating-customer-conversations": {
    title: "How Automating Customer Conversations Helps Businesses Grow",
    date: "2025-01-15",
    content:
      "Every business faces the same challenge: customers expect fast, helpful responses, but support teams are limited by time and headcount. The result is slow replies, missed leads, and burnt-out teams. Conversation automation solves this by handling repetitive inquiries automatically — freeing human agents to focus on complex, high-value conversations. Toozyx Agent helps businesses set up automated responses, capture leads outside business hours, and maintain consistent communication across every channel. The outcome is faster response times, higher customer satisfaction, and a support team that can focus on what actually needs a human touch.",
  },
  "reducing-operational-friction": {
    title: "Reducing Operational Friction with Modern Technology",
    date: "2025-02-01",
    content:
      "Every business accumulates operational friction over time: manual data entry, disconnected tools, repeated processes that no one has time to improve. This friction slows everything down and costs more than most companies realise. The solution is not necessarily more software — it is better software that integrates naturally into existing workflows. Toozyx builds products that reduce friction by automating repetitive tasks, connecting disconnected systems, and simplifying complex processes. When technology removes obstacles instead of creating them, teams spend less time fighting their tools and more time doing their best work.",
  },
  "building-practical-business-tools": {
    title: "Building Practical Business Tools: A Technology Approach",
    date: "2025-03-10",
    content:
      "Too many tools are built to impress rather than to help. At Toozyx, we believe the best tool is the one that solves a problem without requiring the user to learn anything new. That is why every Toozyx Tool is designed around a single principle: deliver instant value. No sign-up forms. No onboarding tutorials. No unnecessary features. Just a clean interface that does exactly what it promises. This approach requires discipline — it means saying no to features that look impressive but add complexity. The result is a collection of tools that professionals actually enjoy using because they respect the user's time.",
  },
};

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const article = articles[slug];

  if (!article) {
    return { title: t("title") };
  }

  const isAr = locale === "ar";

  return {
    title: article.title,
    description: article.content.slice(0, 160),
    alternates: localeAlternates(locale, `/blog/${slug}`),
    openGraph: {
      title: article.title,
      description: article.content.slice(0, 160),
      url: `https://toozyx.com${localePath(locale, `/blog/${slug}`)}`,
      siteName: "Toozyx",
      locale: isAr ? "ar_SA" : "en_US",
      type: "article",
      publishedTime: article.date,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.content.slice(0, 160),
      images: [siteConfig.ogImage],
      site: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const article = articles[slug];

  if (!article) {
    notFound();
  }

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
            "@type": "Article",
            headline: article.title,
            description: article.content.slice(0, 160),
            datePublished: article.date,
            dateModified: article.date,
            author: {
              "@type": "Organization",
              name: "Toozyx",
              url: "https://toozyx.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Toozyx",
              logo: { "@type": "ImageObject", url: "https://toozyx.com/icon.svg" },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://toozyx.com${localePath(locale, `/blog/${slug}`)}`,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `https://toozyx.com${localePath(locale, "")}` },
              { "@type": "ListItem", position: 2, name: t("title"), item: `https://toozyx.com${localePath(locale, "/blog")}` },
              { "@type": "ListItem", position: 3, name: article.title, item: `https://toozyx.com${localePath(locale, `/blog/${slug}`)}` },
            ],
          }),
        }}
      />
      <Section>
        <Container className="max-w-3xl">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center text-sm text-gray-500 hover:text-[#3D49A8] transition-colors mb-8"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1.5 rtl:rotate-180"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            {t("backToBlog")}
          </Link>

          <article>
            <header className="mb-8">
              <p className="text-sm font-medium text-[#6874E8] mb-3">
                {formatDate(article.date)}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                {article.title}
              </h1>
            </header>
            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                {article.content}
              </p>
            </div>
          </article>
        </Container>
      </Section>
    </>
  );
}
