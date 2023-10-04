import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { AppContext } from "../../../AppContext";

function TeacherDash() {
  const { logoutTeacher, teacher } = useContext(AppContext);

  const handleLogout = () => {
    logoutTeacher();
  };
  return (
    <div className="grid grid-cols-6 ">
      <div className="text-slate-900 row-span-full bg-emerald-100 rounded-xl m-6">
        <div className="text-5xl font-bold italic text-green-900">
          learnlink
        </div>
        <ul>
          <Link to="/">Home</Link>
          <li>Inbox</li>
          <li>Classes</li>
          <li>Students</li>
          <li>Progress</li>
          <li>Files</li>
          <li>Settings</li>
          <button onClick={handleLogout}>Log Out</button>
        </ul>
      </div>
      <div>
        <Link to="../createclassroom">New Classroom</Link>
      </div>
      <div>
        <Link to="../createassignment">New Assignment</Link>
      </div>
      <div>
        <h1>Hello {teacher?.name}</h1>
      </div>
    </div>
  );
}

export default TeacherDash;
