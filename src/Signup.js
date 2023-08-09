import React from "react";
import { Formik, from, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const Signup = () => {
  // initial schema of formik
  const defaultValue = {
    name: "",
    email: "",
    password: " ",
  };

  // validation schema
  const validationSchema = yup.object().shape({
    name: yup.string().required("please enter name"),
    email: yup.string().required().email("please enter email "),
    password: yup.string().required("pleas enter your passwords"),
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
        <form>
{/* bootstrap propertice className */}

          <div className="col-md-5 mt-4"> 
          <label>user name</label>
            <Field type="text" name="name" placeholder="Enter your name" />

            <p className="text-danger">
              <ErrorMessage name="name" />
            </p>
          </div>


  
        </form>
      </Formik>
    </>
  );
};

export default Signup;
