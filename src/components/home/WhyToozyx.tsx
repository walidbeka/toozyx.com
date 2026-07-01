import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const items = [
  {
    key: "innovation",
    gradient: "from-[#3D49A8] to-[#6874E8]",
    icon: (
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    ),
  },
  {
    key: "aiFirst",
    gradient: "from-[#6874E8] to-[#8d95d7]",
    icon: (
      <path d="M12 2a10 10 0 1010 10 10 10 0 00-10-10zm1 14h-2v-2h2zm0-4h-2V7h2z" />
    ),
  },
  {
    key: "modernTech",
    gradient: "from-[#3D49A8] to-[#8d95d7]",
    icon: (
      <path d="M20 14.66V20a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h5.34" />
    ),
  },
  {
    key: "premiumUX",
    gradient: "from-[#6874E8] to-[#b8bde6]",
    icon: (
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    ),
  },
];

export default function WhyToozyx() {
  const t = useTranslations("home.whyToozyx");

  return (
    <Section className="bg-gradient-to-b from-primary-50/50 to-white">
      <SectionHeader
        title={t("title")}
        description={t("description")}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <Card key={item.key} className="p-6 sm:p-8 text-center">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-5`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {item.icon}
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t(`${item.key}.title`)}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t(`${item.key}.description`)}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
