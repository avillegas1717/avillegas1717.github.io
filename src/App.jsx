import './index.css';
import Header from './components/Header'; 
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
 <>
  {/* Accessibility: skip link for screen reader/keyboard users */}
  <a href="#main" className="skip-link">Skip to main content</a>

  <Header />

  <main id="main">
    <About />
     {/* You can add more sections like <Projects />, <Contact /> later */}
  </main>

  <Footer /> 
 </>  
  );
}

export default App;