import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  

  return (
    <>
    <header className="min-h-screen bg-slate-800 text-white">
      <Header />
    </header>
    <main className="min-h-screen bg-slate-900 text-white">
      <About />
      <Projects />
      <Skills />
    </main>
    <footer className="bg-slate-800 text-white">
      <Footer />
    </footer>
    </>
  )
}

export default App;
