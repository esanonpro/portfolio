export type ExperienceContent = {slug:string; period:string; role:string; company:string; location:string; context:string; actions:string[]; result:string; stack:string[]; category:string};
export type ProjectContent = {slug:string; title:string; eyebrow:string; problem:string; dataset:string; architecture:string[]; metrics:string; choices:string[]; limits:string; stack:string[]; githubUrl:string; demoUrl?:string};

export const site = {
  name:"Elie Sanon",
  role:"ML / AI Engineer",
  value:"Je conçois des systèmes ML et GenAI évaluables, reproductibles et déployables, de la donnée à l’API.",
  proof:"ENSAI · GCP · agents LLM · MLOps",
  availability:"Disponible pour de nouvelles opportunités",
  email:"eliegislainsanon@gmail.com",
  linkedin:"https://linkedin.com/in/elie-gislain-sanon",
  github:"https://github.com/esanonpro",
  cv:"/cv_elie_sanon.pdf",
};

export const experiences: ExperienceContent[] = [
 {slug:"djc",period:"2026",role:"AI Engineer",company:"Diaspora Junior Consulting",location:"Paris",context:"Système d’aide à la décision sur le marché Forex combinant analyse technique et contexte macroéconomique.",actions:["Conception du workflow de décision et de l’orchestration LangGraph.","Développement des briques d’analyse technique et fondamentale et de leur interface de décision.","Mise en place du backtesting comparatif, de l’API FastAPI et du déploiement Docker / Cloud Run."],result:"[À COMPLÉTER : métrique de résultat DJC]",stack:["Python","LangGraph","LLM","FastAPI","Docker","Cloud Run"],category:"Agentic AI"},
 {slug:"datafab",period:"2025",role:"Data Scientist",company:"DATAFAB × Kering",location:"Paris",context:"Prévision et détection d’anomalies sur des données e-commerce à grande échelle.",actions:["Structuration des données et transformations avec SQL, BigQuery, dbt et Airbyte.","Conception et comparaison d’approches de forecasting, dont Prophet et LSTM.","Automatisation des étapes d’entraînement et de prédiction sur GCP / Vertex AI."],result:"[À COMPLÉTER : métrique de résultat DATAFAB]",stack:["Python","SQL","BigQuery","dbt","GCP","Vertex AI"],category:"ML Platform"},
 {slug:"ecam",period:"2024",role:"Data Scientist",company:"ECAM",location:"Rennes",context:"Lecture automatique de feuilles de parties d’échecs manuscrites.",actions:["Constitution et préparation d’un dataset final de 30 097 caractères répartis en 27 classes.","Conception du pipeline de segmentation, classification CNN et post-traitement.","Évaluation sur feuilles réelles et ajout d’une validation par coups légaux et distance de Levenshtein."],result:"93 % d’accuracy sur le jeu de test ; post-traitement : 19 % → 82 % de coups reconnus sur une feuille testée.",stack:["Python","Computer Vision","CNN","OpenCV"],category:"Computer Vision"}
];

export const projects: ProjectContent[] = [
 {slug:"fraud-detection-mlops",title:"Fraud Detection MLOps",eyebrow:"MACHINE LEARNING · MLOPS",problem:"Détecter des transactions frauduleuses dans un contexte de fort déséquilibre des classes (< 0,2 % de fraudes), en limitant les faux positifs.",dataset:"Transactions bancaires anonymisées ; variables d’entrée Time, V1–V28 et Amount.",architecture:["Data","Preprocessing","Logistic Regression","MLflow","CI Gate","FastAPI","Docker","Cloud Run"],metrics:"Candidat documenté : Recall 87,37 % · Precision 5,64 % · ROC-AUC 96,57 %. Baseline : Recall 87,37 % · Precision 4,81 % · ROC-AUC 96,15 %.",choices:["Class weights pour le déséquilibre","StandardScaler dans le pipeline d’inférence","MLflow pour le tracking","GitHub Actions pour CI/CD"],limits:"Les performances publiées doivent être validées sur un protocole documenté avant d’être affichées comme résultat portfolio.",stack:["Scikit-learn","MLflow","FastAPI","Docker","GCP"],githubUrl:"https://github.com/esanonpro/fraud-detection-mlops",demoUrl:"https://fraud-detection-api-525661061817.europe-west1.run.app/docs"},
 {slug:"rag-document-assistant",title:"RAG Document Assistant",eyebrow:"GENAI · RAG",problem:"Répondre à des questions sur un corpus scientifique en ancrant les réponses dans les documents et en restituant les sources.",dataset:"Corpus de démonstration composé d’articles scientifiques publics sur la détection d’anomalies ; les documents ENSAI originaux ne sont pas exposés.",architecture:["PDF","PyPDFLoader","Chunks","MiniLM embeddings","FAISS","Retrieval","Mistral-7B","FastAPI"],metrics:"Protocole prévu : retrieval avec Recall@k, Precision@k, MRR et Hit Rate@k ; génération avec faithfulness/groundedness, answer relevance, context relevance et, lorsque pertinent, Exact Match/F1. [À COMPLÉTER : résultats après annotation du jeu d’évaluation]",choices:["FAISS pour la recherche vectorielle","all-MiniLM-L6-v2 pour les embeddings","Mistral-7B via Ollama en local","FastAPI / Swagger pour l’interface"],limits:"Les métriques nécessitent un jeu de questions annoté avec passages/réponses de référence. La qualité dépend du parsing, du chunking, du retrieval, des embeddings et du LLM ; aucune absence d’hallucination n’est affirmée sans mesure.",stack:["LangChain","FAISS","Hugging Face","Mistral-7B","Ollama","FastAPI"],githubUrl:"https://github.com/esanonpro/rag-document-assistant"}
];

export const skills = [
 {group:"ML / DL",items:["Scikit-learn","PyTorch","Computer Vision","Forecasting","Time Series"]},
 {group:"GenAI & agents",items:["LangGraph","RAG","LangChain","LLM","FAISS"]},
 {group:"MLOps & cloud",items:["Docker","MLflow","GitHub Actions","GCP","Cloud Run","Vertex AI"]},
 {group:"Data engineering",items:["Python","SQL","BigQuery","dbt","Airbyte"]},
];
