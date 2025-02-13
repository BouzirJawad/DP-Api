import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import React from 'react'

function Userpage() {
  return (
    <>
        <section >
          <Home />
        </section>
        <section >
          <About />
        </section>
        <section>
          <Projects />
        </section>
        <section >
          <Contact />
        </section>
    </>
  )
}

export default Userpage