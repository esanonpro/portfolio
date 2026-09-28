"use client";
import {useState} from "react";
import {Button,Card,Heading,Stack,Text} from "@sanity/ui";
import {useClient} from "sanity";

const patches=[
{_id:"experience-djc",detailIntro:"Système agentique d’aide à la décision sur le marché Forex, conçu pour confronter une stratégie technique déterministe à une couche de raisonnement fondamental.",sections:[
{number:"01",title:"Contexte",text:"Conception et industrialisation d’un système d’aide à la décision combinant analyse technique, informations macroéconomiques et orchestration agentique."},
{number:"02",title:"Approche technique",items:["Détection des structures de marché et génération de signaux en Python.","Agent d’analyse fondamentale exploitant des données macroéconomiques.","Orchestration du workflow de décision, gestion du risque et exécution simulée avec LangGraph.","API FastAPI, conteneurisation Docker et déploiement Cloud Run."]},
{number:"03",title:"Expérimentation",text:"Les approches déterministe et agentique sont comparées par backtesting. Aucun résultat chiffré n’est publié ici tant qu’il n’est pas documenté."},
{number:"04",title:"Question de recherche",quote:"Dans quelle mesure une couche de raisonnement agentique exploitant des informations macroéconomiques améliore-t-elle la robustesse d’une stratégie technique déterministe ?"},
{number:"05",title:"Limites & suite",text:"La valeur du système ne repose pas uniquement sur la capacité du LLM à produire une décision : elle dépend aussi de la qualité des données, du protocole d’évaluation, de la reproductibilité du backtesting et du contrôle explicite du risque."}]},
{_id:"experience-datafab",detailIntro:"Conception et industrialisation sur GCP d’un pipeline ML de forecasting et de détection d’anomalies e-commerce.",sections:[
{number:"01",title:"Contexte",text:"Construction d’une chaîne ML cloud pour exploiter les données e-commerce, produire des prévisions et détecter automatiquement des comportements anormaux."},
{number:"02",title:"Data Engineering",items:["Ingestion des données avec Airbyte.","Transformation et modélisation SQL avec dbt.","Centralisation des données analytiques dans BigQuery."]},
{number:"03",title:"Machine Learning",items:["Modèles de forecasting Prophet et LSTM.","Détection d’anomalies sur les séries e-commerce.","Automatisation des étapes d’entraînement et de prédiction."]},
{number:"04",title:"Industrialisation",text:"Déploiement des composants ML avec Vertex AI et orchestration des traitements via Cloud Composer, avec BigQuery comme composant central de la plateforme data."},
{number:"05",title:"Lecture ML Engineering",text:"Le projet illustre une approche où le modèle n’est qu’un composant d’un système plus large : qualité des données, transformations reproductibles, orchestration et exécution cloud conditionnent aussi la valeur du ML."}]},
{_id:"experience-ecam",detailIntro:"Computer Vision pour la reconnaissance automatique de feuilles de parties d’échecs manuscrites.",sections:[
{number:"01",title:"Problématique",text:"Transformer des feuilles manuscrites de parties d’échecs en données exploitables automatiquement à partir d’images."},
{number:"02",title:"Données",text:"Constitution et traitement d’un dataset de plus de 500 images pour préparer l’apprentissage et l’évaluation du système."},
{number:"03",title:"Prétraitement",text:"Utilisation d’OpenCV pour préparer les images et segmenter les zones utiles avant leur passage dans le modèle de reconnaissance."},
{number:"04",title:"Deep Learning",items:["Entraînement et fine-tuning d’un ResNet.","Évaluation du modèle sur les données préparées.","Intégration du modèle dans un pipeline de retranscription automatisée."]},
{number:"05",title:"Perspective",text:"Ce projet relie vision par ordinateur classique et Deep Learning dans une chaîne complète, depuis le document brut jusqu’à une sortie structurée."}]},
{_id:"research-denoising",contribution:"Conception et évaluation de SCUNet2, intégration au pipeline Noise2VST et analyse expérimentale des performances.",metrics:[{label:"Poisson-Gaussian · GAT",value:"29.27 dB",note:"SCUNet2"},{label:"Baseline · GAT",value:"29.25 dB",note:"DRUNet"},{label:"Dataset",value:"Set12",note:"experimental benchmark"}],sections:[
{number:"01",title:"Research question",quote:"Une noise-level map peut-elle rendre un débruiteur hybride CNN / Transformer plus adapté au framework Noise2VST et au bruit Poisson-Gaussien ?"},
{number:"02",title:"Approach",text:"Le travail propose SCUNet2, une évolution de SCUNet combinant l’architecture CNN / Swin Transformer avec une noise-level map, puis l’intègre à Noise2VST."},
{number:"03",title:"Experimental evidence",text:"Les résultats sont contrastés : sur le bruit gaussien classique, SCUNet reste devant SCUNet2 sur Set12 (31.12 vs 30.90 dB à σ=25). Sur le bruit Poisson-Gaussien avec GAT, SCUNet2 atteint 29.27 dB, contre 29.25 pour DRUNet et 27.49 pour SCUNet."},
{number:"04",title:"Limits & perspectives",text:"L’optimisation par image reste coûteuse. Les gains observés restent modestes et dépendent du régime de bruit ; le travail ouvre donc plutôt une piste sur l’efficacité et l’adaptation du pipeline qu’une conclusion générale de supériorité."}]},
{_id:"research-garch",contribution:"Adaptation de l’estimateur one-step de Le Cam aux modèles GARCH, étude théorique et validation Monte Carlo.",metrics:[{label:"Monte Carlo",value:"2,000",note:"replications / size"},{label:"Sample size",value:"20k → 70k",note:"observations"},{label:"n=70k · QML",value:"2,422 s",note:"reported compute time"},{label:"n=70k · OS δ=.7",value:"123 s",note:"reported compute time"}],sections:[
{number:"01",title:"Research question",quote:"Peut-on accélérer l’estimation des modèles GARCH sans perdre les propriétés statistiques essentielles du quasi-maximum de vraisemblance ?"},
{number:"02",title:"Theoretical work",text:"L’étude adapte la procédure one-step aux GARCH(p,q) et étudie, sous les hypothèses du rapport, sa consistance et sa normalité asymptotique."},
{number:"03",title:"Monte Carlo protocol",text:"Validation sur un GARCH(1,1), avec 2 000 réplications pour n = 20k, 30k, 40k, 50k, 60k et 70k. Les expériences comparent QMV, OS(δ=.7) et OS(δ=.9) sur les distributions estimées, le MSE et le temps de calcul."},
{number:"04",title:"Compute / accuracy trade-off",text:"À n=70 000, les temps rapportés sont 2 422 s pour QMV, 772 s pour OS(δ=.9) et 123 s pour OS(δ=.7). Le MSE du one-step est légèrement supérieur au QMV et augmente lorsque δ diminue."},
{number:"05",title:"Real-world application",text:"La méthode est appliquée aux rendements du S&P 500 de 1950 à 2019. Un GARCH(2,2) est retenu, puis une estimation rolling compare les prédictions one-step et QMV."},
{number:"06",title:"Limits",text:"Le rapport souligne le besoin de grands échantillons pour atteindre les propriétés asymptotiques et l’usage d’hypothèses simplificatrices dans certaines démonstrations."}]}
];

export function DetailContentMigrator(){
 const client=useClient({apiVersion:"2026-09-01"}); const [msg,setMsg]=useState("");
 async function run(){try{let tx=client.transaction();for(const p of patches){const {_id,...fields}=p;tx=tx.patch(_id,x=>x.set(fields));}await tx.commit();setMsg("Contenu détaillé migré pour 5 études de cas.");}catch(e){setMsg(e instanceof Error?e.message:"Erreur de migration");}}
 return <Card padding={5}><Stack space={5}><Heading size={2}>Migrer les pages détaillées</Heading><Text muted>Copie le contenu déjà publié des 3 expériences et 2 projets de recherche dans leurs champs CMS. Cette action ne crée pas de nouveaux documents.</Text><Button text="Migrer les 5 pages détaillées" tone="primary" onClick={run}/>{msg&&<Text>{msg}</Text>}</Stack></Card>
}
