import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import { InlineIcon, Icon } from "@iconify/react";
import divider from "../../../public/Divider.png";

function TeacherDash() {
  const { logoutTeacher, teacher } = useContext(AppContext);

  const handleLogout = () => {
    logoutTeacher();
  };
  return (
    <div className="grid grid-cols-6 grid-rows-4 justify-between min-h-[86vh]">
      <div className="text-slate-900 row-span-full bg-emerald-100 rounded-xl m-6 p-4 flex flex-col justify-between">
        <div className="text-4xl font-bold italic text-green-900 text-center  ">
          learnlink
        </div>
        <div className="text-xl font-medium ml-6">
          <Link to="/" className="flex items-center gap-4 ">
            <Icon icon="iconoir:home" />
            Home
          </Link>
        </div>
        <div className="text-xl font-medium ml-6">
          <Link className="flex items-center gap-4 ">
            <InlineIcon icon="octicon:inbox-24" />
            Inbox
          </Link>
        </div>
        <div className="text-xl font-medium ml-6">
          <Link className="flex items-center gap-4 ">
            <InlineIcon icon="healthicons:i-training-class" />
            Classes
          </Link>
        </div>
        <div className="text-xl font-medium ml-6">
          <Link className="flex items-center gap-4 ">
            <InlineIcon icon="ph:student" />
            Students
          </Link>
        </div>
        <div className="text-xl font-medium ml-6">
          <Link className="flex items-center gap-4 ">
            <InlineIcon icon="solar:folder-with-files-outline" />
            Files
          </Link>
        </div>
        <div className="text-xl font-medium ml-6">
          <Link className=" flex items-center gap-2 ">
            <InlineIcon icon="solar:settings-linear" />
            Settings
          </Link>
        </div>
        <div className="text-xl font-medium ml-6">
          <button onClick={handleLogout} className="flex items-center gap-4">
            <InlineIcon icon="clarity:logout-line" />
            Log Out
          </button>
        </div>
        <div className="self-center">
          <button className="bg-amber-500 rounded-full h-20 w-20 p-2">
            <Icon icon="mdi:robot-happy-outline" className="text-6xl" />
          </button>
        </div>
      </div>

      <div className="col-start-2 self-center justify-self-center">
        <h1 className="text-2xl">Welcome, {teacher?.name}</h1>
      </div>
      <div className="col-start-3 col-span-3 self-center justify-self-center">
        <img src={divider} alt="wavy divider" className="w-full" />
      </div>
      <div className="col-start-2 self-center justify-self-center">
        <Link
          to="../createclassroom"
          className="border-2 border-slate-900 py-3 px-6"
        >
          New Classroom
        </Link>
      </div>
      <div className="col-start-2 self-center justify-self-center">
        <Link
          to="../createassignment"
          className="border-2 border-slate-900 py-3 px-6"
        >
          New Assignment
        </Link>
      </div>
    </div>
  );
}

export default TeacherDash;
