export function localePath(locale: string, path: string): string {
  if (locale === "en") return path || "/";
  return `/ar${path}`;
}

export function localeAlternates(locale: string, path: string) {
  const en = path || "/";
  const ar = `/ar${path}`;
  return {
    canonical: `https://toozyx.com${locale === "en" ? en : ar}`,
    languages: { en: `https://toozyx.com${en}`, ar: `https://toozyx.com${ar}` },
  };
}

export const siteConfig = {
  name: "Toozyx",
  description:
    "Toozyx helps companies build better operating systems. We study how organisations work, identify bottlenecks, and design solutions that improve clarity, control, and growth.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://toozyx.com",
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL || "https://toozyx.com"}/og-image.svg`,
  ogImageAlt: "Toozyx — Business Systems Company",
  twitterHandle: "@toozyx",
  links: {
    tools: "https://tools.toozyx.com",
    agent: "https://agent.toozyx.com",
    media: "https://media.toozyx.com",
  },
  contact: {
    email: "info@toozyx.com",
    location: "Cairo, Egypt",
  },
  analytics: {
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "",
    clarityId: process.env.NEXT_PUBLIC_CLARITY_ID || "",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
    bing: process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
  },
  env: (process.env.NEXT_PUBLIC_ENV as "development" | "production" | "staging") || "development",
};

export type SiteConfig = typeof siteConfig;
