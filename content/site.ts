// Tout le contenu du site est ici : modifier ce fichier suffit pour mettre à jour les textes.
// Structure prête pour une version anglaise (dupliquer `fr` en `en`).

export type IconKey =
  | "python" | "langchain" | "gcp" | "fastapi" | "docker" | "n8n" | "gha" | "railway" | "terraform"
  | "airflow" | "airbyte" | "gemini" | "mlflow" | "github" | "js" | "pytorch" | "opencv" | "hf"
  | "bigquery" | "mcp" | "pandas" | "sklearn";

export const brandColors: Record<IconKey, string> = {
  python: "#3776AB", langchain: "#1C3C3C", gcp: "#4285F4", fastapi: "#009688", docker: "#2496ED",
  n8n: "#EA4B71", gha: "#2088FF", railway: "#0B0D0E", terraform: "#844FBA", airflow: "#017CEE",
  airbyte: "#615EFF", gemini: "#8E75B2", mlflow: "#0194E2", github: "#181717", js: "#C9A800",
  pytorch: "#EE4C2C", opencv: "#5C3EE8", hf: "#E0A800", bigquery: "#669DF6", mcp: "#000000",
  pandas: "#150458", sklearn: "#F7931E",
};

export type Tag = { label: string; icon?: IconKey };

export type Project = {
  id: string;
  kicker: string;
  emoji: string;
  title: string;
  description: string;
  points: { emoji: string; text: string }[];
  tags: Tag[];
  repoUrl: string;
  cover: string;
  diagram: string;
  caption: string;
  mobileFlow: { label: string; highlight?: boolean }[];
  flip?: boolean;
};

export type Experience = {
  company: string;
  role: string;
  place: string;
  year: string;
  emoji: string;
  summary: string;
  detail: string;
  stack: string;
  architecture?: string;
  caseStudy?: string;
};

const CV_URL = "/cv_elie_sanon.pdf";
const GITHUB_URL = "https://github.com/esanonpro";
const LINKEDIN_URL = "https://www.linkedin.com/in/elie-gislain-sanon";

export const fr = {
  meta: {
    title: "Elie Sanon — AI Engineer",
    description:
      "Elie Sanon, AI Engineer diplômé de l'ENSAI : agents LLM, RAG et pipelines data sur GCP, du prototype à la production.",
  },
  links: { cv: CV_URL, github: GITHUB_URL, linkedin: LINKEDIN_URL, research: "/research" },
  nav: [
    { href: "/#projets", label: "Projets" },
    { href: "/#experiences", label: "Expériences" },
    { href: "/#recherche", label: "Recherche & formation" },
  ],
  hero: {
    eyebrow: "AI Engineer · Disponible en France",
    titleStart: "Des systèmes d'IA qui tiennent ",
    titleAccent: "en production",
    lead:
      "Ingénieur diplômé de l'ENSAI. Je conçois des agents LLM et des assistants RAG, avec les pipelines data qui les alimentent, sur GCP, du prototype au déploiement.",
    ticker: ["Agents LLM", "RAG", "MLOps", "Data Engineering", "GCP"],
    method: "Problème → Build → Éval → Ship : chaque projet suit ces quatre étapes.",
    stack: [
      { label: "Python", icon: "python" }, { label: "LangGraph", icon: "langchain" }, { label: "MCP", icon: "mcp" },
      { label: "n8n", icon: "n8n" }, { label: "FastAPI", icon: "fastapi" }, { label: "Docker", icon: "docker" },
      { label: "GCP", icon: "gcp" }, { label: "Gemini", icon: "gemini" },
    ] as Tag[],
  },
  projects: {
    title: "Projets",
    emoji: "🚀",
    intro:
      "Trois projets menés de bout en bout, de la collecte des données au résultat livré. Code public et architecture documentée.",
    items: [
      {
        id: "job-hunter",
        kicker: "Automatisation · Agent LLM",
        emoji: "🤖",
        title: "Job Hunter",
        description:
          "Un agent qui collecte des offres sur plusieurs sources, les filtre, les analyse avec Gemini et envoie une notification avec les plus pertinentes.",
        points: [
          { emoji: "🔎", text: "Collecte multi-sources et déduplication" },
          { emoji: "🧠", text: "Analyse des offres par Gemini" },
          { emoji: "🔔", text: "Notification, gestion des erreurs et exécution planifiée" },
        ],
        tags: [
          { label: "n8n", icon: "n8n" }, { label: "Gemini", icon: "gemini" }, { label: "JavaScript", icon: "js" },
          { label: "GitHub Actions", icon: "gha" }, { label: "Railway", icon: "railway" },
        ],
        repoUrl: "https://github.com/esanonpro/ai-job-hunter-agent",
        cover: "/img/jobhunter.webp",
        diagram: "jh",
        caption: "Pipeline Job Hunter",
        mobileFlow: [
          { label: "Sources multiples" }, { label: "Collecte + déduplication" },
          { label: "Analyse Gemini", highlight: true }, { label: "Notification" },
        ],
      },
      {
        id: "rag-assistant",
        kicker: "NLP · RAG",
        emoji: "📚",
        title: "RAG Document Assistant",
        description:
          "Un assistant qui répond à des questions sur des documents scientifiques en citant les passages utilisés. Les réponses sont évaluées avec RAGAS.",
        points: [
          { emoji: "🗂️", text: "Indexation vectorielle FAISS" },
          { emoji: "🧬", text: "Embeddings Sentence Transformers" },
          { emoji: "📏", text: "API FastAPI et évaluation RAGAS" },
        ],
        tags: [
          { label: "Python", icon: "python" }, { label: "FAISS" }, { label: "Sentence Transformers", icon: "hf" },
          { label: "FastAPI", icon: "fastapi" }, { label: "RAGAS" },
        ],
        repoUrl: "https://github.com/esanonpro/rag-document-assistant",
        cover: "/img/rag.webp",
        diagram: "rag",
        caption: "Pipeline RAG",
        flip: true,
        mobileFlow: [
          { label: "Documents" }, { label: "Chunks + embeddings" }, { label: "Index FAISS", highlight: true },
          { label: "Retrieval" }, { label: "LLM + sources" }, { label: "Évaluation RAGAS", highlight: true },
        ],
      },
      {
        id: "fraud-detection",
        kicker: "MLOps · Classification déséquilibrée",
        emoji: "🛡️",
        title: "Fraud Detection MLOps",
        description:
          "Un système de détection de fraude bancaire de bout en bout : moins de 0,2 % des transactions sont frauduleuses, il faut les repérer sans multiplier les fausses alertes.",
        points: [
          { emoji: "⚖️", text: "Déséquilibre géré par pondération des classes, recall privilégié" },
          { emoji: "📈", text: "Expériences suivies dans MLflow, gate qui bloque tout modèle moins bon" },
          { emoji: "🚀", text: "API FastAPI conteneurisée avec Docker pour Cloud Run" },
        ],
        tags: [
          { label: "Python", icon: "python" }, { label: "scikit-learn", icon: "sklearn" }, { label: "MLflow", icon: "mlflow" },
          { label: "FastAPI", icon: "fastapi" }, { label: "Docker", icon: "docker" }, { label: "Cloud Run", icon: "gcp" },
        ],
        repoUrl: "https://github.com/esanonpro/fraud-detection-mlops",
        cover: "/img/fraud.webp",
        diagram: "fraud",
        caption: "Pipeline MLOps",
        mobileFlow: [
          { label: "Transactions déséquilibrées" }, { label: "Prétraitement" }, { label: "Entraînement + MLflow" },
          { label: "Gate de validation", highlight: true }, { label: "Docker" }, { label: "API sur Cloud Run" },
        ],
      },
    ] as Project[],
  },
  experiences: {
    title: "Expériences",
    emoji: "💼",
    intro:
      "Quatre missions entre 2021 et 2026 : biostatistique en santé, vision par ordinateur, détection d'anomalies et agents IA.",
    items: [
      {
        company: "Diaspora Junior Consulting", role: "AI Engineer", place: "Paris", year: "2026", emoji: "🤖",
        summary: "Système hybride d'aide à la décision sur le marché Forex",
        detail: "Moteur technique déterministe + agent LLM fondamental, orchestrés par LangGraph",
        stack: "LangGraph · MCP · Gemini · FastAPI · Cloud Run · BigQuery", architecture: "djc", caseStudy: "/experience/djc",
      },
      {
        company: "DATAFAB × Kering", role: "Data / ML Engineer", place: "Paris", year: "2025", emoji: "🛍️",
        summary: "Forecasting et détection d'anomalies e-commerce sur GCP",
        detail: "De l'ingestion à l'orchestration des modèles Prophet et LSTM",
        stack: "Airbyte · BigQuery · dbt · Vertex AI · Cloud Composer", architecture: "ker", caseStudy: "/experience/datafab",
      },
      {
        company: "ECAM Louis de Broglie", role: "Data Scientist", place: "Rennes", year: "2024", emoji: "♟️",
        summary: "Lecture automatique de feuilles de parties d'échecs manuscrites",
        detail: "OpenCV, segmentation et ResNet fine-tuné sur 500+ images",
        stack: "Python · OpenCV · ResNet · Deep Learning", architecture: "ecam", caseStudy: "/experience/ecam",
      },
      {
        company: "Centre Muraz", role: "Stagiaire biostatisticien", place: "Burkina Faso", year: "2021", emoji: "🩺",
        summary: "Impact de la COVID-19 sur la fréquentation des services de santé",
        detail: "Indicateurs DHIS2 avant / après pandémie, cartographie régionale, enquête KoboToolbox",
        stack: "R · DHIS2 · KoboToolbox · Cartographie", architecture: "muraz", caseStudy: "/experience/muraz",
      },
    ] as Experience[],
  },
  research: {
    titleStart: "Recherche & ",
    titleAccent: "formation",
    intro: "Une formation d'ingénieur statisticien, appliquée aujourd'hui à l'IA générative.",
    works: [
      { title: "Débruitage d'images par Transformers", meta: "Deep Learning · Computer Vision" },
      { title: "Calibration rapide de modèles GARCH", meta: "Séries temporelles · Économétrie" },
    ],
    education: [
      { title: "Diplôme d'ingénieur, ENSAI", meta: "2022–2025 · Data Science et ingénierie des données" },
      { title: "Licence Statistiques & Informatique", meta: "2018–2021 · Université Nazi Boni, Burkina Faso" },
      { title: "Langues", meta: "Français natif · Anglais B2", emoji: "🌍" },
    ],
  },
  contact: {
    titleStart: "Un poste en IA appliquée ? ",
    titleAccent: "Parlons-en",
    lead: "Je cherche un poste d'AI Engineer ou de Data Scientist en France, en CDI ou en ESN.",
    email: "eliegislainsanon@gmail.com",
    cloud: [
      { label: "LangGraph", icon: "langchain", color: "o", x: 4, y: 58, z: 40, r: 14 },
      { label: "Python", icon: "python", color: "w", x: 15, y: 30, z: -20, r: -6 },
      { label: "RAG", color: "c", x: 13, y: 74, z: 60, r: -10 },
      { label: "FastAPI", icon: "fastapi", color: "i", x: 27, y: 52, z: 10, r: 8 },
      { label: "MCP", icon: "mcp", color: "g", x: 30, y: 14, z: -40, r: -18 },
      { label: "AI Engineer", color: "n", x: 42, y: 36, z: 0, r: 0, big: true },
      { label: "Vertex AI", icon: "gcp", color: "c", x: 56, y: 10, z: 30, r: -32 },
      { label: "GCP", color: "o", x: 60, y: 48, z: 20, r: 0, big: true, size: 120 },
      { label: "Gemini", icon: "gemini", color: "i", x: 72, y: 22, z: -30, r: 20 },
      { label: "dbt", color: "g", x: 74, y: 70, z: 50, r: -8 },
      { label: "Airflow", icon: "airflow", color: "w", x: 85, y: 44, z: -10, r: 24 },
      { label: "n8n", icon: "n8n", color: "c", x: 88, y: 12, z: 70, r: 60 },
    ] as { label: string; icon?: IconKey; color: string; x: number; y: number; z: number; r: number; big?: boolean; size?: number }[],
  },
  footer: { copyright: "© 2026 Elie Sanon", place: "Paris · Rennes" },
};

export type SiteContent = typeof fr;
