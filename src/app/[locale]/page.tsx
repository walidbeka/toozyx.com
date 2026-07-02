import { getTranslations } from "next-intl/server";
import Hero from "@/components/home/Hero";
import ProductsSection from "@/components/home/ProductsSection";
import WhyToozyx from "@/components/home/WhyToozyx";
import PrinciplesSection from "@/components/home/PrinciplesSection";
import HowWeSolveSection from "@/components/home/HowWeSolveSection";
import TrustSection from "@/components/home/TrustSection";
import MissionSection from "@/components/home/MissionSection";
import MetricsSection from "@/components/home/MetricsSection";
import ArticlesSection from "@/components/home/ArticlesSection";
import SecuritySection from "@/components/home/SecuritySection";
import CTASection from "@/components/home/CTASection";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });
  const isAr = locale === "ar";
  const localeSuffix = isAr ? " | توزيكس" : " | Toozyx";

  return {
    title: isAr ? "توزيكس" : "Toozyx",
    description: t("description"),
    alternates: {
      canonical: `https://toozyx.com/${locale}`,
      languages: { en: "https://toozyx.com/en", ar: "https://toozyx.com/ar" },
    },
    openGraph: {
      title: isAr ? "توزيكس" : "Toozyx",
      description: t("description"),
      url: `https://toozyx.com/${locale}`,
      siteName: "Toozyx",
      locale: isAr ? "ar_SA" : "en_US",
      type: "website",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: isAr ? "توزيكس" : "Toozyx",
      description: t("description"),
      images: [siteConfig.ogImage],
      site: siteConfig.twitterHandle,
    },
    robots: { index: true, follow: true },
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
              "Toozyx helps companies build better operating systems. We study how organisations work, identify bottlenecks, and design solutions that improve clarity, control, and growth.",
            email: "info@toozyx.com",
            address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
            contactPoint: {
              "@type": "ContactPoint",
              email: "info@toozyx.com",
              contactType: "sales",
            },
            sameAs: [
              "https://linkedin.com/company/toozyx",
              "https://x.com/toozyx",
              "https://github.com/toozyx",
              "https://youtube.com/@toozyx",
            ],
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
            description:
              "Toozyx helps companies build better operating systems.",
          }),
        }}
      />
      <Hero locale={locale} />
      <ProductsSection />
      <WhyToozyx />
      <PrinciplesSection />
      <HowWeSolveSection />
      <TrustSection />
      <MissionSection />
      <MetricsSection />
      <ArticlesSection locale={locale} />
      <SecuritySection />
      <CTASection locale={locale} />
    </>
  );
}
