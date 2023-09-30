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
    fetch("http://localhost:5000/api/v1/classroom/create", {
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
    <div>
      <h1>Create a New Classroom</h1>
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
            <label htmlFor="className">Class Name</label>
            <Field type="text" name="className" id="className" />
            <ErrorMessage name="className" component="div" />
            <label htmlFor="subject">Subject</label>
            <Field type="text" name="subject" id="subject" />
            <ErrorMessage name="subject" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Create Class
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateClassroom;
