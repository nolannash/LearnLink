import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/common/pages/Home";
import About from "./components/common/pages/About";
import Courses from "./components/common/pages/Courses";
import Contact from "./components/common/pages/Contact";
import StudentDash from "./components/common/student/StudentDash";
import TeacherDash from "./components/common/teacher/TeacherDash";
import CreateAssignment from "./components/common/classroom/CreateAssignment";
import CreateClassroom from "./components/common/classroom/CreateClassroom";
import TeacherLayout from "./components/common/teacher/Teacher";
import TeacherForms from "./components/common/teacher/TeacherForms";
import StudentLayout from "./components/common/student/Student";
import StudentForms from "./components/common/student/StudentForms";
import StudentLogin from "./components/common/student/Login";
import StudentRegister from "./components/common/student/Register";
import TeacherLogin from "./components/common/teacher/Login";
import TeacherRegister from "./components/common/teacher/Register";
import MainLayout from "./components/common/layout/Main";

function App() {
  return (
    <div className="App bg-amber-50">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/student" element={<StudentLayout />}>
          <Route path="" element={<StudentForms />} />
          <Route path="login" element={<StudentLogin />} />
          <Route path="register" element={<StudentRegister />} />
          <Route path="dashboard" element={<StudentDash />} />
        </Route>

        <Route path="/teacher" element={<TeacherLayout />}>
          <Route path="" element={<TeacherForms />} />
          <Route path="login" element={<TeacherLogin />} />
          <Route path="register" element={<TeacherRegister />} />
          <Route path="dashboard" element={<TeacherDash />} />
          <Route path="createclassroom" element={<CreateClassroom />} />
          <Route path="createassignment" element={<CreateAssignment />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
  );
}

export default App;
