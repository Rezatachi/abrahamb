
import './globals.css';
import Hero from './components/Hero';
import About from "./components/About";
import Projects from "./components/Projects";
import BuildingNext from "./components/BuildingNext";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <BuildingNext />
      <Contact />
    </main>
  );
}
