import { Contact, Experiences, Hero, Projects, Research } from "@/components/Sections";
import { fr } from "@/content/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Elie Sanon",
  jobTitle: "AI Engineer",
  url: "https://eliesanon.vercel.app",
  email: `mailto:${fr.contact.email}`,
  sameAs: [fr.links.github, fr.links.linkedin],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "ENSAI" },
    { "@type": "CollegeOrUniversity", name: "Université Nazi Boni" },
  ],
  knowsAbout: ["Agents LLM", "RAG", "LangGraph", "MCP", "MLOps", "Google Cloud Platform", "Vertex AI", "Data Engineering", "Biostatistique"],
  address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Hero />
      <Projects />
      <Experiences />
      <Research />
      <Contact />
    </>
  );
}
