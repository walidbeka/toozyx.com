import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import Button from "@/components/Button";

interface HeroProps {
  locale: string;
}

export default function Hero({ locale }: HeroProps) {
  const t = useTranslations("home.hero");

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#6874E8]/5 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#3D49A8]/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#6874E8]/5 blur-3xl" />

      <Container className="relative">
        <div className="flex flex-col items-center text-center py-20 sm:py-28 lg:py-36">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#3D49A8] animate-pulse" />
            <span className="text-xs font-medium text-[#3D49A8]">
              Toozyx — Business Systems Company
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 max-w-4xl leading-tight sm:leading-tight lg:leading-tight">
            {t("headline")}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl leading-relaxed">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Button href={`/${locale}/products`}>
              {t("exploreProducts")}
            </Button>
            <Button href={`/${locale}/contact`} variant="outline">
              {t("contactUs")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
