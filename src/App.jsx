import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="pt-[85px]" id="about">
        <About />
      </section>
      <section className="pt-[85px]" id="experience">
        <Experience />
      </section>
    </>
  );
}

export default App;
