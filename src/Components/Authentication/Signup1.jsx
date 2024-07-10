import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup1() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const validationSchema = Yup.object({
    userName: Yup.string().required("UserName is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log("Form values:", values);
    try {
      const response = await axios.post("http://localhost:3000/signup", values);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error during signup:", error);
      if (error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("");
      }
    }
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
        <Formik
          initialValues={{
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Field
                  type="text"
                  name="userName"
                  placeholder="UserName"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <p className="text-red-500 text-center">{error} </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full p-2 bg-blue-600 text-white rounded"
                >
                  {isSubmitting ? "Signing up..." : "Sign Up"}
                </button>
                <Link to="/login">
                  <p className="text-sm text-center m-3">
                    Already have an account?{" "}
                    <span className="text-red-600 cursor-pointer">Login</span>
                  </p>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Signup1;
