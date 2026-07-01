import { getTranslations } from "next-intl/server";
import Hero from "@/components/home/Hero";
import ProductsSection from "@/components/home/ProductsSection";
import WhyToozyx from "@/components/home/WhyToozyx";
import MissionSection from "@/components/home/MissionSection";
import ArticlesSection from "@/components/home/ArticlesSection";
import CTASection from "@/components/home/CTASection";
import type { Metadata } from "next";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Toozyx",
            url: "https://toozyx.com",
            logo: "https://toozyx.com/icon.png",
            description:
              "Toozyx develops modern software products, AI solutions and creative technologies for businesses around the world.",
            email: "info@toozyx.com",
            location: { "@type": "Place", address: "Cairo, Egypt" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Toozyx",
            url: "https://toozyx.com",
          }),
        }}
      />
      <Hero locale={locale} />
      <ProductsSection />
      <WhyToozyx />
      <MissionSection />
      <ArticlesSection locale={locale} />
      <CTASection locale={locale} />
    </>
  );
}
