import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const classroomSchema = Yup.object().shape({
  className: Yup.string().required("Class Name is required"),
  subject: Yup.string().required("Subject is required"),
});

//only teacher can create classrooms - logged in teacher = teacherId
const CreateClassroom = () => {
  const navigate = useNavigate();
  //on submit, create a classroomKey - 5 characters
  const createClass = (values) => {
    fetch("/api/v1/classroom/create", {
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
          throw new Error("Failed to create classroom");
        }
      })
      .then((data) => {
        console.log(data);
        navigate("/teacher/dashboard");
      });
  };

  const handleBackClick = () => {
    navigate("/teacher/dashboard");
  };

  const formik = useFormik({
    initialValues: {
      className: "",
      subject: "",
    },
    validationSchema: classroomSchema,
    onSubmit: createClass,
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
        Create a New Classroom
      </h1>

      <form
        onSubmit={formik.createClass}
        className="col-start-2 col-span-3 row-start-3 row-span-2 flex flex-col items-center"
      >
        <div className="mb-4">
          <label
            htmlFor="className"
            className="block text-gray-700 text-sm font-semibold"
          >
            Class Name
          </label>
          <input
            type="text"
            name="className"
            id="className"
            className={`w-full py-2 px-3 text-gray-700 bg-amber-50 border-b-2 border-stone-950 ${
              formik.errors.className && formik.touched.className
                ? "border-red-500"
                : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.className}
          />
          {formik.errors.className && formik.touched.className && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.className}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-700 text-sm font-semibold "
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className={`w-full py-2 px-3 text-gray-700 bg-amber-50 border-b-2 border-stone-950 ${
              formik.errors.subject && formik.touched.subject
                ? "border-red-500"
                : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
          />

          {formik.errors.subject && formik.touched.subject && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={formik.isSubmitting || !formik.isValid}
          className="text-center bg-amber-500 hover:bg-amber-600 py-3 px-6 rounded-md mt-2 self-center"
        >
          Create Class
        </button>
      </form>
    </div>
  );
};

export default CreateClassroom;
