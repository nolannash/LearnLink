import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
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
        navigate.push("/");
      });
  };

  return (
    <div className="m-10 w-1/3 flex flex-col justify-center items-center">
      <h1 className="text-xl font-semibold mb-4">Create a New Assignment</h1>
      <Formik
        initialValues={{ assignmentName: "", topic: "" }}
        validationSchema={assignmentSchema}
        onSubmit={(values, { setSubmitting }) => {
          //handle create assignment here
          createAssignment(values);
          console.log("Assignment Created Sucessfully", values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label
              htmlFor="assignmentName"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Name of Assignment
            </label>
            <Field
              type="text"
              name="assignmentName"
              id="assignmentName"
              className="w-full py-2 px-3 text-gray-700 bg-amber-50 border-b-2 border-stone-950"
            />
            <ErrorMessage
              name="assignmentName"
              component="div"
              className="text-red-500 text-sm"
            />
            <label
              htmlFor="topic"
              className="block text-gray-700 text-sm font-semibold my-2"
            >
              Topic
            </label>
            <Field
              type="text"
              name="topic"
              id="topic"
              className="w-full py-2 px-3 text-gray-700 bg-amber-50 border-b-2 border-stone-950"
            />
            <ErrorMessage
              name="topic"
              component="div"
              className="text-red-500 text-sm"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-center bg-amber-500 hover:bg-amber-600 py-3 px-6 rounded-md mt-2"
            >
              Create Assignment
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateAssignment;
