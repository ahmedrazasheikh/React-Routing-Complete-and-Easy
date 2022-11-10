

import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

function App () {


  const validationSchema = Yup.object({
    email: Yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema, 
    onSubmit: (values) => {
     console.log(values)
    },
  });

  return (
    <div>

      <form  onSubmit={formik.handleSubmit} >
      <label >Email:</label>
<input type="text"  name="email" onChange={formik.handleChange}  value={formik.values.email}  /> <br /><br />

{/*  */}
{formik.errors.email && formik.touched.email ?<p className="tr">{formik.errors.email}</p> : null }
<label>Password:</label>
<input type="password"   name="password"   value={formik.values.password}  onChange={formik.handleChange} /> <br /><br />
{/* <p>{formik.errors.password}</p> */}
{formik.errors.password && formik.touched.password ?<p className="tr" >{formik.errors.password}</p> : null }
  <button  type="submit" >Click Here</button>


      </form>
    </div>
  )
}


export default App; 