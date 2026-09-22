import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elie Sanon — ML / AI Engineer",
  description: "ML / AI Engineer spécialisé en Machine Learning, Deep Learning, systèmes agentiques et ML Engineering sur GCP.",
  authors: [{ name: "Elie Sanon" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Elie Sanon — ML / AI Engineer",
    description: "Machine Learning, Agentic AI, ML Engineering et recherche appliquée — de l’expérimentation au déploiement.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Elie Sanon — ML / AI Engineer",
    description: "Machine Learning, Agentic AI, ML Engineering et recherche appliquée.",
  },
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="fr"><body>{children}</body></html>;
}
