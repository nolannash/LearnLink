import React from "react";
import CreateClassroom from "../classroom/CreateClassroom";
import CreateAssignment from "../classroom/CreateAssignment";

function TeacherDash(props) {
  return (
    <div>
      <h1>Teacher Dash</h1>
      <div>
        <CreateClassroom />
      </div>
      <div>
        <CreateAssignment />
      </div>
    </div>
  );
}

export default TeacherDash;
