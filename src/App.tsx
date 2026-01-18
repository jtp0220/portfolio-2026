import "./styles/index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Photography from "./components/Photography";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="bg-secondary text-neutral font-outfit min-h-screen w-full font-normal">
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
