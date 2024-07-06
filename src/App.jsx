import { useState, useEffect } from "react";
import About from "./components/About";
import Certificate from "./components/Certificates";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Loading from "./UI/Loading";
import { Section } from "./components/Section";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Section id="about" className="-mt-20">
            <About />
          </Section>
          <Section id="projects" className="-mt-32 md:-mt-20">
            <Projects />
          </Section>
          <Section id="experiences">
            <Experience />
          </Section>
          <Section id="certifications" className="-mt-20">
            <Certificate />
          </Section>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
