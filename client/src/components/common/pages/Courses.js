import React from "react";

const Courses = () => {
  return (
    <section className="min-h-[70vh]">
      <div className="flex flex-col items-center m-10">
        <div className="m-10">
          <h1 className="font-bold text-2xl">Courses Offered</h1>
        </div>
        <div className="">
          <ul className="text-xl">
            <li>Math</li>
            <li>English Language Arts</li>
            <li>Social Studies</li>
            <li>Science</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Courses;
