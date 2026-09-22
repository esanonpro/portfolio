const experiences = [
  {period:"2026",role:"AI Engineer",company:"Diaspora Junior Consulting · Paris",text:"Conception et industrialisation d’un système agentique d’aide à la décision sur le marché Forex.",tags:["Python","LangGraph","LLM","FastAPI","Docker","Cloud Run"],details:["Analyse technique : structures de marché et génération de signaux.","Agent d’analyse fondamentale sur données macroéconomiques.","Workflow LangGraph : décision, risque et exécution simulée.","Backtesting d’approches déterministe et agentique."]},
  {period:"2025",role:"Data / ML Engineer",company:"DATAFAB · Client Kering · Paris",text:"Pipeline ML sur GCP pour le forecasting et la détection d’anomalies e-commerce.",tags:["GCP","Vertex AI","BigQuery","dbt","Airbyte","LSTM"],details:["Pipelines de collecte et transformation de données.","Modèles Prophet / LSTM et détection d’anomalies.","Automatisation entraînement, prédiction et traitement.","Déploiement Vertex AI et orchestration Cloud Composer."]},
  {period:"2024",role:"Data Scientist",company:"ECAM · Rennes",text:"Computer Vision pour la reconnaissance automatique de feuilles de parties d’échecs manuscrites.",tags:["Python","OpenCV","ResNet","Deep Learning"],details:["Pipeline de traitement et segmentation d’images.","Dataset de plus de 500 images.","Entraînement et fine-tuning ResNet.","Évaluation et pipeline de retranscription automatisée."]}
];

export default function Home(){
 return <main>
  <nav><a className="brand" href="#">ES<span>.</span></a><div className="navlinks"><a href="#experience">Expériences</a><a href="#research">Recherche</a><a href="#about">À propos</a><a href="#contact">Contact</a></div></nav>
  <section className="hero">
    <div className="eyebrow"><i/> ML / AI ENGINEER</div>
    <h1>Je construis des systèmes<br/><em>intelligents</em>, de la recherche<br/>à la production.</h1>
    <p className="lead">Machine Learning, systèmes agentiques et MLOps — avec une approche qui relie expérimentation rigoureuse et ingénierie logicielle.</p>
    <div className="actions"><a className="primary" href="#experience">Explorer mon travail <b>↗</b></a><a className="secondary" href="https://github.com/esanonpro" target="_blank">GitHub ↗</a></div>
    <div className="terminal"><div className="terminalTop"><span>● ● ●</span><small>elie@portfolio ~</small></div><code><b>$</b> whoami<br/><strong>Elie Sanon</strong><br/><span>ML / AI Engineer · France</span><br/><br/><b>$</b> focus --current<br/><span>→ Agentic AI & LLM Systems<br/>→ Machine Learning Engineering<br/>→ Applied AI Research</span><br/><br/><b>$</b> status<br/><mark>● open_to_opportunities</mark></code></div>
  </section>

  <section className="strip">{["Python","LangGraph","GCP","Vertex AI","Docker","FastAPI","TypeScript","Next.js"].map(x=><span key={x}>{x}</span>)}</section>

  <section id="experience" className="section"><header><span>01 / EXPERIENCE</span><h2>Expériences <em>professionnelles.</em></h2><p>Des systèmes ML/AI pensés de bout en bout : données, modélisation, évaluation et mise en production.</p></header>
   <div className="timeline">{experiences.map((e,i)=><article className="xp" key={e.role}><div className="year">{e.period}<small>0{i+1}</small></div><div><p className="company">{e.company}</p><h3>{e.role}</h3><p>{e.text}</p><ul>{e.details.map(d=><li key={d}>{d}</li>)}</ul><div className="tags">{e.tags.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div>
  </section>

  <section id="research" className="section research"><header><span>02 / RESEARCH</span><h2>Ingénierie avec une<br/><em>démarche de recherche.</em></h2></header><div className="researchGrid"><div><p className="kicker">RESEARCH INTERESTS</p><h3>Construire, mesurer, comprendre.</h3><p>Je m’intéresse aux systèmes d’IA capables de passer d’une hypothèse à une expérimentation reproductible, puis à un système robuste en production.</p><div className="chips"><span>Agentic AI</span><span>LLM Systems</span><span>Deep Learning</span><span>Sequential Decision Making</span><span>Reliable ML</span></div></div><div className="coming"><span>ACADEMIC RESEARCH</span><h3>Projets de recherche<br/>à venir.</h3><p>Cette section accueillera mes travaux académiques : question de recherche, méthodologie, expériences, résultats, limites, rapport et code.</p><small>REPOSITORIES → SOON</small></div></div>
  </section>

  <section id="about" className="section about"><header><span>03 / ABOUT</span><h2>À propos.</h2></header><div className="aboutGrid"><h3>ML / AI Engineer diplômé de <em>l’ENSAI.</em></h3><div><p>Je conçois des solutions Machine Learning et GenAI en combinant modélisation, software engineering et cloud. Mon objectif : transformer une idée ou une hypothèse en système mesurable, maintenable et déployable.</p><p>Mon parcours couvre le Computer Vision, le forecasting, les pipelines ML sur GCP et les systèmes agentiques.</p><div className="facts"><span><b>ENSAI</b>Ingénieur Data Science</span><span><b>FR / EN</b>Français · English B2</span></div></div></div>
  </section>

  <footer id="contact"><div><span>04 / CONTACT</span><h2>Construisons quelque chose<br/><em>d’utile.</em></h2></div><div className="footerLinks"><a href="mailto:esanon.pro@gmail.com">esanon.pro@gmail.com ↗</a><a href="https://github.com/esanonpro" target="_blank">GitHub ↗</a></div><small>© 2026 Elie Sanon · Built with Next.js & TypeScript</small></footer>
 </main>
}