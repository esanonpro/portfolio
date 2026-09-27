"use client";

import { useState } from "react";
import { Button, Card, Flex, Heading, Stack, Text } from "@sanity/ui";
import { useClient } from "sanity";

const documents: Array<Record<string, unknown> & { _id: string; _type: string }> = [
  {_id:"siteSettings",_type:"siteSettings",name:"Elie Sanon",headline:"ML / AI Engineer",heroLine:"Research to production.",heroDescription:"Je conçois des systèmes Machine Learning et GenAI de bout en bout — de l’expérimentation à une architecture robuste, mesurable et déployable.",about:"Ingénieur Data Science diplômé de l’ENSAI, je travaille sur des problématiques ML/AI où la qualité du modèle ne suffit pas : architecture, reproductibilité, évaluation et déploiement comptent tout autant. Mon parcours couvre le Computer Vision, le forecasting, les pipelines ML cloud et les systèmes agentiques.",email:"eliegislainsanon@gmail.com",githubUrl:"https://github.com/esanonpro",linkedinUrl:"https://linkedin.com/in/elie-gislain-sanon"},
  {_id:"experience-djc",_type:"experience",order:1,role:"AI Engineer",company:"Diaspora Junior Consulting",location:"Paris",period:"2026",slug:{_type:"slug",current:"djc"},summary:"Système agentique d’aide à la décision sur le marché Forex.",category:"Agentic AI",stack:["Python","LangGraph","LLM","FastAPI","Docker","Cloud Run"],highlights:["Analyse technique et génération de signaux","Agent d’analyse fondamentale macroéconomique","Workflow de décision, risque et exécution simulée","Backtesting déterministe vs agentique"],contribution:"Architecture du workflow agentique · analyse technique · agent fondamental · orchestration LangGraph · backtesting · API & déploiement.",published:true},
  {_id:"experience-datafab",_type:"experience",order:2,role:"Data / ML Engineer",company:"DATAFAB × Kering",location:"Paris",period:"2025",slug:{_type:"slug",current:"datafab"},summary:"Pipeline ML sur GCP pour le forecasting et la détection d’anomalies e-commerce.",category:"ML Platform",stack:["GCP","Vertex AI","BigQuery","dbt","Airbyte","LSTM"],highlights:["Pipelines de collecte et transformation","Forecasting Prophet / LSTM","Automatisation entraînement et prédiction","Orchestration Vertex AI / Cloud Composer"],contribution:"Ingestion & transformation · forecasting Prophet / LSTM · détection d’anomalies · automatisation ML · orchestration GCP.",published:true},
  {_id:"experience-ecam",_type:"experience",order:3,role:"Data Scientist",company:"ECAM",location:"Rennes",period:"2024",slug:{_type:"slug",current:"ecam"},summary:"Computer Vision pour la reconnaissance de feuilles de parties d’échecs manuscrites.",category:"Computer Vision",stack:["Python","OpenCV","ResNet","Deep Learning"],highlights:["Traitement et segmentation d’images","Dataset de plus de 500 images","Fine-tuning d’un ResNet","Pipeline de retranscription automatisée"],contribution:"Prétraitement OpenCV · segmentation · préparation du dataset · fine-tuning ResNet · évaluation · pipeline de transcription.",published:true},
  {_id:"research-denoising",_type:"researchProject",order:1,title:"Weakly-Supervised Image Denoising with Transformers",slug:{_type:"slug",current:"image-denoising-transformers"},label:"Deep Learning · Computer Vision",question:"Peut-on débruiter des images sous bruit Poisson-Gaussien avec un modèle Transformer sans disposer de références propres ?",summary:"Débruitage d’images par Transformers avec SCUNet2 et Noise2VST, étudié dans un cadre weakly/self-supervised.",tags:["SCUNet2","Swin Transformer","Noise2VST","Self-Supervised Learning"],githubUrl:"https://github.com/esanonpro/transformer-image-denoising",year:"2023–2024",institution:"ENSAI",published:true},
  {_id:"research-garch",_type:"researchProject",order:2,title:"Fast Calibration of GARCH Models",slug:{_type:"slug",current:"fast-garch-calibration"},label:"Statistical Learning · Time Series",question:"Peut-on accélérer l’estimation des modèles GARCH tout en conservant des propriétés statistiques proches du QML ?",summary:"Application d’un estimateur one-step de Le Cam aux modèles GARCH, avec étude Monte Carlo du compromis entre coût de calcul et précision statistique.",tags:["GARCH","One-step Estimator","Monte Carlo","Computational Statistics"],githubUrl:"https://github.com/esanonpro/fast-garch-calibration",year:"2023–2024",institution:"ENSAI",published:true},
  {_id:"education-ensai",_type:"education",order:1,period:"2022 — 2025",school:"ENSAI",location:"Rennes",degree:"Diplôme d’ingénieur",description:"Spécialisation Data Science & Ingénierie des données. Cursus combinant statistique, mathématiques, informatique et méthodes quantitatives, puis spécialisation orientée Big Data, architecture des systèmes et traitement de grands volumes de données.",tags:["Data Science","Machine Learning","Big Data","Data Engineering"]},
  {_id:"education-nazi-boni",_type:"education",order:2,period:"2018 — 2021",school:"Université Nazi Boni",location:"Bobo-Dioulasso, Burkina Faso",degree:"Licence Statistiques & Informatique",description:"Socle académique en statistique et informatique, à l’origine de mon parcours en science des données et ingénierie ML.",tags:["Statistiques","Informatique"]}
];

export function PortfolioImporter(){
  const client=useClient({apiVersion:"2026-09-01"});
  const [state,setState]=useState<"idle"|"running"|"done"|"error">("idle");
  const [message,setMessage]=useState("");
  async function run(){
    setState("running"); setMessage("");
    try{
      let tx=client.transaction();
      documents.forEach(doc=>{tx=tx.createOrReplace(doc)});
      await tx.commit();
      setState("done"); setMessage("8 documents importés. Tu peux maintenant les modifier dans les rubriques du Studio.");
    }catch(e){setState("error");setMessage(e instanceof Error?e.message:"Erreur pendant l’import.");}
  }
  return <Card padding={5} sizing="border"><Stack space={5}>
    <Heading size={2}>Importer le contenu actuel</Heading>
    <Text muted>Migration ponctuelle du contenu public déjà présent sur le portfolio vers Sanity. L’opération crée ou remplace uniquement les 8 documents identifiés du portfolio.</Text>
    <Flex gap={3} align="center"><Button text={state==="running"?"Import en cours…":"Importer les 8 documents"} tone="primary" disabled={state==="running"} onClick={run}/></Flex>
    {message&&<Card padding={3} radius={2} tone={state==="error"?"critical":"positive"}><Text>{message}</Text></Card>}
  </Stack></Card>;
}
