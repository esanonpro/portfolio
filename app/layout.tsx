import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {title:"Elie Sanon — ML / AI Engineer",description:"ML / AI Engineer — Agentic AI, Machine Learning Engineering and applied AI research.",openGraph:{title:"Elie Sanon — ML / AI Engineer",description:"Building AI systems from research to production.",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}