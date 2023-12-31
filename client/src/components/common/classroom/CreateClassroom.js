import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
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
        navigate.push("/");
      });
  };

  return (
    <div className="m-10 w-1/3 flex flex-col justify-center items-center">
      <h1 className="text-xl font-semibold mb-4">Create a New Classroom</h1>
      <Formik
        initialValues={{ className: "", subject: "" }}
        validationSchema={classroomSchema}
        onSubmit={(values, { setSubmitting }) => {
          //handle create a classroom here
          createClass(values);
          console.log("Class Created Sucessfully", values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label
              htmlFor="className"
              className="block text-gray-700 text-sm font-semibold mb-2 "
            >
              Class Name
            </label>
            <Field
              type="text"
              name="className"
              id="className"
              className="w-full py-2 px-3 text-gray-700 bg-amber-50 border-b-2 border-stone-950"
            />
            <ErrorMessage
              name="className"
              component="div"
              className="text-red-500 text-sm"
            />
            <label
              htmlFor="subject"
              className="block text-gray-700 text-sm font-semibold my-2"
            >
              Subject
            </label>
            <Field
              type="text"
              name="subject"
              id="subject"
              className="w-full  py-2 px-3 text-gray-700 bg-amber-50 border-b-2 border-stone-950"
            />
            <ErrorMessage
              name="subject"
              component="div"
              className="text-red-500 text-sm"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-center bg-amber-500 hover:bg-amber-600 py-3 px-6 rounded-md mt-2"
            >
              Create Class
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateClassroom;
