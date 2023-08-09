import React from "react";
import { Formik, from, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./signup.css";
import formBorderRight1_img from "../../../assests/formBorderRight1_img.jpg";
import formBorderLeft_img from "../../../assests/formBorderLeft_img.jpeg";
// initial schema of formik
const defaultValue = {
  fullName: "",
  email: "",
  phoneNumber: "",
  city: "",
  state: "",
};

// validation schema
const validationSchema = yup.object().shape({
  fullName: yup.string().required("please enter name"),
  email: yup.string().required().email("please enter email "),
  phoneNumber: yup.string().required("please enter Number"),
  city: yup.string().required("please select city "),
  state: yup.string().required("please select state"),
});

// 3rd after handle submit
const handleSubmit = (values) => {
  console.log("Values :", values);
};

const UserSignup = () => {
  return (
    <>
      <Formik
        initialValues={defaultValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {/* second side is for form  */}

        <div className="rightSide">
          <form>
            <img
              id="formBorderRight1_img"
              src={formBorderRight1_img}
              alt="img"
            />
            <img id="formBorderLeft_img" src={formBorderLeft_img} alt="img" />
            <center>
              <div id="align_signup">
                <b>Signup</b>
              </div>

              {/* first field */}
              <div>
                <Field
                  type="text"
                  className="formData"
                  name="fullName"
                  placeholder="Full Name"
                />

                <p className="text-danger">
                  <ErrorMessage name="fullName" />
                </p>
              </div>

              {/* second field   */}
              <div>
                <Field
                  type="email"
                  className="formData"
                  name="email"
                  placeholder="email"
                />

                <p className="text-danger">
                  <ErrorMessage name="email" />
                </p>
              </div>

              {/* thred field phone number  phoneNumber */}
   
              <div>
                <Field
                  type="text"
                  className="formData"                                                                
                  name="  phoneNumber"
                  placeholder="number"
                />

                <p className="text-danger">
                  <ErrorMessage name="phoneNumber" />
                </p>
              </div>
{/* 4 field  city */} 
<div>
 <select id="city"   name="city" className="formData" placeholder="city">
                <option value="indore" >indore</option>
                <option value="puna" >puna</option>
                <option value="goa" >goa</option>
                <option value="bhopal" >bhopal</option>
             </select>
             <p className="text-danger">
                  <ErrorMessage name="city" />
              </p>    
</div>


    {/* 5 field state */}
    <select id="state"  className="formData" placeholder="state "  >
                <option value="MP" >MP</option>
                <option value="UP" >UP</option>
                <option value="GJ" >GJ</option>
                <option value="MH" >MH</option>
             </select>
              <button type="submit" id="button">
                Signup
              </button>
             
      

              <hr id="under_Line"></hr>

              <p id="info">I already have an account <a href="" id = "login_link">Login</a></p>
              
           
            </center>
          </form>
        </div>
      </Formik>
    </>
  );
};

export default UserSignup;
