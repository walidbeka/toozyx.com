import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import BlogCard from "@/components/BlogCard";

const placeholderArticles = [
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

interface ArticlesSectionProps {
  locale: string;
}

export default function ArticlesSection({ locale }: ArticlesSectionProps) {
  const t = useTranslations("home.articles");

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString(locale === "ar" ? "ar" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Section id="blog" className="bg-gray-50/50">
      <SectionHeader
        title={t("title")}
        description={t("description")}
      />
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {placeholderArticles.map((article) => (
          <BlogCard
            key={article.slug}
            title={article.title}
            description={article.description}
            date={formatDate(article.date)}
            slug={article.slug}
            locale={locale}
            readMore={t("readMore")}
          />
        ))}
      </div>
    </Section>
  );
}
