import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elie Sanon — AI Engineer | Applied AI & Agentic Systems",
  description: "AI Engineer spécialisé en Applied AI, systèmes agentiques, RAG et automatisation — du problème concret au système fiable et déployable.",
  authors: [{ name: "Elie Sanon" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Elie Sanon — AI Engineer | Applied AI & Agentic Systems",
    description: "Applied AI, Agentic Systems, RAG et AI Automation — conception, évaluation et mise en production.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Elie Sanon — AI Engineer | Applied AI & Agentic Systems",
    description: "Applied AI, Agentic Systems, RAG et AI Automation.",
  },
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="fr"><body>{children}</body></html>;
}
