import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import BlogCard from "@/components/BlogCard";

const placeholderArticles = [
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
