import Link from "next/link";

const works = [
  {
    href: "/research/image-denoising-transformers",
    index: "01",
    label: "DEEP LEARNING · COMPUTER VISION",
    title: "Weakly-Supervised Image Denoising with Transformers",
    question: "Peut-on débruiter des images sous bruit Poisson-Gaussien avec un modèle Transformer sans disposer de références propres ?",
    tags: ["SCUNet2", "Swin Transformer", "Noise2VST", "Self-Supervised Learning"],
  },
  {
    href: "/research/fast-garch-calibration",
    index: "02",
    label: "STATISTICAL LEARNING · TIME SERIES",
    title: "Fast Calibration of GARCH Models",
    question: "Peut-on accélérer l’estimation des modèles GARCH tout en conservant des propriétés statistiques proches du QML ?",
    tags: ["GARCH", "One-step Estimator", "Monte Carlo", "Computational Statistics"],
  },
];

export default function Research() {
  return (
    <main className="casePage">
      <nav>
        <Link className="brand" href="/">ES<span>.</span></Link>
        <Link className="back" href="/">← Accueil</Link>
      </nav>

      <section className="caseHero researchHero">
        <div className="eyebrow">RESEARCH · ACADEMIC WORK</div>
        <h1>From hypotheses to<br/><em>measured evidence.</em></h1>
        <p>Des travaux académiques menés à l’ENSAI autour du Deep Learning, des séries temporelles et du calcul statistique. Chaque étude est présentée par sa question, sa méthode, son protocole expérimental, ses résultats et ses limites.</p>
      </section>

      <section className="researchPageGrid">
        <div><small>RESEARCH FOCUS</small><h2>Axes de recherche</h2></div>
        <div className="topicList">
          {["Efficient ML","Statistical Learning","Deep Learning","Computer Vision","Time Series","Reliable AI"].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b></div>)}
        </div>
      </section>

      <section className="researchWorks">
        <div className="researchIntro">
          <div><small>SELECTED WORK</small><h2>Travaux académiques.</h2></div>
          <p>Deux projets de recherche appliquée : un travail sur le débruitage d’images par Transformers et une étude de calibration rapide des modèles GARCH.</p>
        </div>
        <div className="researchWorkList">
          {works.map((work) => (
            <Link className="researchWork" href={work.href} key={work.href}>
              <div className="researchWorkTop"><span>{work.index}</span><small>{work.label}</small><b>↗</b></div>
              <h3>{work.title}</h3>
              <p>{work.question}</p>
              <div className="tagRow">{work.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
