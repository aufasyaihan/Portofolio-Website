import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Section from "./components/Section"

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
        <About />
      </Section>
    </>
  )
}

export default App
