import Link from "next/link";
import type { Block, CaseStudy } from "@/content/cases";
import { ArrowRight, ArrowUpRight, Icon } from "./Icon";
import { Diagram } from "./Diagram";
import { TiltFigure } from "./TiltFigure";

type Overrides = { intro?: string | null; contribution?: string | null; tags?: string[] | null };
type Neighbour = { href: string; label: string; title: string };

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return <p key={i}>{b.text}</p>;
          case "list":
            return <ul key={i} className="c-list">{b.items.map((t) => <li key={t}>{t}</li>)}</ul>;
          case "quote":
            return <blockquote key={i} className="c-quote">{b.text}</blockquote>;
          case "flow":
            return (
              <ol key={i} className="c-flow" aria-label="Étapes">
                {b.steps.map((s) => <li key={s}>{s}</li>)}
              </ol>
            );
          case "scale":
            return <div key={i} className="c-scale" aria-label="Tailles d'échantillon">{b.items.map((s) => <span key={s}>{s}</span>)}</div>;
          case "compare":
            return (
              <div key={i} className="c-compare">
                {b.items.map((c) => (
                  <div key={c.title}><small>{c.label}</small><b>{c.title}</b><p>{c.text}</p></div>
                ))}
              </div>
            );
          case "figure":
            return (
              <figure key={i} className="c-figure">
                <div className={`c-frame${b.light ? " light" : ""}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.src} alt={b.alt} loading="lazy" />
                </div>
                <figcaption><span>{b.label}</span>{b.caption}</figcaption>
              </figure>
            );
          case "figurePair":
            return (
              <div key={i} className="c-pair">
                {b.figures.map((f) => (
                  <figure key={f.src} className="c-figure">
                    <div className="c-frame light">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={f.src} alt={f.alt} loading="lazy" />
                    </div>
                    <figcaption><span>{f.label}</span>{f.caption}</figcaption>
                  </figure>
                ))}
              </div>
            );
          case "chart":
            return (
              <figure key={i} className="c-chart">
                <div className="c-chart-head"><b>{b.title}</b><span>{b.hint}</span></div>
                <ul>
                  {b.bars.map((bar) => (
                    <li key={bar.label} className={bar.highlight ? "hl" : undefined}>
                      <span className="lbl">{bar.label}</span>
                      <span className="track"><i style={{ width: `${bar.width}%` }} /></span>
                      <b>{bar.value}</b>
                    </li>
                  ))}
                </ul>
                {b.note && <figcaption>{b.note}</figcaption>}
              </figure>
            );
          case "speed":
            return (
              <div key={i} className="c-speed">
                {b.items.map((s) => <div key={s.label}><small>{s.label}</small><b>{s.value}</b><span>{s.note}</span></div>)}
              </div>
            );
          case "link":
            return <a key={i} className="c-inline-link" href={b.href} target="_blank" rel="noreferrer">{b.label} <ArrowUpRight /></a>;
        }
      })}
    </>
  );
}

export function CasePage({ c, cms = {}, prev, next, back }: { c: CaseStudy; cms?: Overrides; prev?: Neighbour; next?: Neighbour; back: { href: string; label: string } }) {
  const intro = cms.intro || c.intro;
  const contribution = cms.contribution || c.contribution;
  const tags = cms.tags?.length ? cms.tags.map((label) => ({ label, icon: undefined })) : c.tags;

  return (
    <>
      <section className="c-hero">
        <div className="wrap">
          <Link className="c-back" href={back.href}><span aria-hidden="true">←</span> {back.label}</Link>
          <div className="c-hero-grid">
            <div>
              <p className="eyebrow enter"><span className="dot" aria-hidden="true" />{c.eyebrow}</p>
              <h1 className="enter d1">{c.titleTop}<br /><span className="grad">{c.titleAccent}</span></h1>
              <p className="lead enter d2">{intro}</p>
              <div className="c-tags enter d3">
                {tags.map((t) => <span className="chipi" key={t.label}>{t.icon && <Icon name={t.icon} />}{t.label}</span>)}
              </div>
              {c.repo && <a className="btn btn-cyan enter d4" href={c.repo} target="_blank" rel="noreferrer">Voir le dépôt <ArrowUpRight /></a>}
            </div>
            <aside className="c-badge enter d3">
              <small>{c.badge.label}</small>
              <b>{c.badge.title}</b>
              <span><i aria-hidden="true" />{c.badge.sub}</span>
            </aside>
          </div>
        </div>
      </section>

      {contribution && (
        <section className="c-contrib light">
          <div className="wrap"><h2>Ma contribution</h2><p>{contribution}</p></div>
        </section>
      )}

      {c.metrics && (
        <section className="c-metrics light">
          <div className="wrap">
            <dl>{c.metrics.map((m) => <div key={m.label}><dt>{m.label}</dt><dd><b>{m.value}</b><span>{m.note}</span></dd></div>)}</dl>
          </div>
        </section>
      )}

      {c.diagram && (
        <section className="block dark on-dark c-arch">
          <div className="wrap">
            <div className="sec-head">
              <div><p className="c-kicker">{c.diagram.kicker}</p><h2>{c.diagram.title}<span className="grad">{c.diagram.accent}</span></h2></div>
              <p>{c.diagram.text}</p>
            </div>
            <TiltFigure>
              <figcaption><span aria-hidden="true">🧩</span> Vue simplifiée des composants</figcaption>
              <div className="c-arch-scroll"><Diagram id={c.diagram.id} /></div>
            </TiltFigure>
            {c.diagram.outputs && <div className="c-outputs">{c.diagram.outputs.map((o) => <span key={o}>{o}</span>)}</div>}
          </div>
        </section>
      )}

      <section className="block light c-body">
        <div className="wrap c-body-grid">
          <aside className="c-meta">
            <dl>
              {c.meta.map((m) => (
                <div key={m.label}>
                  <dt>{m.label}</dt>
                  <dd>{m.href ? <a href={m.href} target="_blank" rel="noreferrer">{m.value} <ArrowUpRight /></a> : m.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
          <div className="c-sections">
            {c.sections.map((s, i) => (
              <article key={s.title} className="c-section">
                <span className="num">{String(i + 1).padStart(2, "0")}/</span>
                <h2>{s.title}</h2>
                <div className="c-prose"><Blocks blocks={s.blocks} /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {(prev || next) && (
        <nav className="c-pager light" aria-label="Autres études">
          <div className="wrap">
            {prev ? <Link href={prev.href} className="prev"><small>← {prev.label}</small><b>{prev.title}</b></Link> : <span />}
            {next ? <Link href={next.href} className="next"><small>{next.label} →</small><b>{next.title}</b></Link> : <span />}
          </div>
        </nav>
      )}

      <section className="c-cta dark">
        <div className="wrap">
          <h2>Un poste en IA appliquée ? <span className="grad">Parlons-en</span></h2>
          <a className="btn btn-cyan" href="/#contact">Me contacter <ArrowRight /></a>
        </div>
      </section>
    </>
  );
}
