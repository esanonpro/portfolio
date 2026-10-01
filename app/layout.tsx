import "./tokens.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
const inter=Inter({subsets:["latin"],variable:"--inter",display:"swap"});
const mono=DM_Mono({weight:["300","400","500"],subsets:["latin"],variable:"--dm-mono",display:"swap"});
export const metadata:Metadata={metadataBase:new URL("https://eliesanon.vercel.app"),title:{default:"Elie Sanon — ML / AI Engineer",template:"%s — Elie Sanon"},description:"ML / AI Engineer : Machine Learning, GenAI, MLOps et recherche appliquée, de l’expérimentation au déploiement.",authors:[{name:"Elie Sanon"}],robots:{index:true,follow:true},alternates:{canonical:"/",languages:{"fr-FR":"/","en":"/en"}},openGraph:{title:"Elie Sanon — ML / AI Engineer",description:"Machine Learning, GenAI, MLOps et recherche appliquée.",type:"website",locale:"fr_FR",url:"/"},twitter:{card:"summary",title:"Elie Sanon — ML / AI Engineer",description:"Machine Learning, GenAI, MLOps et recherche appliquée."}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr" className={`${inter.variable} ${mono.variable}`}><body>{children}</body></html>}