import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const config: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default withNextIntl(config);
