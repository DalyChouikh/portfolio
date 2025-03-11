import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Hobbies from "./components/sections/Hobbies";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";
import Starfield from "./components/ui/starfield";
import { Toaster } from "./components/ui/toaster";

function App() {
  // Initialize ScrollReveal for all sections
  useScrollReveal();

  return (
    <div className="w-full relative font-poppins overflow-x-hidden">
      <Starfield />
      <Header />
      <main className="px-[4vw] sm:px-[5vw] md:px-[8vw] lg:px-[10vw]">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
