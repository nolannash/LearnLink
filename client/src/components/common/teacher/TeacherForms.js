import React from "react";
import { useNavigate } from "react-router-dom";

const TeacherForms = (props) => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/teacher/login");
  };

  const handleRegisterClick = () => {
    navigate("/teacher/register");
  };

  return (
    <div className="p-20 text-slate-900">
      <div className="text-5xl font-bold italic text-green-900">learnlink</div>
      <div className=" flex flex-col mb-4 items-center">
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
          Create an Account
        </button>
      </div>
    </div>
  );
};

export default TeacherForms;
