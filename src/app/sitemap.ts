import { MetadataRoute } from "next";

const locales = ["en", "ar"];

const staticRoutes = [
  "",
  "/products",
  "/about",
  "/contact",
  "/blog",
  "/privacy",
  "/terms",
];

const blogPosts: Record<string, string> = {
  "automating-customer-conversations": "2025-01-15",
  "reducing-operational-friction": "2025-02-01",
  "building-practical-business-tools": "2025-03-10",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `https://toozyx.com/${locale}${route}`,
        lastModified: now,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `https://toozyx.com/en${route}`,
            ar: `https://toozyx.com/ar${route}`,
          },
        },
      });
    }

    for (const [slug, date] of Object.entries(blogPosts)) {
      entries.push({
        url: `https://toozyx.com/${locale}/blog/${slug}`,
        lastModified: new Date(date),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: {
            en: `https://toozyx.com/en/blog/${slug}`,
            ar: `https://toozyx.com/ar/blog/${slug}`,
          },
        },
      });
    }
  }

  return entries;
}
