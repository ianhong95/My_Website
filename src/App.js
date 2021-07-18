import MenuBar from './components/MenuBar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div class='main' id='page-top'>
      <MenuBar />

      <header className="masthead">
        <Header />
      </header>

      <section className="section-container" id="about">
        <About />
      </section>

      <section className="section-container" id="skills">
        <Skills />
      </section>
      
      <section className="section-container" id="projects">
        <Projects />
      </section>

      <section className="section-container bg-dark" id="contact">
        <Contact />
      </section>

        <Footer />

    </div>
  );
}

export default App;
