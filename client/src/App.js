import React, { useRef } from "react";

import "react-router-dom";

import Navigation from "./components/common/Navigation";
import Home from "./components/common/pages/Home";
import About from "./components/common/pages/About";

import Footer from "./components/common/Footer";

function App() {
  // Create refs for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <div className="App">
      <Navigation homeRef={homeRef} aboutRef={aboutRef} />
      {/* Sections */}
      <section
        ref={homeRef}
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <Home />
      </section>

      <section
        ref={aboutRef}
        className="min-h-screen flex items-center justify-center bg-gray-200"
      >
        <About />
      </section>

      <Footer />
    </div>
  );
}

export default App;
