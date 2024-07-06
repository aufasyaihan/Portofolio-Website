import { useRef, useState, useEffect } from "react";
import About from "./components/About";
import Certificate from "./components/Certificates";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { motion, useInView } from "framer-motion";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const certificateRef = useRef(null);

  const [aboutViewed, setAboutViewed] = useState(false);
  const [projectsViewed, setProjectsViewed] = useState(false);
  const [experienceViewed, setExperienceViewed] = useState(false);
  const [certificateViewed, setCertificateViewed] = useState(false);

  const aboutInView = useInView(aboutRef, { threshold: 0.1 });
  const projectsInView = useInView(projectsRef, { threshold: 0.1 });
  const experienceInView = useInView(experienceRef, { threshold: 0.1 });
  const certificateInView = useInView(certificateRef, { threshold: 0.1 });

  useEffect(() => {
    if (aboutInView) setAboutViewed(true);
  }, [aboutInView]);

  useEffect(() => {
    if (projectsInView) setProjectsViewed(true);
  }, [projectsInView]);

  useEffect(() => {
    if (experienceInView) setExperienceViewed(true);
  }, [experienceInView]);

  useEffect(() => {
    if (certificateInView) setCertificateViewed(true);
  }, [certificateInView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />
      <Hero />
      <motion.section
        ref={aboutRef}
        initial="hidden"
        animate={aboutViewed ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
        className="pt-[85px] -mt-20"
        id="about"
      >
        <About />
      </motion.section>
      <motion.section
        ref={projectsRef}
        initial="hidden"
        animate={projectsViewed ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
        className="pt-[85px] -mt-20"
        id="projects"
      >
        <Projects />
      </motion.section>
      <motion.section
        ref={experienceRef}
        initial="hidden"
        animate={experienceViewed ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
        className="pt-[85px]"
        id="experiences"
      >
        <Experience />
      </motion.section>
      <motion.section
        ref={certificateRef}
        initial="hidden"
        animate={certificateViewed ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1 }}
        className="pt-[85px] -mt-20"
        id="certifications"
      >
        <Certificate />
      </motion.section>
      <Footer />
    </>
  );
}

export default App;
