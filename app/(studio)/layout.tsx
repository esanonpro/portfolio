import type { Metadata } from "next";

export const metadata: Metadata = { title: "Studio — Elie Sanon", robots: { index: false, follow: false } };

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
