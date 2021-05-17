import MenuBar from './components/MenuBar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import { useState } from 'react'

function App() {

  return (
    <div id='page-top'>
      <MenuBar />

      <header className="masthead">
        <Header />
      </header>

      <section className="about-section text-center" id="about">
        <About />
      </section>

      <section className="skills-section text-center" id="skills">
        <Skills />
      </section>
      
      <section className="projects-section bg-dark" id="projects">
        <Projects />
      </section>

      <section className="contact-section bg-dark" id="contact">
        <Contact />
      </section>

      <Footer />
        
    </div>
  );
}

export default App;
