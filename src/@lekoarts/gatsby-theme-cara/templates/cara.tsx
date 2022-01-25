import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects" //  <Projects offset={1} factor={2} />
//import About from "../components/about" // <About offset={3} factor={1} />
import Contact from "../components/contact"

const Cara = () => (
  <Layout>
    <Parallax pages={2}>
      <Hero offset={0.2} factor={0.7} />
      <Projects offset={0.5} factor={0.8} />
      <Contact offset={1.1} factor={0.9} />
    </Parallax>
  </Layout>
)

export default Cara
