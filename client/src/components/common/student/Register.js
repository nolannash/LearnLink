import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AppContext } from '../../../AppContext';

const registerSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    accesscode: Yup.string().required('Access code is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

const RegisterForm = () => {
    const { createStudent } = useContext(AppContext);

    const handleSubmit = (values) => {
        // Call your createStudent function with the form values here
        createStudent(values);
      };
  
      const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: '',
          'access-code': '',
        },
        validationSchema: registerSchema,
        onSubmit: handleSubmit,
      });
    
    
      return (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-4">Register</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className={`w-full border rounded-md py-2 px-3 text-gray-700 ${
                  formik.errors.name && formik.touched.name ? 'border-red-500' : ''
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
            <div className="mb-4">
              <label htmlFor="access-code" className="block text-gray-700 text-sm font-semibold mb-2">
                Access Code
              </label>
              <input
                type="text"
                name="access-code"
                id="access-code"
                className={`w-full border rounded-md py-2 px-3 text-gray-700 ${
                  formik.errors['access-code'] && formik.touched['access-code'] ? 'border-red-500' : ''
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values['access-code']}
              />
              {formik.errors['access-code'] && formik.touched['access-code'] && (
                <p className="text-red-500 text-sm mt-1">{formik.errors['access-code']}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mr-2"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              Register
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

export default RegisterForm;