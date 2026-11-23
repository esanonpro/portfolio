import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/studio"] }],
    sitemap: "https://eliesanon.vercel.app/sitemap.xml",
    host: "https://eliesanon.vercel.app",
  };
}
