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

  for (const route of staticRoutes) {
    const enUrl = `https://toozyx.com${route}`;
    const arUrl = `https://toozyx.com/ar${route}`;
    entries.push({
      url: enUrl,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1.0 : 0.8,
      alternates: { languages: { en: enUrl, ar: arUrl } },
    });
    if (route !== "") {
      entries.push({
        url: arUrl,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages: { en: enUrl, ar: arUrl } },
      });
    }
  }

  for (const [slug, date] of Object.entries(blogPosts)) {
    const enUrl = `https://toozyx.com/blog/${slug}`;
    const arUrl = `https://toozyx.com/ar/blog/${slug}`;
    entries.push({
      url: enUrl,
      lastModified: new Date(date),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: { languages: { en: enUrl, ar: arUrl } },
    });
    entries.push({
      url: arUrl,
      lastModified: new Date(date),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: { languages: { en: enUrl, ar: arUrl } },
    });
  }

  return entries;
}
