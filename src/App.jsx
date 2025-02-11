import Header from "./Components/Header"
import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow mt-3">
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
