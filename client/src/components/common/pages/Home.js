import React from "react";

import About from "./About";
import Courses from "./Courses";

const Home = () => {
  return (
    <div className="bg-neutral-100">
      <section id="home" className="grid grid-cols-3 grid-rows-3">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="none"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            color="#000000"
          >
            <path
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2 21h15M21 21h1"
            ></path>
            <path
              stroke="#000000"
              stroke-width="1.5"
              d="M2 16.4V3.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z"
            ></path>
          </svg>
        </div>
      </section>

      <section
        id="courses"
        className="min-h-screen flex items-center justify-center"
      >
        {/* Add content for the Cources section */}
        <Courses />
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center"
      >
        {/* Add content for the About section */}
        <About />
      </section>
    </div>
  );
};

export default Home;
