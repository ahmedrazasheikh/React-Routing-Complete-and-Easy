

import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
function App () {


  const validationSchema = Yup.object({
       name: Yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });
  const formik = useFormik({
    initialValues: {
      name : '', 
      profile : '',
    },
    validationSchema: validationSchema, 
    onSubmit:async  (values) => {
   const data = new FormData()
data.append("file", values.profile)
data.append("upload_preset", "qhahkeke")
data.append("cloud_name","dxm7stflg")
  const response =   await   fetch(" https://api.cloudinary.com/v1_1/dxm7stflg/image/upload",
  { method:"post", body: data})
  const json = await response.json();
  console.log(json)
    },
  });

  return (
    <div>

      <form  onSubmit={formik.handleSubmit} >

        <input type="file" name="profile" onChange={(e)=> formik.setFieldValue("profile", e.target.files[0]) }    /> <br />

  <input type="text" onChange={formik.handleChange}  value={formik.name}  name="name"  />
   <br />  <br />


  <button  type="submit" >Click Here</button>



      </form>
    </div>
  )
}


export default App; 