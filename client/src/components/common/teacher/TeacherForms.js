import React, { useState } from 'react';

import LoginForm from './Login';
import RegisterForm from './Register';

const TeacherForms = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };


  return (
    <div className="teacherForms p-4">
      {!showLogin && !showRegister && (
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mr-2"
            onClick={handleLoginClick}
          >
            Login
          </button>
          <br/>
          <br/>
          <h2>OR</h2>
          <br/>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
            onClick={handleRegisterClick}
          >
            Register
          </button>
        </div>
      )}
      {showLogin && <LoginForm />}
      {showRegister && <RegisterForm />}
    </div>
  );
};

export default TeacherForms;
