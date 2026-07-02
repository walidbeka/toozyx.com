import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const pillars = [
  { index: 0, icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
  { index: 1, icon: "M22 12h-4l-3 9L9 3l-3 9H2" },
  { index: 2, icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { index: 3, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
];

export default function TrustSection() {
  const t = useTranslations("home.trust");

  return (
    <Section className="bg-gradient-to-b from-white to-primary-50/50">
      <SectionHeader
        title={t("title")}
        description={t("description")}
      />
      <div className="grid sm:grid-cols-2 gap-6">
        {pillars.map((pillar) => (
          <Card key={pillar.index} className="p-6 sm:p-8">
            <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3D49A8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={pillar.icon} />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t(`pillars.${pillar.index}.title`)}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t(`pillars.${pillar.index}.description`)}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
