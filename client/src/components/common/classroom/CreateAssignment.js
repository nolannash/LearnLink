import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const assignmentSchema = Yup.object().shape({
  assignmentName: Yup.string().required("Assignment name is required"),
  topic: Yup.string().required("Topic is required"),
});

//only teacher can create assignment - logged in teacher = teacherId
const CreateAssignment = () => {
  //on submit, create a new lesson
  const navigate = useNavigate();

  const createAssignment = (values) => {
    fetch("/api/v1/classroom/createAssignment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to create assignment");
        }
      })
      .then((data) => {
        console.log(data);
        navigate.push("/teacher/dashboard");
      });
  };

  const handleBackClick = () => {
    navigate("/teacher/dashboard");
  };

  const formik = useFormik({
    initialValues: {
      assignmentName: "",
      topic: "",
    },
    validationSchema: assignmentSchema,
    onSubmit: createAssignment,
  });

  return (
    <div className="min-h-[86vh] grid grid-cols-5 grid-rows-5 justify-items-center ">
      <button
        type="button"
        className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded-md self-center"
        onClick={handleBackClick}
      >
        Back &larr;
      </button>
      <h1 className="text-xl font-semibold mb-4 col-start-2 row-start-2 col-span-3 self-end p-6">
        Create a New Assignment
      </h1>

      <form
        onSubmit={formik.createAssignment}
        className="col-start-2 col-span-3 row-start-3 row-span-2 flex flex-col items-center"
      >
        <div className="mb-4">
          <label
            htmlFor="assignmentName"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Name of Assignment
          </label>
          <input
            type="text"
            name="assignmentName"
            id="assignmentName"
            className={`w-full py-2 px-3 text-gray-700 bg-amber-50 border-b-2 border-stone-950 ${
              formik.errors.assignmentName && formik.touched.assignmentName
                ? "border-red-500"
                : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.assignmentName}
          />
          {formik.errors.assignmentName && formik.touched.assignmentName && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.assignmentName}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="topic"
            className="block text-gray-700 text-sm font-semibold my-2"
          >
            Topic
          </label>
          <input
            type="text"
            name="topic"
            id="topic"
            className={`w-full py-2 px-3 text-gray-700 bg-amber-50 border-b-2 border-stone-950 ${
              formik.errors.topic && formik.touched.topic
                ? "border-red-500"
                : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.topic}
          />
          {formik.errors.topic && formik.touched.topic && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.topic}</p>
          )}
        </div>
        <button
          type="submit"
          className="text-center bg-amber-500 hover:bg-amber-600 py-3 px-6 rounded-md mt-2 self-center"
        >
          Create Assignment
        </button>
      </form>
    </div>
  );
};

export default CreateAssignment;
