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

const blogPosts = [
  "introducing-toozyx-agent",
  "why-ai-first-development-matters",
  "technology-behind-toozyx-tools",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `https://toozyx.com/${locale}${route}`,
        lastModified: new Date("2025-03-10"),
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

    for (const slug of blogPosts) {
      entries.push({
        url: `https://toozyx.com/${locale}/blog/${slug}`,
        lastModified: new Date("2025-03-10"),
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
