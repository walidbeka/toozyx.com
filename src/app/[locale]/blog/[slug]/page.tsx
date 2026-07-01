import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Section from "@/components/Section";
import Container from "@/components/Container";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface ArticlePageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const articles: Record<string, { title: string; content: string; date: string }> = {
  "introducing-toozyx-agent": {
    title: "Introducing Toozyx Agent: AI-Powered WhatsApp Automation",
    date: "2025-01-15",
    content:
      "We are excited to introduce Toozyx Agent — a platform designed to transform how businesses engage with customers through intelligent WhatsApp automation. Built with cutting-edge AI technology, Toozyx Agent enables businesses to automate customer conversations, provide instant responses, and gather valuable insights from every interaction. The platform integrates seamlessly with WhatsApp, making it easy to reach customers on the messaging platform they already use. With features like intelligent response routing, multi-language support, and detailed analytics, Toozyx Agent helps businesses of all sizes deliver exceptional customer experiences at scale.",
  },
  "why-ai-first-development-matters": {
    title: "Why AI-First Development Matters",
    date: "2025-02-01",
    content:
      "An exploration of how building with an AI-first approach leads to more capable, adaptable, and intelligent products. At Toozyx, we believe that AI is not just a feature — it is a fundamental shift in how software should be built. An AI-first approach means designing products with AI capabilities at their core, rather than adding AI as an afterthought. This approach enables products that learn from user behavior, adapt to changing needs, and provide increasingly personalised experiences over time. From natural language processing to predictive analytics, AI-first development opens up possibilities that were previously out of reach.",
  },
  "technology-behind-toozyx-tools": {
    title: "The Technology Behind Toozyx Tools",
    date: "2025-03-10",
    content:
      "A behind-the-scenes look at the modern web technologies that power our free online toolset. Toozyx Tools is built using modern web technologies that prioritise speed, reliability, and accessibility. Every tool is designed to work directly in the browser without requiring installations or downloads. The platform leverages serverless architecture for scalability, progressive web app technologies for offline capabilities, and responsive design principles to ensure a consistent experience across devices. We continuously update our tools based on user feedback and emerging technologies.",
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

  return {
    title: article.title,
    description: article.content.slice(0, 160),
    alternates: { canonical: `/${locale}/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.content.slice(0, 160),
      type: "article",
      publishedTime: article.date,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.content.slice(0, 160),
    },
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
            datePublished: article.date,
            author: {
              "@type": "Organization",
              name: "Toozyx",
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
              { "@type": "ListItem", position: 1, name: "Home", item: `https://toozyx.com/${locale}` },
              { "@type": "ListItem", position: 2, name: t("title"), item: `https://toozyx.com/${locale}/blog` },
              { "@type": "ListItem", position: 3, name: article.title, item: `https://toozyx.com/${locale}/blog/${slug}` },
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
