import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import Home from "./components/common/pages/Home";
import StudentDash from "./components/common/student/StudentDash";
import TeacherDash from "./components/common/teacher/TeacherDash";

function App() {
  return (
    <div className="App bg-amber-50">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-dashboard" element={<StudentDash />} />
        <Route path="/teacher-dashboard" element={<TeacherDash />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
