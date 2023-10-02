import React from "react";

import About from "./About";
import Courses from "./Courses";

const Home = () => {
  return (
    <div>
      <section
        id="home"
        className="grid grid-cols-2 grid-rows-3 m-10 items-center justify-center"
      >
        <div className="stroke-green-900 row-span-3 p-4 ml-10 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90%"
            height="90%"
            fill="none"
            stroke-width="1.5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#14532D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2 21h15M21 21h1"
            ></path>
            <path
              stroke="#14532D"
              stroke-width="1.5"
              d="M2 16.4V3.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z"
            ></path>
          </svg>
        </div>
        <div className="ml-20 self-end">
          <h1 className="font-bold text-3xl">Powered and Personalized by AI</h1>
        </div>
        <div className="px-20">
          <p className="text-lg">
            Leveraging AI technology, LearnLink curates a personalized learning
            experience tailored to each student's individual needs.
          </p>
        </div>
        <div className="self-start ml-20">
          <button
            type="button"
            className="text-center bg-amber-500 py-4 px-6 rounded-md"
          >
            More Info &rarr;{" "}
          </button>
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
