import Link from "next/link";
import { useTranslations } from "next-intl";
import Container from "./Container";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

interface FooterProps {
  locale?: string;
}

export default function Footer({ locale = "en" }: FooterProps) {
  const t = useTranslations("footer");

  const footerLinks = {
    products: {
      heading: t("allProducts"),
      links: [
        { label: "Toozyx Tools", href: "https://tools.toozyx.com", external: true },
        { label: "Toozyx Agent", href: "https://agent.toozyx.com", external: true },
        { label: "Toozyx Media", href: "https://media.toozyx.com", external: true },
      ],
    },
    company: {
      heading: t("company"),
      links: [
        { label: t("about"), href: `/${locale}/about`, external: false },
        { label: t("contact"), href: `/${locale}/contact`, external: false },
        { label: t("blog"), href: `/${locale}/blog`, external: false },
      ],
    },
    resources: {
      heading: t("resources"),
      links: [
        { label: t("privacy"), href: `/${locale}/privacy`, external: false },
        { label: t("terms"), href: `/${locale}/terms`, external: false },
      ],
    },
  };

  return (
    <footer className="border-t border-gray-100 bg-white">
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Logo locale={locale} className="mb-4" />
            <p className="text-sm text-gray-500 mt-3 max-w-xs">
              Products for modern teams.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          {Object.entries(footerLinks).map(([key, group]) => (
            <div key={key}>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                {group.heading}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-[#3D49A8] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-[#3D49A8] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Toozyx. {t("copyright")}
          </p>
          <p className="text-sm text-gray-400">{t("builtBy")}</p>
        </div>
      </Container>
    </footer>
  );
}
