// Études de cas et travaux de recherche (pages détaillées).
// Les textes viennent des études publiées sur l'ancien site ; Sanity peut toujours surcharger
// l'introduction, la contribution et les tags (voir sanity/lib/content.ts).

import type { IconKey } from "./site";

export type Bar = { label: string; value: string; width: number; highlight?: boolean };

export type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "flow"; steps: string[] }
  | { type: "compare"; items: { label: string; title: string; text: string }[] }
  | { type: "figure"; src: string; alt: string; label: string; caption: string; light?: boolean }
  | { type: "figurePair"; figures: { src: string; alt: string; label: string; caption: string }[] }
  | { type: "chart"; title: string; hint: string; bars: Bar[]; note?: string }
  | { type: "speed"; items: { label: string; value: string; note: string }[] }
  | { type: "scale"; items: string[] }
  | { type: "link"; href: string; label: string };

export type Section = { title: string; blocks: Block[] };

export type Meta = { label: string; value: string; href?: string };

export type CaseStudy = {
  slug: string;
  kind: "experience" | "research";
  index: string;
  eyebrow: string;
  titleTop: string;
  titleAccent: string;
  intro: string;
  tags: { label: string; icon?: IconKey }[];
  badge: { label: string; title: string; sub: string };
  contribution?: string;
  repo?: string;
  metrics?: { label: string; value: string; note: string }[];
  diagram?: { id: string; kicker: string; title: string; accent: string; text: string; outputs?: string[] };
  meta: Meta[];
  sections: Section[];
};

export const experiences: CaseStudy[] = [
  {
    slug: "djc",
    kind: "experience",
    index: "01",
    eyebrow: "01 / Étude de cas · 2026",
    titleTop: "AI Engineer",
    titleAccent: "Diaspora Junior Consulting",
    intro:
      "Système d'aide à la décision sur le marché Forex combinant un moteur technique déterministe et un unique agent LLM d'analyse fondamentale, orchestrés dans un workflow LangGraph industrialisé sur GCP.",
    tags: [
      { label: "Python", icon: "python" }, { label: "LangGraph", icon: "langchain" }, { label: "MCP", icon: "mcp" },
      { label: "Gemini", icon: "gemini" }, { label: "Vertex AI", icon: "gcp" }, { label: "FastAPI", icon: "fastapi" },
      { label: "Cloud Run", icon: "gcp" },
    ],
    badge: { label: "Système", title: "10 paires analysées / heure", sub: "Analyse 100 % automatisée" },
    metrics: [
      { label: "Paires de devises", value: "10", note: "analysées chaque heure" },
      { label: "Automatisation", value: "100 %", note: "des analyses, sans intervention manuelle" },
      { label: "Agent LLM", value: "1", note: "fondamental, + moteur technique déterministe" },
    ],
    contribution:
      "Architecture du workflow hybride · moteur technique · agent fondamental Gemini · intégration MCP · orchestration LangGraph · backtesting · API et déploiement GCP.",
    diagram: {
      id: "djc",
      kicker: "02 / Architecture du système",
      title: "Du signal brut à la ",
      accent: "décision orchestrée",
      text:
        "Deux flux convergent dans LangGraph : une analyse technique déterministe et un unique agent LLM d'analyse fondamentale. MCP standardise l'accès de l'agent aux outils et données macro-financières.",
    },
    meta: [
      { label: "Rôle", value: "AI Engineer" }, { label: "Lieu", value: "Paris" },
      { label: "Année", value: "2026" }, { label: "Focus", value: "IA agentique · MCP" },
    ],
    sections: [
      { title: "Contexte", blocks: [{ type: "p", text: "Conception et industrialisation d'un système d'aide à la décision combinant une analyse technique déterministe et une couche de raisonnement fondamental basée sur un unique agent LLM. L'objectif est d'évaluer l'apport d'un contexte macroéconomique structuré à une stratégie technique de référence." }] },
      { title: "Approche technique", blocks: [{ type: "list", items: [
        "Développement en Python d'un moteur déterministe de détection des structures de marché et de génération de signaux candidats.",
        "Développement d'un unique agent d'analyse fondamentale utilisant Gemini via Vertex AI.",
        "Intégration de MCP (Model Context Protocol) pour standardiser l'accès de l'agent aux outils et sources de données macroéconomiques et financières.",
        "Orchestration avec LangGraph du workflow combinant signal technique et contexte fondamental jusqu'à la décision Trade / No Trade.",
        "Intégration d'un Risk Engine et d'une couche de paper execution afin de conserver un contrôle explicite de la décision et du risque.",
      ] }] },
      { title: "Industrialisation", blocks: [{ type: "list", items: [
        "Exposition du système via une API FastAPI et conteneurisation avec Docker.",
        "Déploiement de l'application sur GCP / Cloud Run et appel managé de Gemini via Vertex AI.",
        "Authentification entre services via l'identité IAM du service Cloud Run, sans clé LLM embarquée dans l'application.",
        "Persistance dans BigQuery des décisions et résultats nécessaires à la traçabilité et à l'évaluation.",
      ] }] },
      { title: "Expérimentation", blocks: [
        { type: "compare", items: [
          { label: "Référence", title: "Déterministe", text: "Signal technique → règles de décision → backtest." },
          { label: "Expérience", title: "Hybride + LLM", text: "Signal technique + contexte fondamental via Gemini/MCP → décision orchestrée → backtest." },
        ] },
        { type: "p", text: "Les deux approches sont comparées par backtesting afin d'isoler l'apport de la couche fondamentale. Aucun résultat chiffré n'est publié ici tant qu'il n'est pas documenté." },
      ] },
      { title: "Rôle de MCP", blocks: [{ type: "p", text: "MCP ne remplace ni Gemini ni LangGraph : Gemini assure le raisonnement de l'agent, LangGraph orchestre le workflow global, et MCP fournit une interface standardisée entre l'agent fondamental et ses outils ou sources de données externes. Cette séparation limite le couplage entre le modèle et les intégrations métier." }] },
      { title: "Question de recherche", blocks: [{ type: "quote", text: "Dans quelle mesure l'ajout d'un agent LLM d'analyse fondamentale, alimenté par des outils macro-financiers via MCP, améliore-t-il la robustesse d'une stratégie technique déterministe ?" }] },
      { title: "Limites et suite", blocks: [{ type: "p", text: "La valeur du système ne repose pas sur la capacité du LLM à décider seul. La décision finale reste encadrée par le workflow, le Risk Engine et le protocole de backtesting. La qualité des données, la reproductibilité des expériences, la traçabilité et l'évaluation restent centrales." }] },
    ],
  },
  {
    slug: "datafab",
    kind: "experience",
    index: "02",
    eyebrow: "02 / Étude de cas · 2025",
    titleTop: "Data / ML Engineer",
    titleAccent: "DATAFAB × Kering",
    intro: "Conception et industrialisation sur GCP d'un pipeline ML de forecasting et de détection d'anomalies e-commerce.",
    tags: [
      { label: "GCP", icon: "gcp" }, { label: "Vertex AI", icon: "gcp" }, { label: "BigQuery", icon: "bigquery" },
      { label: "Cloud Composer", icon: "gcp" }, { label: "dbt" }, { label: "Airbyte", icon: "airbyte" }, { label: "LSTM" },
    ],
    badge: { label: "Résultat", title: "80 % des anomalies trouvées", sub: "Prophet · LSTM · GCP" },
    metrics: [
      { label: "Anomalies", value: "80 %", note: "des anomalies de ventes trouvées" },
      { label: "Volume", value: "Millions", note: "d'enregistrements de ventes traités" },
      { label: "Modèles", value: "2", note: "Prophet et LSTM comparés" },
    ],
    contribution: "Ingestion et transformation · forecasting Prophet / LSTM · détection d'anomalies · automatisation ML · orchestration GCP.",
    diagram: {
      id: "ker",
      kicker: "02 / Plateforme ML",
      title: "De la donnée brute à la ",
      accent: "prédiction industrialisée",
      text: "Une chaîne cloud où ingestion, transformation, modélisation et orchestration sont pensées comme un même système ML.",
      outputs: ["Forecasting", "Détection d'anomalies", "Pipelines automatisés"],
    },
    meta: [
      { label: "Rôle", value: "Data / ML Engineer" }, { label: "Lieu", value: "Paris" },
      { label: "Année", value: "2025" }, { label: "Focus", value: "Plateforme ML" },
    ],
    sections: [
      { title: "Contexte", blocks: [{ type: "p", text: "Construction d'une chaîne ML cloud pour exploiter les données e-commerce, produire des prévisions et détecter automatiquement des comportements anormaux." }] },
      { title: "Data Engineering", blocks: [{ type: "list", items: ["Ingestion des données avec Airbyte.", "Transformation et modélisation SQL avec dbt.", "Centralisation des données analytiques dans BigQuery."] }] },
      { title: "Machine Learning", blocks: [{ type: "list", items: ["Modèles de forecasting Prophet et LSTM.", "Détection d'anomalies sur les séries e-commerce.", "Automatisation des étapes d'entraînement et de prédiction."] }] },
      { title: "Industrialisation", blocks: [{ type: "p", text: "Déploiement des composants ML avec Vertex AI et orchestration des traitements via Cloud Composer, avec BigQuery comme composant central de la plateforme data." }] },
      { title: "Lecture ML Engineering", blocks: [{ type: "p", text: "Le projet illustre une approche où le modèle n'est qu'un composant d'un système plus large : qualité des données, transformations reproductibles, orchestration et exécution cloud conditionnent aussi la valeur du ML." }] },
    ],
  },
  {
    slug: "ecam",
    kind: "experience",
    index: "03",
    eyebrow: "03 / Étude de cas · 2024",
    titleTop: "Data Scientist",
    titleAccent: "ECAM Rennes",
    intro: "Computer Vision pour la reconnaissance automatique de feuilles de parties d'échecs manuscrites.",
    tags: [{ label: "Python", icon: "python" }, { label: "OpenCV", icon: "opencv" }, { label: "TensorFlow/Keras" }, { label: "CNN" }],
    badge: { label: "Résultat", title: "90 % de taux de détection", sub: "CNN · 30 000 images" },
    metrics: [
      { label: "Détection", value: "90 %", note: "taux de détection du modèle" },
      { label: "Dataset", value: "30 000", note: "images dans le jeu de données" },
      { label: "Modèle", value: "CNN", note: "TensorFlow/Keras + post-traitement" },
    ],
    contribution: "Prétraitement OpenCV · segmentation · dataset de 30 000 images · CNN TensorFlow/Keras · évaluation · post-traitement de la transcription.",
    diagram: {
      id: "ecam",
      kicker: "02 / Pipeline de vision",
      title: "Du document manuscrit à la ",
      accent: "transcription exploitable",
      text: "Le pipeline combine traitement d'image classique et Deep Learning pour isoler l'information manuscrite puis la reconnaître.",
      outputs: ["Dataset : 30 000 images", "Entraîner · évaluer · post-traiter"],
    },
    meta: [
      { label: "Rôle", value: "Data Scientist" }, { label: "Lieu", value: "Rennes" },
      { label: "Année", value: "2024" }, { label: "Focus", value: "Computer Vision" },
    ],
    sections: [
      { title: "Problématique", blocks: [{ type: "p", text: "Transformer des feuilles manuscrites de parties d'échecs en données exploitables automatiquement à partir d'images." }] },
      { title: "Données", blocks: [{ type: "p", text: "Constitution d'un jeu de données de 30 000 images de caractères manuscrits pour l'apprentissage et l'évaluation du modèle." }] },
      { title: "Prétraitement", blocks: [{ type: "p", text: "Utilisation d'OpenCV pour préparer les images et segmenter les zones utiles avant leur passage dans le modèle de reconnaissance." }] },
      { title: "Deep Learning", blocks: [{ type: "list", items: ["Entraînement d'un CNN avec TensorFlow/Keras pour la reconnaissance de caractères.", "Évaluation des performances du modèle.", "Post-traitement pour améliorer la qualité de la transcription."] }] },
      { title: "Perspective", blocks: [{ type: "p", text: "Ce projet relie vision par ordinateur classique et Deep Learning dans une chaîne complète, depuis le document brut jusqu'à une sortie structurée." }] },
    ],
  },
  {
    slug: "muraz",
    kind: "experience",
    index: "04",
    eyebrow: "04 / Étude de cas · 2021",
    titleTop: "Stagiaire biostatisticien",
    titleAccent: "Centre Muraz",
    intro:
      "Étude de l'impact de la COVID-19 sur les services de santé au Burkina Faso et appui à des projets de recherche sanitaire, de juin à décembre 2021.",
    tags: [{ label: "R" }, { label: "DHIS2" }, { label: "KoboToolbox" }, { label: "Cartographie" }, { label: "Biostatistique" }],
    badge: { label: "Santé publique", title: "Impact de la COVID-19", sub: "Données DHIS2 · 2021" },
    contribution:
      "Étude statistique de la fréquentation des services de santé · indicateurs sanitaires · comparaison avant / après pandémie · cartographie régionale · questionnaire KoboToolbox.",
    diagram: {
      id: "muraz",
      kicker: "02 / Démarche",
      title: "Des données de routine aux ",
      accent: "constats régionaux",
      text:
        "Les données de consultations et d'hospitalisations issues de DHIS2 deviennent des indicateurs comparables avant et après la pandémie, puis une lecture géographique des écarts, discutée avec les médecins.",
      outputs: ["Indicateurs sanitaires", "Comparaison avant / après", "Cartes des disparités"],
    },
    meta: [
      { label: "Rôle", value: "Stagiaire biostatisticien" }, { label: "Lieu", value: "Burkina Faso" },
      { label: "Période", value: "Juin – décembre 2021" }, { label: "Focus", value: "Santé publique" },
    ],
    sections: [
      { title: "Contexte", blocks: [{ type: "p", text: "La pandémie de COVID-19 a pu modifier le recours aux soins. L'étude cherchait à mesurer son impact sur la fréquentation des services de santé, en parallèle d'un appui à d'autres projets de recherche sanitaire du Centre Muraz." }] },
      { title: "Données", blocks: [{ type: "p", text: "Les analyses reposent sur les données de consultations et d'hospitalisations issues de DHIS2, le système d'information sanitaire utilisé pour le suivi des activités des formations sanitaires." }] },
      { title: "Analyses", blocks: [{ type: "list", items: [
        "Production et analyse d'indicateurs sanitaires de fréquentation.",
        "Comparaison des évolutions avant et après le début de la pandémie.",
        "Cartographie des disparités régionales.",
      ] }] },
      { title: "Enquête", blocks: [{ type: "p", text: "Contribution à la conception d'un questionnaire d'enquête sur l'utilisation des méthodes contraceptives par les étudiants, avec KoboToolbox." }] },
      { title: "Collaboration", blocks: [{ type: "p", text: "Travail avec des médecins pour définir les analyses pertinentes et présenter les résultats, en traduisant les questions de santé publique en indicateurs mesurables." }] },
    ],
  },
];

export const researchIndex = {
  eyebrow: "Recherche · travaux académiques",
  titleTop: "Des hypothèses aux",
  titleAccent: "résultats mesurés",
  intro:
    "Des travaux académiques menés à l'ENSAI autour du Deep Learning, des séries temporelles et du calcul statistique. Chaque étude est présentée par sa question, sa méthode, son protocole expérimental, ses résultats et ses limites.",
  axes: ["Efficient ML", "Statistical Learning", "Deep Learning", "Computer Vision", "Time Series", "Reliable AI"],
};

export const research: (CaseStudy & { label: string; question: string })[] = [
  {
    slug: "image-denoising-transformers",
    kind: "research",
    index: "01",
    label: "Deep Learning · Computer Vision",
    question: "Peut-on débruiter des images sous bruit Poisson-Gaussien avec un modèle Transformer sans disposer de références propres ?",
    eyebrow: "Recherche 01 · Deep Learning / Computer Vision",
    titleTop: "Weakly-Supervised Image",
    titleAccent: "Denoising with Transformers",
    intro:
      "Étude d'une architecture de débruitage hybride CNN / Swin Transformer et de son intégration dans Noise2VST pour le bruit Poisson-Gaussien lorsque les images propres de référence ne sont pas disponibles.",
    tags: [{ label: "SCUNet2" }, { label: "Swin Transformer" }, { label: "Noise2VST" }, { label: "Self-Supervised Learning" }],
    badge: { label: "Benchmark", title: "Set12", sub: "Poisson-Gaussien · GAT" },
    repo: "https://github.com/esanonpro/transformer-image-denoising",
    metrics: [
      { label: "Question", value: "Débruitage Transformer", note: "sans images propres" },
      { label: "Poisson-Gaussien · GAT", value: "29,27 dB", note: "SCUNet2" },
      { label: "Référence · GAT", value: "29,25 dB", note: "DRUNet" },
      { label: "Dataset", value: "Set12", note: "benchmark expérimental" },
    ],
    meta: [
      { label: "Institution", value: "ENSAI" }, { label: "Année", value: "2023 — 2024" },
      { label: "Focus", value: "Restauration d'image" },
      { label: "Source", value: "GitHub", href: "https://github.com/esanonpro/transformer-image-denoising" },
    ],
    sections: [
      { title: "Question de recherche", blocks: [{ type: "quote", text: "Une noise-level map peut-elle rendre un débruiteur hybride CNN / Transformer plus adapté au framework Noise2VST et au bruit Poisson-Gaussien ?" }] },
      { title: "Approche", blocks: [
        { type: "p", text: "Le travail propose SCUNet2, une évolution de SCUNet combinant l'architecture CNN / Swin Transformer avec une noise-level map, puis l'intègre à Noise2VST." },
        { type: "flow", steps: ["Image bruitée", "VST / GAT", "SCUNet2", "Transformée inverse", "Image débruitée"] },
        { type: "figure", src: "/research/denoising/scunet2-archi.png", alt: "Architecture SCUNet2 combinant noise-level map, convolutions et blocs Swin Transformer", label: "Fig. 01", caption: "Architecture SCUNet2 : le modèle enrichit l'entrée avec une noise-level map et combine convolutions, blocs Swin Transformer, connexions résiduelles et structure encodeur-décodeur.", light: true },
      ] },
      { title: "Résultats expérimentaux", blocks: [
        { type: "p", text: "Les résultats sont contrastés : sur le bruit gaussien classique, SCUNet reste devant SCUNet2 sur Set12 (31,12 contre 30,90 dB à σ = 25). Sur le bruit Poisson-Gaussien avec GAT, SCUNet2 atteint 29,27 dB, contre 29,25 pour DRUNet et 27,49 pour SCUNet." },
        { type: "figure", src: "/research/denoising/denoising-example.png", alt: "Comparaison entre image propre, image bruitée par un bruit de Poisson et image débruitée", label: "Fig. 02", caption: "Exemple qualitatif de restauration : l'image bruitée est mesurée à 20,51 dB et l'image débruitée à 31,15 dB sur cet exemple." },
        { type: "chart", title: "Set12 · PSNR (dB)", hint: "Plus haut = meilleur ↑", bars: [
          { label: "DRUNet + GAT", value: "29,25", width: 99.93 },
          { label: "SCUNet + GAT", value: "27,49", width: 93.92 },
          { label: "SCUNet2 + GAT", value: "29,27", width: 100, highlight: true },
        ], note: "Poisson-Gaussien avec GAT : l'écart SCUNet2 / DRUNet est de 0,02 dB, un gain très faible qui ne permet pas de conclure à une supériorité générale." },
        { type: "chart", title: "Gaussien · σ = 25", hint: "Set12", bars: [
          { label: "DRUNet", value: "30,94", width: 99.42 },
          { label: "SCUNet", value: "31,12", width: 100, highlight: true },
          { label: "SCUNet2", value: "30,90", width: 99.29 },
        ] },
      ] },
      { title: "Limites et perspectives", blocks: [
        { type: "p", text: "L'optimisation par image reste coûteuse. Les gains observés restent modestes et dépendent du régime de bruit ; le travail ouvre donc plutôt une piste sur l'efficacité et l'adaptation du pipeline qu'une conclusion générale de supériorité." },
        { type: "link", href: "https://github.com/esanonpro/transformer-image-denoising", label: "Méthode et résultats sur GitHub" },
      ] },
    ],
  },
  {
    slug: "fast-garch-calibration",
    kind: "research",
    index: "02",
    label: "Statistical Learning · Time Series",
    question: "Peut-on accélérer l'estimation des modèles GARCH tout en conservant des propriétés statistiques proches du QML ?",
    eyebrow: "Recherche 02 · Statistique computationnelle / séries temporelles",
    titleTop: "Fast Calibration of",
    titleAccent: "GARCH Models",
    intro:
      "Adaptation de l'estimateur one-step de Le Cam aux modèles GARCH afin de réduire le coût de l'estimation tout en étudiant la consistance, la normalité asymptotique et les performances en simulation.",
    tags: [{ label: "GARCH" }, { label: "One-step Estimator" }, { label: "QML" }, { label: "Monte Carlo" }, { label: "Time Series" }],
    badge: { label: "Gain mesuré", title: "≈ 19,7× plus rapide", sub: "OS δ = 0,7 · n = 70 000" },
    repo: "https://github.com/esanonpro/fast-garch-calibration",
    metrics: [
      { label: "Monte Carlo", value: "2 000", note: "réplications par taille" },
      { label: "Taille d'échantillon", value: "20k → 70k", note: "observations" },
      { label: "n = 70k · QML", value: "2 422 s", note: "temps de calcul rapporté" },
      { label: "n = 70k · OS δ = 0,7", value: "123 s", note: "temps de calcul rapporté" },
    ],
    meta: [
      { label: "Institution", value: "ENSAI" }, { label: "Année", value: "2023 — 2024" },
      { label: "Application", value: "S&P 500 · 1950–2019" },
      { label: "Source", value: "GitHub", href: "https://github.com/esanonpro/fast-garch-calibration" },
    ],
    sections: [
      { title: "Question de recherche", blocks: [{ type: "quote", text: "Peut-on accélérer l'estimation des modèles GARCH sans perdre les propriétés statistiques essentielles du quasi-maximum de vraisemblance ?" }] },
      { title: "Travail théorique", blocks: [
        { type: "p", text: "L'étude adapte la procédure one-step aux GARCH(p,q) et étudie, sous les hypothèses du rapport, sa consistance et sa normalité asymptotique." },
        { type: "flow", steps: ["QML initial sur une fraction δ", "Correction score / hessienne", "Estimateur one-step"] },
      ] },
      { title: "Protocole Monte Carlo", blocks: [
        { type: "p", text: "Validation sur un GARCH(1,1), avec 2 000 réplications pour n = 20k, 30k, 40k, 50k, 60k et 70k. Les expériences comparent QMV, OS(δ = 0,7) et OS(δ = 0,9) sur les distributions estimées, le MSE et le temps de calcul." },
        { type: "scale", items: ["20k", "30k", "40k", "50k", "60k", "70k"] },
        { type: "figure", src: "/research/garch/monte-carlo-os09.png", alt: "Distributions empiriques Monte Carlo de l'estimateur one-step delta 0,9 pour plusieurs tailles d'échantillon", label: "Fig. 01", caption: "Distribution empirique de ω pour l'estimateur one-step avec δ = 0,9, sur 2 000 simulations et des tailles d'échantillon de 20 000 à 70 000 observations.", light: true },
      ] },
      { title: "Compromis calcul / précision", blocks: [
        { type: "p", text: "À n = 70 000, les temps rapportés sont 2 422 s pour QMV, 772 s pour OS(δ = 0,9) et 123 s pour OS(δ = 0,7). Le MSE du one-step est légèrement supérieur au QMV et augmente lorsque δ diminue." },
        { type: "figure", src: "/research/garch/compute-time.png", alt: "Temps de calcul des méthodes QMV et one-step selon la taille d'échantillon", label: "Fig. 02", caption: "Évolution du temps de calcul selon la taille d'échantillon. L'écart entre QMV et les variantes one-step augmente nettement lorsque n croît.", light: true },
        { type: "chart", title: "Temps de calcul · n = 70 000", hint: "Plus bas = meilleur ↓", bars: [
          { label: "QML", value: "2 422 s", width: 100 },
          { label: "OS · δ = 0,9", value: "772 s", width: 31.87 },
          { label: "OS · δ = 0,7", value: "123 s", width: 5.08, highlight: true },
        ] },
        { type: "speed", items: [
          { label: "OS · δ = 0,9", value: "≈ 3,1×", note: "plus rapide que QML" },
          { label: "OS · δ = 0,7", value: "≈ 19,7×", note: "plus rapide que QML à n = 70k" },
        ] },
        { type: "p", text: "Le gain de calcul s'accompagne d'un compromis statistique : le rapport observe un MSE légèrement supérieur pour le one-step, davantage lorsque δ diminue." },
      ] },
      { title: "Application réelle", blocks: [
        { type: "p", text: "La méthode est appliquée aux rendements du S&P 500 de 1950 à 2019. Un GARCH(2,2) est retenu, puis une estimation rolling compare les prédictions one-step et QMV." },
        { type: "figurePair", figures: [
          { src: "/research/garch/sp500-one-step.png", alt: "Prédiction de la variabilité du S&P 500 par la méthode one-step", label: "Fig. 03A", caption: "Prédiction de la variabilité : estimateur one-step." },
          { src: "/research/garch/sp500-qml.png", alt: "Prédiction de la variabilité du S&P 500 par quasi-maximum de vraisemblance", label: "Fig. 03B", caption: "Prédiction de la variabilité : QMV." },
        ] },
        { type: "p", text: "La proximité visuelle des deux prédictions illustre l'intérêt du compromis étudié : réduire le coût de calcul tout en conservant une dynamique de variabilité comparable sur cette application." },
      ] },
      { title: "Limites", blocks: [
        { type: "p", text: "Le rapport souligne le besoin de grands échantillons pour atteindre les propriétés asymptotiques et l'usage d'hypothèses simplificatrices dans certaines démonstrations." },
        { type: "link", href: "https://github.com/esanonpro/fast-garch-calibration", label: "Méthode et résultats sur GitHub" },
      ] },
    ],
  },
];
