import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Login() {

  const [error, setError] = useState('');
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
      });
      const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        console.log('Form values:', values);
        try {
          const response = await axios.post('http://localhost:3000/login', values);
          console.log('Response:', response.data);
        } catch (error) {
          console.error('Error during login:', error);
          if(error.response.data.error){
            setError(error.response.data.error);
          }else{
            setError('')
          }
        }
        setSubmitting(false);
        resetForm();
      }
    
  return (
   <>
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full p-2 bg-blue-600 text-white rounded"
                >
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
                <Link to={'/signup'}> <p>Dont have an Account please?</p> <span className='text-red-500 cursor-pointer'>Signup</span></Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
   </>
  )
}

export default Login