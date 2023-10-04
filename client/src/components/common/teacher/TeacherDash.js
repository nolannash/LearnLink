import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import { InlineIcon, Icon } from "@iconify/react";

function TeacherDash() {
  const { logoutTeacher, teacher } = useContext(AppContext);

  const handleLogout = () => {
    logoutTeacher();
  };
  return (
    <div className="grid grid-cols-6 justify-between min-h-[86vh]">
      <div className="text-slate-900 row-span-full bg-emerald-100 rounded-xl m-6 p-4 flex flex-col">
        <div className="text-4xl font-bold italic text-green-900 text-center">
          learnlink
        </div>
        <div className="text-xl font-medium flex-grow grid gap-4 place-items-center place-content-center">
          <Link to="/" className="flex items-center gap2">
            <Icon icon="iconoir:home" />
            Home
          </Link>

          <Link className="flex items-center gap2">
            <InlineIcon icon="octicon:inbox-24" />
            Inbox
          </Link>

          <Link className="flex items-center gap2">
            <InlineIcon icon="healthicons:i-training-class" />
            Classes
          </Link>

          <Link className="flex items-center gap-2">
            <InlineIcon icon="ph:student" />
            Students
          </Link>

          <Link className="flex items-center gap-2">
            <InlineIcon icon="solar:folder-with-files-outline" />
            Files
          </Link>

          <Link className=" flex items-center gap-2">
            <InlineIcon icon="solar:settings-linear" />
            Settings
          </Link>

          <button onClick={handleLogout} className="flex items-center gap-2">
            <InlineIcon icon="clarity:logout-line" />
            Log Out
          </button>
        </div>
        <div>
          <button className="bg-amber-500 rounded-full h-20 w-20 p-2">
            <Icon icon="mdi:robot-happy-outline" className="text-6xl" />
          </button>
        </div>
      </div>

      <div>
        <h1 className="col-span-2 text-2xl">Welcome, {teacher?.name}</h1>
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
