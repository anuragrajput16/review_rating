import React, { useState } from "react";

import "./login.css";
import left_img from "../../../assests/left_img.png";
import formBorderRight1_img from "../../../assests/formBorderRight1_img.jpg";
import formBorderLeft_img from "../../../assests/formBorderLeft_img.jpeg";

import { Formik, from, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const UserLogin = () => {
  // initial schema of formik
  const defaultValue = {
    email: "",
    password: " ",
  };

  // validation schema
  const validationSchema = yup.object().shape({
    email: yup.string().required().email("please enter email "),
    password: yup.string().required("please enter your passwords"),
  });

  // 3rd after handle submit
  const handleSubmit = (values) => {
    console.log("Values :", values);
  };

  return (
    <>
      <Formik
        initialValues={defaultValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div>
          {/* we have divide signup page into two parts left for user welcome and
          image second is form */}
          <div className="leftSide">
            <h1 id="left_heading">Welcome</h1>
            <p id="left_para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </p>
            <img id="left_img" src={left_img} alt="left img" />
          </div>

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
                <div id="align_login">
                  <b>Login</b>
                </div>
                <p id="form_para">
                  Hello! Please enter your details for login.
                </p>

                {/* first field */}
                <div>
                  <Field
                    type="email"
                    className="formData"
                    name="email"
                    placeholder="Email"
                  />

                  <p className="text-danger">
                    <ErrorMessage name="email" />
                  </p>
                </div>

                {/* second field   */}
                <div>
                  <Field
                    type="password"
                    className="formData"
                    name="password"
                    placeholder="Password"
                  />

                  <p className="text-danger">
                    <ErrorMessage name="password" />
                  </p>
                </div>

                <button type="submit" id="button">
                  Login
                </button>

                <hr id="under_Line"></hr>

                <p id="info">I don't have an account on Review & Rate'</p>
                {/* for register add signup componet */}
                <a href="">Register now</a>
              </center>
            </form>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default UserLogin;
