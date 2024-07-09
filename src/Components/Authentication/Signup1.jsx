import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

function Signup1() {
    const navigate = useNavigate()
        const validationSchema = Yup.object({
          firstName: Yup.string().required('First Name is required'),
          lastName: Yup.string().required('Last Name is required'),
          email: Yup.string().email('Invalid email address').required('Email is required'),
          password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        });
  return (
    <>
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              console.log(values);
              setSubmitting(false);
              resetForm();
            //   navigate('/home')
              alert('Signup successful!');
              
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full p-2 bg-blue-600 text-white rounded"
                >
                  {isSubmitting ? 'Signing up...' : 'Sign Up'}
                </button>
                <Link to={'/login'}><p className="text-sm text-center m-3"> already have an account please? <span className="text-red-600 cursor-pointer ">Login</span></p>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    </>
  );
}

export default Signup1;
