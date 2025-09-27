import React from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Projects from "../components/Projects.jsx";
import Clients from "../components/Clients.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      <Header />
      <Hero />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <About />
        <Services />
        <Projects />
        <Clients />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
