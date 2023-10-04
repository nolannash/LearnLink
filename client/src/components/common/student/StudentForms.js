import React, { useState } from "react";

import LoginForm from "./Login";
import RegisterForm from "./Register";

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
    <div className="p-20 text-gray-100">
      {!showLogin && !showRegister && (
        <div className=" flex flex-col mb-4">
          <button
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-2 px-4 rounded-md mr-2"
            onClick={handleLoginClick}
          >
            Login
          </button>
          <br />

          <h2 className="font-bold">OR</h2>
          <br />

          <button
            className="bg-amber-100 hover:bg-amber-200 text-slate-900 font-semibold py-2 px-4 rounded-md mr-2"
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
