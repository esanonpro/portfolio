import type { MetadataRoute } from "next";
import { experiences, research } from "@/content/cases";

const BASE = "https://eliesanon.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...experiences.map((e) => ({ url: `${BASE}/experience/${e.slug}`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.8 })),
    { url: `${BASE}/research`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    ...research.map((r) => ({ url: `${BASE}/research/${r.slug}`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
