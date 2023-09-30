import React from "react";

import About from "./About";
import Courses from "./Courses";

const Home = () => {
  return (
    <div>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gray-300"
      >
        {/* Add content for the Home section  */}
        <h1>Welcome to the Home Page</h1>

        <p>Section 1 content goes here.</p>
      </section>

      <section
        id="courses"
        className="min-h-screen flex items-center justify-center bg-gray-300"
      >
        {/* Add content for the Cources section */}
        <Courses />
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-gray-300"
      >
        {/* Add content for the About section */}
        <About />
      </section>
    </div>
  );
};

export default Home;
