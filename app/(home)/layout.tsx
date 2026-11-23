import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { fr } from "@/content/site";
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
  title: fr.meta.title,
  description: fr.meta.description,
  openGraph: { title: fr.meta.title, description: fr.meta.description, locale: "fr_FR", type: "website" },
};

export const viewport: Viewport = { themeColor: "#0A1840" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
