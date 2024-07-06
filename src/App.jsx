/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import About from "./components/About";
import Certificate from "./components/Certificates";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { motion } from "framer-motion";
import Loading from "./UI/Loading";
import { useInView } from "react-intersection-observer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const Section = ({ id, children }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });

    return (
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
        className="pt-[85px] -mt-10"
        id={id}
      >
        {children}
      </motion.section>
    );
  };

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
