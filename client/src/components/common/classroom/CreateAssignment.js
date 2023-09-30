import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const assignmentSchema = Yup.object().shape({
  assignmentName: Yup.string().required("Assignment name is required"),
  topic: Yup.string().required("Topic is required"),
});

//only teacher can create assignment - logged in teacher = teacherId
const CreateAssignment = () => {
  //on submit, create a new lesson
  const navigate = useNavigate();

  const createAssignment = (values) => {
    fetch("http://localhost:5000/api/v1/classroom/createAssignment", {
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
    <div>
      <h1>Create a New Assignment</h1>
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
            <label htmlFor="assignmentName">Name of Assignment</label>
            <Field type="text" name="assignmentName" id="assignmentName" />
            <ErrorMessage name="assignmentName" component="div" />
            <label htmlFor="topic">Topic</label>
            <Field type="text" name="topic" id="topic" />
            <ErrorMessage name="topic" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Create Assignment
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateAssignment;
