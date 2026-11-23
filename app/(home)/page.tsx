import { Nav } from "@/components/Nav";
import { Contact, Experiences, Footer, Hero, Projects, Research } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Aller au contenu</a>
      <Nav />
      <main id="main">
        <Hero />
        <Projects />
        <Experiences />
        <Research />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
