import React from "react";

import { Link } from "react-router-dom";

function TeacherDash() {
  return (
    <div>
      <h1>Teacher Dash</h1>
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
