import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { fr } from "@/content/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Sections";
import "./globals.css";

// Polices auto-hébergées (aucun appel à Google Fonts : plus rapide et conforme RGPD)
const montserrat = localFont({
  src: [
    { path: "./fonts/montserrat-latin-wght-normal.woff2", style: "normal" },
    { path: "./fonts/montserrat-latin-wght-italic.woff2", style: "italic" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

const dmSans = localFont({
  src: [
    { path: "./fonts/dm-sans-latin-wght-normal.woff2", style: "normal" },
    { path: "./fonts/dm-sans-latin-wght-italic.woff2", style: "italic" },
  ],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eliesanon.vercel.app"),
  title: { default: fr.meta.title, template: "%s — Elie Sanon" },
  description: fr.meta.description,
  alternates: { canonical: "/" },
  authors: [{ name: "Elie Sanon", url: "https://eliesanon.vercel.app" }],
  keywords: ["AI Engineer", "Data Scientist", "LLM", "RAG", "LangGraph", "MLOps", "GCP", "Vertex AI", "ENSAI", "Paris", "Rennes"],
  robots: { index: true, follow: true },
  openGraph: {
    title: fr.meta.title,
    description: fr.meta.description,
    url: "/",
    siteName: "Elie Sanon — AI Engineer",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Elie Sanon — AI Engineer" }],
  },
  twitter: { card: "summary_large_image", title: fr.meta.title, description: fr.meta.description, images: ["/og.png"] },
};

export const viewport: Viewport = { themeColor: "#0A1840" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${dmSans.variable}`}>
      <body>
        <a className="skip" href="#main">Aller au contenu</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
