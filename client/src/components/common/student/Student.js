import React from "react";
import { Outlet } from "react-router-dom";

function StudentLayout() {
  return (
    <div className="bg-amber-50">
      <Outlet />
      <div className="flex justify-end">
        <p className="text-xs">Copyright &copy; 2023. All rights reserved.</p>
      </div>
    </div>
  );
}

export default StudentLayout;
