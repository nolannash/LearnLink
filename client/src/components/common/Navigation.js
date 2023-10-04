// Navigation.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  // const handleScrollTo = (targetId) => {
  //   smoothScroll(targetId);
  // };

  // function smoothScroll(targetId) {
  //   const targetElement = document.getElementById(targetId);
  //   if (targetElement) {
  //     window.scrollTo({
  //       behavior: "smooth",
  //       top: targetElement.offsetTop,
  //     });
  //   }
  // }

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
          <div className="" onClick={openTeacherModal}>
            Teacher
          </div>
          <div className="" onClick={openStudentModal}>
            Student
          </div>
        </div>
      </div>
      {isTeacherModalOpen && (
        <div className="absolute top-32 right-52 mt-2 p-4 bg-green-900 rounded shadow-lg h-3/4 w-3/4">
          <div className="flex justify-center">
            <TeacherForms />
            <button
              className="absolute top-0 right-0 m-2 text-gray-100 hover:text-red-600 transition-transform transform hover:scale-110 duration-300"
              onClick={closeTeacherModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {isStudentModalOpen && (
        <div className="absolute top-32 right-52 mt-2 p-4 bg-green-900 rounded shadow-lg h-3/4 w-3/4">
          <div className="flex justify-center">
            <StudentForms />
            <button
              className="absolute top-0 right-0 m-2 text-gray-100 hover:text-red-600 transition-transform transform hover:scale-110 duration-300"
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
