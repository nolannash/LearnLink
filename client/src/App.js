import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import Home from "./components/common/pages/Home";
import About from "./components/common/pages/About";
import Courses from "./components/common/pages/Courses";
import StudentDash from "./components/common/student/StudentDash";
import TeacherDash from "./components/common/teacher/TeacherDash";
import CreateAssignment from "./components/common/classroom/CreateAssignment";
import CreateClassroom from "./components/common/classroom/CreateClassroom";

function App() {
  return (
    <div className="App bg-amber-50">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-dashboard" element={<StudentDash />} />
        <Route path="/teacher">
          <Route path="dashboard" element={<TeacherDash />} />
          <Route path="createclassroom" element={<CreateClassroom />} />
          <Route path="createassignment" element={<CreateAssignment />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
