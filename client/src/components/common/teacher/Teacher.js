import React from "react";
import { Outlet } from "react-router-dom";
import divider from "../../../public/Divider.png";

function TeacherLayout() {
  return (
    <div className="bg-amber-50">
      <Outlet />
      <div className="flex flex-col items-center h-36">
        <img src={divider} alt="wavy divider" className="w-screen py-10" />
        <p className="text-xs ">Copyright &copy; 2023. All rights reserved.</p>
      </div>
    </div>
  );
}

export default TeacherLayout;
