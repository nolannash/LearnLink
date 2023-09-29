// Navigation.js

import React, { useState } from 'react';

import TeacherForms from './teacher/TeacherForms'; // Import the function
import StudentForms from './student/StudentForms'; // Import the function

const Navigation = () => {
  const [isJoinModalOpen, setJoinModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openJoinModal = () => {
    setJoinModalOpen(true);
  };

  const closeJoinModal = () => {
    setJoinModalOpen(false);
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const handleScrollTo = (targetId) => {
    smoothScroll(targetId);
  };

  function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        behavior: 'smooth',
        top: targetElement.offsetTop,
      });
    }
  }

  return (
    <nav className="bg-gray-800 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-semibold text-lg">
          LearnLink
        </div>
        <div className="hidden md:flex space-x-6 justify-center">
          <div
            className="cursor-pointer text-white hover:text-gray-400"
            onClick={() => handleScrollTo('home')}
          >
            Home
          </div>
          <div
            className="cursor-pointer text-white hover:text-gray-400"
            onClick={() => handleScrollTo('courses')}
          >
            Courses
          </div>
          <div
            className="cursor-pointer text-white hover:text-gray-400"
            onClick={() => handleScrollTo('about')}
          >
            About
          </div>
          <div
            className="cursor-pointer text-white hover:text-gray-400"
            onClick={openJoinModal}
          >
            Teacher
          </div>
          <div
            className="cursor-pointer text-white hover:text-gray-400"
            onClick={openLoginModal}
          >
            Student
          </div>
        </div>
      </div>
      {isJoinModalOpen && (
        <div className="absolute top-full right-0 mt-2 p-4 bg-white rounded shadow-lg h-100 w-64">
          <div className="">
            <TeacherForms />
            <button className="absolute top-0 right-0 m-2 text-gray-600 hover:text-red-600 transition-transform transform hover:scale-110 duration-300" onClick={closeJoinModal}>Close</button>
          </div>
        </div>
      )}
      {isLoginModalOpen && (
        <div className="absolute top-full right-0 mt-2 p-4 bg-white rounded shadow-lg h-100 w-64">
          <div className="">
            <StudentForms />
            <button className="absolute top-0 right-0 m-2 text-gray-600 hover:text-red-600 transition-transform transform hover:scale-110 duration-300" onClick={closeLoginModal}>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
