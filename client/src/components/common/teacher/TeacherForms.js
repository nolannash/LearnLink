import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TeacherForms = (props) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/teacher/login");
  };

  const handleRegisterClick = () => {
    navigate("/teacher/register");
  };

  return (
    <div className=" text-slate-900 h-[86vh]">
      <div className="flex justify-between items-center">
        <div className="p-10 text-5xl font-bold italic text-green-900">
          learnlink
        </div>
        <div className="mr-10">
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-10 mt-56">
        <button
          className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-3 px-6 rounded-md mr-2"
          onClick={handleLoginClick}
        >
          Login
        </button>
        <br />

        <h2 className="font-bold">OR</h2>
        <br />
        <button
          className="bg-amber-200 hover:bg-amber-300 text-slate-900 font-semibold py-3 px-6 rounded-md mr-2"
          onClick={handleRegisterClick}
        >
          Create an Account
        </button>
      </div>
    </div>
  );
};

export default TeacherForms;
