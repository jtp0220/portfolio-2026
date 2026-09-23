import { useEffect } from "react";

import "@/styles/index.css";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Resume from "@/components/home/Resume";
import Photography from "@/components/home/Photography";
import Contact from "@/components/home/Contact";

const seoStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jeremy Tran Perez",
  jobTitle: "Software Engineer",
  description: "Software engineer, photographer, and CS graduate building thoughtful digital experiences.",
  url: "https://jeremytranperez.com",
  sameAs: ["https://linkedin.com/in/jeremytranperez", "https://github.com/jtp0220", "https://instagram.com/jeremytranperez"],
  knowsAbout: ["React", "TypeScript", "Web Development", "Photography", "Computer Science"],
};

export default function App() {
  useEffect(() => {
    document.title = "Jeremy Tran Perez | Software Engineer & Photographer";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Jeremy Tran Perez is a software engineer, CS graduate, and multidisciplinary creative focused on web development, photography, and product design.");
    }

    const existingScript = document.getElementById("seo-structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = "seo-structured-data";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(seoStructuredData);
    document.head.appendChild(script);
  }, []);

  return (
    <div className="site-shell min-h-screen w-full font-normal">
      <Header />
      <Hero />
      <main>
        <About />
        <Resume />
        <Projects />
        <Photography />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
