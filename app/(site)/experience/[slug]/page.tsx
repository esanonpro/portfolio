import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasePage } from "@/components/CasePage";
import { experiences } from "@/content/cases";
import { getExperienceBySlug } from "@/sanity/lib/content";

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps<"/experience/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = experiences.find((e) => e.slug === slug);
  return c ? { title: `${c.titleTop} · ${c.titleAccent}`, description: c.intro, alternates: { canonical: `/experience/${slug}` }, openGraph: { title: c.titleTop + " " + c.titleAccent, description: c.intro, url: `/experience/${slug}`, type: "article", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Elie Sanon — AI Engineer" }] }, twitter: { card: "summary_large_image", title: c.titleTop + " " + c.titleAccent, description: c.intro, images: ["/og.png"] } } : {};
}

export default async function ExperiencePage({ params }: PageProps<"/experience/[slug]">) {
  const { slug } = await params;
  const i = experiences.findIndex((e) => e.slug === slug);
  if (i < 0) notFound();
  const c = experiences[i];
  const cms = await getExperienceBySlug(slug);
  const p = experiences[i - 1], n = experiences[i + 1];
  return (
    <CasePage
      c={c}
      cms={{ intro: cms?.detailIntro, contribution: cms?.contribution }}
      back={{ href: "/#experiences", label: "Expériences" }}
      prev={p && { href: `/experience/${p.slug}`, label: "Étude précédente", title: p.titleAccent }}
      next={n && { href: `/experience/${n.slug}`, label: "Étude suivante", title: n.titleAccent }}
    />
  );
}
