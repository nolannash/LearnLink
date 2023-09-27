import React, { useState } from 'react';

import StudentForms from '../student/StudentForms';
import TeacherForms from '../teacher/TeacherForms';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isStudentFormOpen, setStudentFormOpen] = useState(false);
  const [isTeacherFormOpen, setTeacherFormOpen] = useState(false);

  const openTeacherForm = () => {
    setTeacherFormOpen(true);
  };

  const closeTeacherForm = () => {
    setTeacherFormOpen(false);
  };

  const openStudentForm = () => {
    setStudentFormOpen(true);
  };

  const closeStudentForm = () => {
    setStudentFormOpen(false);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-md w-full p-6 bg-white rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold mb-4 text-center text-blue-600'>
          Welcome to LearnLink
        </h1>
        <div className='space-y-4'>
          <button
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            onClick={openStudentForm}
          >
            I'm a Student
          </button>
          <button
            className='w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400'
            onClick={openTeacherForm}
          >
            I'm a Teacher
          </button>
        </div>
      </div>
      {isStudentFormOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='modal-container bg-white max-w-md p-4 rounded-lg shadow-lg'>
            <h2 className='text-xl font-semibold mb-4'>Student Form</h2>
            <Link><StudentForms /></Link>
            <form>
              <button
                className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md'
                onClick={closeStudentForm}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
      {isTeacherFormOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='modal-container bg-white max-w-md p-4 rounded-lg shadow-lg'>
            <h2 className='text-xl font-semibold mb-4'>Teacher Form</h2>
            <TeacherForms />
            <form>
              {/* More form fields */}
              <button
                className='mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md'
                onClick={closeTeacherForm}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
