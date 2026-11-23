import Image from "next/image";
import { fr } from "@/content/site";
import { ArrowRight, ArrowUpRight, Chevron, Emoji, Icon } from "./Icon";
import { Diagram } from "./Diagram";
import { HeroScene } from "./HeroScene";
import { Ticker } from "./Ticker";
import { TiltFigure } from "./TiltFigure";
import { CopyEmail } from "./CopyEmail";
import { SkillCloud } from "./SkillCloud";

export function Hero() {
  const h = fr.hero;
  return (
    <section className="hero" id="top">
      <HeroScene />
      <Image className="hero-art" src="/img/hero.webp" alt="" aria-hidden="true" width={900} height={900} priority />
      <div className="wrap">
        <p className="eyebrow enter"><span className="dot" aria-hidden="true" /><Emoji>👋</Emoji> {h.eyebrow}</p>
        <h1 className="enter d1">{h.titleStart}<span className="grad">{h.titleAccent}</span></h1>
        <p className="lead enter d2">{h.lead}</p>
        <div className="cta enter d3">
          <a className="btn btn-cyan" href="#projets">Voir les projets <ArrowRight /></a>
          <a className="btn btn-line" href={fr.links.github}>GitHub <ArrowUpRight /></a>
        </div>
        <div className="hero-row enter d4">
          <a className="round" href={fr.links.cv}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>
            Mon CV
          </a>
          <Ticker words={h.ticker} caption={h.method} />
        </div>
      </div>
      <div className="wrap">
        <div className="stackbar">
          <b><Emoji>🧰</Emoji> Stack</b>
          {h.stack.map((t) => <span className="chipi" key={t.label}>{t.icon && <Icon name={t.icon} />}{t.label}</span>)}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const p = fr.projects;
  return (
    <section className="block light" id="projets">
      <div className="wrap">
        <div className="sec-head">
          <h2>{p.title}</h2>
          <p>{p.intro}</p>
        </div>
        {p.items.map((it) => (
          <article className={`project${it.flip ? " flip" : ""}`} key={it.id}>
            <div>
              <p className="kicker">{it.kicker}</p>
              <h3>{it.title}</h3>
              <p>{it.description}</p>
              <ul className="points">
                {it.points.map((pt) => <li key={pt.text}>{pt.text}</li>)}
              </ul>
              <div className="tags">
                {it.tags.map((t) => <span className="tag" key={t.label}>{t.icon && <Icon name={t.icon} />}{t.label}</span>)}
              </div>
              <a className="btn btn-indigo" href={it.repoUrl}>Voir le dépôt <ArrowRight /></a>
            </div>
            <TiltFigure>
              <Image className="cover" src={it.cover} alt="" aria-hidden="true" width={1200} height={680} />
              <figcaption>{it.caption}</figcaption>
              <Diagram id={it.diagram} />
              <ol className="flow-m">
                {it.mobileFlow.map((f) => <li key={f.label} className={f.highlight ? "hl" : undefined}>{f.label}</li>)}
              </ol>
            </TiltFigure>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Experiences() {
  const x = fr.experiences;
  return (
    <section className="block dark on-dark" id="experiences">
      <div className="wrap">
        <div className="sec-head">
          <h2>{x.title} <span className="emo"><Emoji>{x.emoji}</Emoji></span></h2>
          <p>{x.intro}</p>
        </div>
        <ol className="rows">
          {x.items.map((e, i) => (
            <li key={e.company}>
              <span className="num">{String(i + 1).padStart(2, "0")}/</span>
              <div><h3>{e.company}</h3><p className="where">{e.role} · {e.place} · {e.year}</p></div>
              <div className="detail">
                <span><Emoji>{e.emoji}</Emoji> {e.summary}</span>
                <span>{e.detail}</span>
                <span><b>{e.stack}</b></span>
              </div>
              {e.architecture && (
                <details className="arch">
                  <summary><Emoji>🧩</Emoji> Voir l&apos;architecture <Chevron /></summary>
                  <div className="arch-body">
                    <Diagram id={e.architecture} />
                    <p className="legend">Vue simplifiée des composants, sans détail confidentiel.</p>
                  </div>
                </details>
              )}
              {e.caseStudy && (
                <a className="case-link" href={e.caseStudy}>Lire l&apos;étude de cas <ArrowRight /></a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Research() {
  const r = fr.research;
  return (
    <section className="block light" id="recherche">
      <div className="wrap">
        <div className="sec-head">
          <h2>{r.titleStart}<span className="grad">{r.titleAccent}</span></h2>
          <p>{r.intro}</p>
        </div>
        <div className="duo">
          <div className="card">
            <h3><Emoji>🔬</Emoji> Travaux ENSAI</h3>
            <ul>{r.works.map((w) => <li key={w.title}><strong>{w.title}</strong><span>{w.meta}</span></li>)}</ul>
            <a className="btn btn-indigo" href={fr.links.research}>Lire les études <ArrowRight /></a>
          </div>
          <div className="card">
            <h3><Emoji>🎓</Emoji> Parcours</h3>
            <ul>
              {r.education.map((ed) => (
                <li key={ed.title}><strong>{ed.emoji && <><Emoji>{ed.emoji}</Emoji> </>}{ed.title}</strong><span>{ed.meta}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const c = fr.contact;
  return (
    <section className="contact light" id="contact" style={{ background: "#F4F3FF" }}>
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <h2>{c.titleStart}<span className="grad">{c.titleAccent}</span> <span className="emo"><Emoji>📬</Emoji></span></h2>
            <p className="lead">{c.lead}</p>
            <CopyEmail email={c.email} />
          </div>
          <div className="cols">
            <div><h3>Projets</h3><ul>{fr.projects.items.map((p) => <li key={p.id}><a href="#projets">{p.title}</a></li>)}</ul></div>
            <div><h3>Expériences</h3><ul>{fr.experiences.items.map((e) => <li key={e.company}><a href="#experiences">{e.company.replace(" Louis de Broglie", "")}</a></li>)}</ul></div>
            <div><h3>Liens</h3><ul>
              <li><a href={fr.links.linkedin}>LinkedIn</a></li>
              <li><a href={fr.links.github}>GitHub</a></li>
              <li><a href={fr.links.cv}>CV (PDF)</a></li>
            </ul></div>
          </div>
        </div>
        <SkillCloud />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bar">
      <div className="wrap">
        <div className="socials">
          <a href={fr.links.linkedin} aria-label="LinkedIn">in</a>
          <a href={fr.links.github} aria-label="GitHub"><Icon name="github" style={{ width: 18, height: 18, fill: "currentColor" }} /></a>
        </div>
        <span>{fr.footer.copyright}</span>
        <span>{fr.footer.place}</span>
      </div>
    </footer>
  );
}
