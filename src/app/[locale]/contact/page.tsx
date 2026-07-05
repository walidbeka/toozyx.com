import { getTranslations } from "next-intl/server";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Card from "@/components/Card";
import ContactForm from "./ContactForm";
import { siteConfig, localeAlternates, localePath } from "@/config/site";
import type { Metadata } from "next";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  const isAr = locale === "ar";
  const title = t("title");
  const suffix = isAr ? " | توزيكس" : " | Toozyx";

  return {
    title: title + suffix,
    description: t("description"),
    alternates: localeAlternates(locale, "/contact"),
    openGraph: {
      title: title + suffix,
      description: t("description"),
            url: `https://toozyx.com${localePath(locale, "/contact")}`,
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

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

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
              { "@type": "ListItem", position: 2, name: t("title"), item: `https://toozyx.com${localePath(locale, "/contact")}` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: t("title"),
            description: t("description"),
      url: `https://toozyx.com${localePath(locale, "/contact")}`,
            mainEntity: {
              "@type": "Organization",
              name: "Toozyx",
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@toozyx.com",
                contactType: "sales",
                availableLanguage: ["English", "Arabic"],
              },
            },
          }),
        }}
      />
      <Section>
        <Container className="max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {t("title")}
            </h1>
            <p className="text-lg text-gray-500">{t("description")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 sm:p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3D49A8] to-[#6874E8] flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Email</h3>
              <p className="text-sm text-gray-500">{t("email")}</p>
            </Card>

            <Card className="p-6 sm:p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6874E8] to-[#8d95d7] flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Location</h3>
              <p className="text-sm text-gray-500">{t("location")}</p>
            </Card>
          </div>

          <Card className="p-6 sm:p-8">
            <ContactForm locale={locale} />
          </Card>
        </Container>
      </Section>
    </>
  );
}
