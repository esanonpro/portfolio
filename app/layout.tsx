import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elie Sanon — ML / AI Engineer",
  description: "ML / AI Engineer building intelligent systems from research to production.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="fr"><body>{children}</body></html>;
}