// https://codesandbox.io/s/formik-react-phone-number-input-p5jvs?file=/src/App.js:0-1062

import React from "react";
import FormikPhoneInput from "./CountryPhone2";
import { useFormik } from "formik";


const SignUpForm22 = () => {

    const initialValues = {
        email: "",
        phone: ""
    }
   
    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            console.log(values);
        }
    });

   
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <FormikPhoneInput
                name="phone"
                formik={formik}
                onChange={e => formik.setFieldValue("phone", e)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default SignUpForm22
