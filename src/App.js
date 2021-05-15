import logo from './logo.svg';
// import './App.css';
// import './css/styles.css'
import Landing from './components/MenuBar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div id='page-top'>
      <Landing />

      <header className="masthead">
        <Header />
      </header>

      <section className="about-section text-center" id="about">
        <About />
      </section>
      
      <section className="projects-section bg-dark" id="projects">
        <Projects />
      </section>

      <section class="contact-section bg-dark" id="contact">
        <Contact />
      </section>

      <Footer />
        
    </div>
  );
}

export default App;
