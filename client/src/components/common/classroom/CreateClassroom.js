import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const classroomSchema = Yup.object().shape({
  className: Yup.string().required("Class Name is required"),
  subject: Yup.string().required("Subject is required"),
});

//only teacher can create classrooms - logged in teacher = teacherId
const CreateClassroom = () => {
  //on submit, create a classroomKey - 5 characters

  return (
    <div>
      <h1>Create a New Classroom</h1>
      <Formik
        initialValues={{ className: "", subject: "" }}
        validationSchema={classroomSchema}
        onSubmit={(values, { setSubmitting }) => {
          //handle create a classroom here
          console.log("Class Created Sucessfully", values);
          setSubmitting(false);
          //route back to classes page
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
