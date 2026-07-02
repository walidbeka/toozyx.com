import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

export default function HowWeSolveSection() {
  const t = useTranslations("home.howWeSolve");

  const steps = [
    { id: "step-0", number: "01", index: 0 },
    { id: "step-1", number: "02", index: 1 },
    { id: "step-2", number: "03", index: 2 },
    { id: "step-3", number: "04", index: 3 },
    { id: "step-4", number: "05", index: 4 },
  ];

  return (
    <Section>
      <SectionHeader
        title={t("title")}
        description={t("description")}
      />
      <div className="grid md:grid-cols-5 gap-4 lg:gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative p-6 rounded-2xl border border-gray-100 bg-white hover:border-primary-100 hover:shadow-sm transition-all"
          >
            <span className="text-5xl font-bold text-primary-100 leading-none block mb-4">
              {step.number}
            </span>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              {t(`steps.${step.index}.title`)}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t(`steps.${step.index}.description`)}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
