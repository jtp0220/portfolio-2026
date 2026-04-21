import "../styles/index.css";
import Header from "../components/core/Header";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import Resume from "../components/home/Resume";
import Photography from "../components/home/Photography";
import Contact from "../components/home/Contact";
import Footer from "../components/core/Footer";

export default function App() {
  return (
    <div className="font-outfit min-h-screen w-full font-normal">
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
