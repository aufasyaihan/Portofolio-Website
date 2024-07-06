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

// List of images to preload
const imagesToPreload = [import("./assets/images/aufa_removedbg_cropped.png")];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function preloadImages(images) {
      const promises = images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to preload images:", error);
        setIsLoading(false);
      }
    }

    const loadTime = setTimeout(() => {
      preloadImages(imagesToPreload);
    }, 2000);

    return () => {
      clearTimeout(loadTime);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Section id="about">
            <About />
          </Section>
          <Section id="projects">
            <Projects />
          </Section>
          <Section id="experiences">
            <Experience />
          </Section>
          <Section id="certifications">
            <Certificate />
          </Section>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
