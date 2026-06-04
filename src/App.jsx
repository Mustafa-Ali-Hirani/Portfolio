import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Repositories from './components/Repositories';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-textPrimary flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Skills />
        <Repositories />
        <Contact />
      </main>
    </div>
  );
}

export default App;
