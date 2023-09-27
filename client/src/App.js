import React, { useRef } from 'react';
import './App.css';
import 'react-router-dom'

import Navigation from './components/common/Navigation';
import Home from './components/common/pages/Home';
import About from './components/common/pages/About';
import Contact from './components/common/pages/Contact';

function App() {
  // Create refs for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Navigation
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      {/* Sections */}
      <section ref={homeRef} className="min-h-screen flex items-center justify-center bg-gray-100">
        <Home />
      </section>

      <section ref={aboutRef} className="min-h-screen flex items-center justify-center bg-gray-200">
        <About />
      </section>

      <section ref={contactRef} className="min-h-screen flex items-center justify-center bg-gray-300">
        <Contact />
      </section>
    </div>
  );
}

export default App;
