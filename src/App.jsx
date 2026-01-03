import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"  // <--- IMPORT

function App() {
  return (
    <>
      <Header />

      <main style={{ paddingTop: "90px" }}>  {/* header fixo */}
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>

      <Footer />   {}
    </>
  )
}

export default App
