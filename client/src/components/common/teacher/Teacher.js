import React from "react";
import { Outlet } from "react-router-dom";

function TeacherLayout() {
  return (
    <div>
      <div>
        <div className="text-5xl font-bold italic text-green-900">
          learnlink
        </div>
      </div>
      <Outlet />
      <div>
        <p className="text-xs">Copyright &copy; 2023. All rights reserved.</p>
      </div>
    </div>
  );
}

export default TeacherLayout;
