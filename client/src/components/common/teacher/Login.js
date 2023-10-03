import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AppContext } from '../../../AppContext';


const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

const LoginForm = () => {
    const { loginTeacher } = useContext(AppContext);
    const handleSubmit = (values) => {
        // Call your loginTeacher function with the form values here
        loginTeacher(values.email, values.password);
      };
  
      const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: loginSchema,
        onSubmit: handleSubmit,
      });

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={`w-full border rounded-md py-2 px-3 text-gray-700 ${
              formik.errors.email && formik.touched.email ? 'border-red-500' : ''
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
          <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className={`w-full border rounded-md py-2 px-3 text-gray-700 ${
              formik.errors.password && formik.touched.password ? 'border-red-500' : ''
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mr-2"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          Login
        </button>
        {/* <button
          type="button"
          className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-md"
          onClick={handleBackClick}
        >
          Back
        </button> */}
      </form>
    </div>
  );
};

export default LoginForm;