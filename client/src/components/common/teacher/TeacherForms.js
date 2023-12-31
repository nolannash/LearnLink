
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const TeacherForms = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [teacher, setTeacher] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };


  const handleBackClick = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const createTeacher = (values) => {
    return fetch("http://localhost:5000/api/v1/teacher/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.status === 409) {
          throw new Error(
            "Email already exists. Please choose a different email."
          );
        } else if (response.ok) {
          return response.json();
        } else {
          throw new Error("Sign up failed");
        }
      })
      .then((data) => {
        setTeacher(data);
        console.log("success");
        // navigate.push("/");
        // Redirect to the login page after successful signup
      });
  };

  const loginTeacher = (values) => {
    fetch("http://localhost:5000/api/v1/teacher/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error("Invalid login");
        } else if (response.ok) {
          return response.json();
        } else {
          setTeacher(null);
          throw new Error("Login failed");
        }
      })
      .then((data) => {
        console.log(data);

        setTeacher(data.user);
        // navigate.push("/teacher/dashboard");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const renderLoginForm = () => {
    return (
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            // Handle login form submission here
            loginTeacher(values);
            console.log("Login form submitted with values:", values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="w-full border rounded-md py-2 px-3 text-gray-700"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="w-full border rounded-md py-2 px-3 text-gray-700"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mr-2"
                disabled={isSubmitting}
              >
                Login
              </button>
              <button
                type="button"
                className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-md"
                onClick={handleBackClick}
              >
                Back
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  };

  const renderRegisterForm = () => {
    return (
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={registerSchema}
          onSubmit={(values, { setSubmitting }) => {
            // Handle register form submission here
            createTeacher(values);
            console.log("Register form submitted with values:", values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="w-full border rounded-md py-2 px-3 text-gray-700"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="w-full border rounded-md py-2 px-3 text-gray-700"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="w-full border rounded-md py-2 px-3 text-gray-700"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mr-2"
                disabled={isSubmitting}
              >
                Register
              </button>
              <button
                type="button"
                className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-md"
                onClick={handleBackClick}
              >
                Back
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  };


  return (
    <div className="p-20 text-gray-100">
      {!showLogin && !showRegister && (
        <div className=" flex flex-col mb-4">
          <button
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-2 px-4 rounded-md mr-2"
            onClick={handleLoginClick}
          >
            Login
          </button>
          <br />

          <h2 className="font-bold">OR</h2>
          <br />
          <button
            className="bg-amber-100 hover:bg-amber-200 text-slate-900 font-semibold py-2 px-4 rounded-md mr-2"
            onClick={handleRegisterClick}
          >
            Register
          </button>
        </div>
      )}
      {showLogin && <LoginForm />}
      {showRegister && <RegisterForm />}
    </div>
  );
};

export default TeacherForms;
