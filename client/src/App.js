import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import Home from './components/common/pages/Home';
import StudentDash from './components/common/student/StudentDash';
import TeacherDash from './components/common/teacher/TeacherDash'

function App() {


  return (
    <div className="App">
      {/* Banner */}
      <div className="bg-blue-500 text-white text-center py-2">
        <p>Welcome to LearnLink - Connect, Learn, Grow</p>
      </div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-dashboard" element={<StudentDash />} />
          <Route path="/teacher-dashboard" element={<TeacherDash />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
