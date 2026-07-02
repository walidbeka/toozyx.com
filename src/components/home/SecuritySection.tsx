import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

const items = [
  { index: 0 },
  { index: 1 },
  { index: 2 },
  { index: 3 },
  { index: 4 },
];

export default function SecuritySection() {
  const t = useTranslations("home.security");

  return (
    <Section>
      <div className="rounded-3xl border border-gray-100 bg-white p-8 sm:p-12">
        <SectionHeader
          title={t("title")}
          description={t("description")}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <div key={item.index}>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {t(`items.${item.index}.title`)}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {t(`items.${item.index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
