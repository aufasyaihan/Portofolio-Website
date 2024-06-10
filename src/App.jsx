import About from "./components/About";
import Certificate from "./components/Certificates";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="pt-[85px] -mt-20" id="about">
        <About />
      </section>
      <section className="pt-[85px] -mt-20" id="projects">
        <Projects />
      </section>
      <section className="pt-[85px]" id="experiences">
        <Experience />
      </section>
      <section className="pt-[85px] -mt-20" id="certifications">
        <Certificate />
      </section>
      <Footer />
    </>
  );
}

export default App;
