import { useTranslations } from "next-intl";
import Button from "@/components/Button";
import Container from "@/components/Container";

interface CTASectionProps {
  locale: string;
}

export default function CTASection({ locale }: CTASectionProps) {
  const t = useTranslations("home.cta");

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 sm:p-12 lg:p-16 text-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-lg mx-auto">
              {t("description")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={`/${locale}/products`}>
                {t("exploreProducts")}
              </Button>
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/20 text-white px-6 py-3 text-sm font-medium transition-all hover:bg-white/10 hover:border-white/30"
              >
                {t("contactUs")}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
