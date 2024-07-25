import { useState } from "react";
import About from "./components/About";
import Certificate from "./components/Certificates";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Section } from "./components/Section";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const preLoader = document.getElementById("preloader");

  setTimeout(() => {
    preLoader.remove();
    setIsLoading(false);
  }, 1500);

  return (
    <>
      <SpeedInsights />
      {!isLoading && (
        <>
          <header>
            <Navbar />
            <Hero />
          </header>
          <main>
            <Section id="about" className="-mt-20">
              <About />
            </Section>
            <Section id="projects" className="-mt-40 sm:-mt-20">
              <Projects />
            </Section>
            <Section id="experiences" className="-mt-10">
              <Experience />
            </Section>
            <Section id="certifications" className="-mt-20">
              <Certificate />
            </Section>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
