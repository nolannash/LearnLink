import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AppContext } from "../../../AppContext";
import { useNavigate } from "react-router-dom";

const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const TeacherRegister = () => {
  const { createTeacher } = useContext(AppContext);
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    // Call your createTeacher function with the form values here
    createTeacher(values);
  };

  const handleBackClick = () => {
    navigate("/");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="grid grid-cols-5 grid-rows-5 justify-items-center h-[98vh]">
      <button
        type="button"
        className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded-md self-center"
        onClick={handleBackClick}
      >
        Back &larr;
      </button>
      <h2 className="text-xl font-semibold mb-4 col-start-2 row-start-2 col-span-3 self-end p-6">
        <span>Join </span>
        <span className=" text-3xl font-bold italic text-green-900">
          learnlink
        </span>
      </h2>
      <form
        onSubmit={formik.handleSubmit}
        className="col-start-3 row-start-3 row-span-2 flex flex-col items-center"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className={`w-full py-2 px-3 text-gray-700 bg-amber-50 border-b-2 border-stone-950 ${
              formik.errors.name && formik.touched.name ? "border-red-500" : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={`w-full py-2 px-3 text-gray-700 bg-amber-50 border-b-2 border-stone-950 ${
              formik.errors.email && formik.touched.email
                ? "border-red-500"
                : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className={`w-full py-2 px-3 text-gray-700 bg-amber-50 border-b-2 border-stone-950 ${
              formik.errors.password && formik.touched.password
                ? "border-red-500"
                : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.password}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-3 px-6 rounded-md"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default TeacherRegister;
