import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    key: "tools",
    href: "https://tools.toozyx.com",
  },
  {
    key: "agent",
    href: "https://agent.toozyx.com",
  },
  {
    key: "media",
    href: "https://media.toozyx.com",
  },
];

export default function ProductsSection() {
  const t = useTranslations("home.products");

  return (
    <Section id="products">
      <SectionHeader
        title={t("title")}
        description={t("description")}
      />
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={product.key}
            name={t(`${product.key}.name`)}
            description={t(`${product.key}.description`)}
            cta={t(`${product.key}.cta`)}
            href={product.href}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
