import Footer from "./components/Footer";
import HeroHeader from "./components/HeroHeader";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {

  return (
    <div className="bg-white dark:bg-slate-900">
      <HeroHeader />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App;
