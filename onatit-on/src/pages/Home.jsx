import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import ContactPage from "../components/Contactpage";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Clients />
      <ContactPage />
    </>
  );
}
