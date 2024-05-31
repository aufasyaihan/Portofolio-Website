import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Info /> */}
      <Section id="about">
        <About />
      </Section>
      <Section id="experience">
        <Experience />
      </Section>
    </>
  );
}

export default App;
