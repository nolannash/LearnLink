// Navigation.js

import React, { useState } from "react";

import TeacherForms from "./teacher/TeacherForms"; // Import the function
import StudentForms from "./student/StudentForms"; // Import the function

const Navigation = () => {
  const [isTeacherModalOpen, setTeacherModalOpen] = useState(false);
  const [isStudentModalOpen, setStudentModalOpen] = useState(false);

  const openTeacherModal = () => {
    setTeacherModalOpen(true);
  };

  const closeTeacherModal = () => {
    setTeacherModalOpen(false);
  };

  const openStudentModal = () => {
    setStudentModalOpen(true);
  };

  const closeStudentModal = () => {
    setStudentModalOpen(false);
  };

  const handleScrollTo = (targetId) => {
    smoothScroll(targetId);
  };

  function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        behavior: "smooth",
        top: targetElement.offsetTop,
      });
    }
  }

  return (
    <nav className="bg-gray-200 py-4 top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-semibold text-lg">LearnLink</div>
        <div className="hidden md:flex space-x-6 justify-center">
          <div
            className="cursor-pointer text-white hover:text-gray-400"
            onClick={() => handleScrollTo("home")}
          >
            Home
          </div>
          <div
            className="cursor-pointer text-white hover:text-gray-400"
            onClick={() => handleScrollTo("courses")}
          >
            Courses
          </div>
          <div
            className="cursor-pointer text-white hover:text-gray-400"
            onClick={() => handleScrollTo("about")}
          >
            About
          </div>
          <div
            className="cursor-pointer text-white hover:text-gray-400"
            onClick={openTeacherModal}
          >
            Teacher
          </div>
          <div
            className="cursor-pointer text-white hover:text-gray-400"
            onClick={openStudentModal}
          >
            Student
          </div>
        </div>
      </div>
      {isTeacherModalOpen && (
        <div className="absolute top-full right-0 mt-2 p-4 bg-gray rounded shadow-lg h-100 w-64">
          <div className="">
            <TeacherForms />
            <button
              className="absolute top-0 right-0 m-2 text-gray-600 hover:text-red-600 transition-transform transform hover:scale-110 duration-300"
              onClick={closeTeacherModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {isStudentModalOpen && (
        <div className="absolute top-full right-0 mt-2 p-4 bg-gray rounded shadow-lg h-100 w-64">
          <div className="">
            <StudentForms />
            <button
              className="absolute top-0 right-0 m-2 text-gray-600 hover:text-red-600 transition-transform transform hover:scale-110 duration-300"
              onClick={closeStudentModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
