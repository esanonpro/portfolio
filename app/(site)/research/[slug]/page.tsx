import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasePage } from "@/components/CasePage";
import { research } from "@/content/cases";
import { getResearchBySlug } from "@/sanity/lib/content";

export function generateStaticParams() {
  return research.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps<"/research/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = research.find((r) => r.slug === slug);
  return c ? { title: `${c.titleTop} ${c.titleAccent}`, description: c.intro } : {};
}

export default async function ResearchPage({ params }: PageProps<"/research/[slug]">) {
  const { slug } = await params;
  const i = research.findIndex((r) => r.slug === slug);
  if (i < 0) notFound();
  const c = research[i];
  const cms = await getResearchBySlug(slug);
  const p = research[i - 1], n = research[i + 1];
  return (
    <CasePage
      c={c}
      cms={{ intro: cms?.summary, tags: cms?.tags }}
      back={{ href: "/research", label: "Recherche" }}
      prev={p && { href: `/research/${p.slug}`, label: "Étude précédente", title: p.titleAccent }}
      next={n && { href: `/research/${n.slug}`, label: "Étude suivante", title: n.titleAccent }}
    />
  );
}
