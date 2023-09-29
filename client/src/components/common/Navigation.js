import React from "react";
import { motion } from "framer-motion";

const Navigation = ({ homeRef, aboutRef }) => {
  const scrollTo = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-gray-200 py-4 top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-gray-800 font-semibold text-lg">LearnLink</div>
        <div className="hidden md:flex space-x-6 justify-start">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer"
            onClick={() => scrollTo(homeRef)}
          >
            Home
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer"
            onClick={() => scrollTo(aboutRef)}
          >
            About LearnLink
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer"
            onClick={() => scrollTo(aboutRef)}
          >
            Courses
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer"
            onClick={() => scrollTo(aboutRef)}
          >
            Join LearnLink
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer"
            onClick={() => scrollTo(aboutRef)}
          >
            Log In
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
