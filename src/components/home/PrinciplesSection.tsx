import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

const items = [
  { index: 0 },
  { index: 1 },
  { index: 2 },
  { index: 3 },
  { index: 4 },
  { index: 5 },
];

export default function PrinciplesSection() {
  const t = useTranslations("home.principles");

  return (
    <Section>
      <SectionHeader
        title={t("title")}
        description={t("description")}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {items.map((item) => (
          <div
            key={item.index}
            className="p-5 sm:p-6 rounded-2xl border border-gray-100 bg-white"
          >
            <span className="text-3xl font-bold text-primary-100 leading-none block mb-3">
              {String(item.index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              {t(`items.${item.index}.title`)}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t(`items.${item.index}.description`)}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
