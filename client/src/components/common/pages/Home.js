import React from 'react';

import About from './About';
import Courses from './Courses';

const Home = () => {
  return (
    <div>
      <section id="home" className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center bg-gray-300">
        {/* First column */}
        <div className="p-4">
          <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
          <p className="mt-4">Section 1 content goes here.</p>
        </div>

        {/* Second column (visible on medium and larger screens) */}
        <div className="hidden md:block p-4">
          {/* Content for the second column */}
          <h2>More content</h2>
        </div>

        {/* Third column (visible on large screens) */}
        <div className="hidden lg:block p-4">
          {/* Content for the third column */}
          <h3>even more content</h3>
        </div>
      </section>

      <section id="courses" className="min-h-screen flex items-center justify-center bg-gray-300">
        {/* Add content for the Cources section */}
        <Courses />
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-300">
        {/* Add content for the About section */}
        <About />
      </section>
    </div>
  );
};


export default Home;
