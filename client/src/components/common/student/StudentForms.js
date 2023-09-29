import React, { useState } from 'react';

import RegisterForm from './Register';
import LoginForm from './Login';


const StudentForms = () => {
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
    <div className=''>
      {!showLogin && !showRegister && (
        <div className="">
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

export default StudentForms;
