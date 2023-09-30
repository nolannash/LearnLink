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

  return (
    <div>
      <h1>Create a New Assignment</h1>
      <Formik
        initialValues={{ assignmentName: "", topic: "" }}
        validationSchema={assignmentSchema}
        onSubmit={(values, { setSubmitting }) => {
          //handle create assignment here
          console.log("Assignment Created Sucessfully", values);
          setSubmitting(false);
          //route back to classes page
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
