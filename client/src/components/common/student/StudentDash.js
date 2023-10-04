import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import { InlineIcon } from "@iconify/react";

const StudentDash = () => {
  const { logoutStudent, student } = useContext(AppContext);

  const handleLogout = () => {
    logoutStudent();
  };
  return (
    <div className="grid grid-cols-6 min-h-[86vh]">
      <div className="text-slate-900 row-span-full bg-emerald-100 rounded-xl m-6">
        <div className="text-5xl font-bold italic text-green-900">
          learnlink
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link>Inbox</Link>
          <Link>Classes</Link>
          <Link>
            <InlineIcon icon="akar-icons:paper" />
            Progress
          </Link>
          <Link>Files</Link>
          <Link>Settings</Link>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </div>
      <div>
        <h1>Welcome, {student?.name}</h1>
      </div>
    </div>
  );
};

export default StudentDash;
