import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
      crawlDelay: 10,
    },
    sitemap: "https://toozyx.com/sitemap.xml",
    host: "https://toozyx.com",
  };
}
