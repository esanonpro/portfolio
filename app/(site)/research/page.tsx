import type { Metadata } from "next";
import Link from "next/link";
import { research, researchIndex as r } from "@/content/cases";
import { ArrowRight } from "@/components/Icon";

export const metadata: Metadata = { title: "Recherche", description: r.intro };

export default function ResearchIndex() {
  return (
    <>
      <section className="c-hero">
        <div className="wrap">
          <Link className="c-back" href="/#recherche"><span aria-hidden="true">←</span> Accueil</Link>
          <p className="eyebrow enter"><span className="dot" aria-hidden="true" />{r.eyebrow}</p>
          <h1 className="enter d1">{r.titleTop}<br /><span className="grad">{r.titleAccent}</span></h1>
          <p className="lead enter d2">{r.intro}</p>
        </div>
      </section>

      <section className="block light">
        <div className="wrap">
          <div className="sec-head">
            <h2>Axes de recherche</h2>
            <p>Les thèmes qui reviennent dans mes travaux, de l&apos;apprentissage statistique à l&apos;IA fiable.</p>
          </div>
          <ol className="r-axes">{r.axes.map((a, i) => <li key={a}><span>{String(i + 1).padStart(2, "0")}/</span>{a}</li>)}</ol>
        </div>
      </section>

      <section className="block dark on-dark">
        <div className="wrap">
          <div className="sec-head">
            <h2>Travaux <span className="grad">académiques</span></h2>
            <p>Deux projets de recherche appliquée : le débruitage d&apos;images par Transformers et la calibration rapide des modèles GARCH.</p>
          </div>
          <div className="r-works">
            {research.map((w) => (
              <Link key={w.slug} href={`/research/${w.slug}`} className="r-work">
                <div className="r-top"><span>{w.index}/</span><small>{w.label}</small></div>
                <h3>{w.titleTop} {w.titleAccent}</h3>
                <p>{w.question}</p>
                <div className="r-tags">{w.tags.map((t) => <span key={t.label}>{t.label}</span>)}</div>
                <span className="r-more">Lire l&apos;étude <ArrowRight /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
