// Navigation.js

import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className=" py-4 top-0 z-50">
      <div className="container mx-auto flex items-center justify-around">
        <div className="text-5xl font-bold italic text-green-900">
          learnlink
        </div>
        <div className="hidden md:flex space-x-20  cursor-pointer text-slate-900 hover:text-gray-600 ">
          <Link to="/">Home</Link>
          <Link to="/about">About LearnLink</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/teacher">Teacher</Link>
          <Link to="/student">Student</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
