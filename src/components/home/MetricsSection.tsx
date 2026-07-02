import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const items = [
  { index: 0 },
  { index: 1 },
  { index: 2 },
  { index: 3 },
  { index: 4 },
];

export default function MetricsSection() {
  const t = useTranslations("home.metrics");

  return (
    <Section className="bg-gradient-to-b from-primary-50/50 to-white">
      <SectionHeader
        title={t("title")}
        description={t("description")}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
        {items.map((item) => (
          <Card key={item.index} className="p-5 sm:p-6 text-center">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              {t(`items.${item.index}.title`)}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t(`items.${item.index}.description`)}
            </p>
          </Card>
        ))}
      </div>
      <p className="text-center text-sm text-gray-400 mt-8 max-w-xl mx-auto italic">
        {t("note")}
      </p>
    </Section>
  );
}
