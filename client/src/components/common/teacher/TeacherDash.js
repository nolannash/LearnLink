import React from "react";

import { Link } from "react-router-dom";

function TeacherDash() {
  return (
    <div className="grid grid-cols-6 ">
      <div className="text-slate-900 row-span-full bg-emerald-100 rounded-xl m-6">
        <div className="text-5xl font-bold italic text-green-900">
          learnlink
        </div>
        <ul>
          <li>Home</li>
          <li>Inbox</li>
          <li>Classes</li>
          <li>Students</li>
          <li>Progress</li>
          <li>Files</li>
          <li>Settings</li>
        </ul>
      </div>
      <div>
        <Link to="../createclassroom">New Classroom</Link>
      </div>
      <div>
        <Link to="../createassignment">New Assignment</Link>
      </div>
    </div>
  );
}

export default TeacherDash;
