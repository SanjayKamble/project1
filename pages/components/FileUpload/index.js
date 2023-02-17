import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as yup from "yup";
import KErrorMessage from './KErrorMessage';

const validationSchema = yup.object({
    name: yup.string().required("Name is Required!"),
    phone: yup
        .number()
        .min(1000000000, "Not Valid Phone Number!")
        .max(9999999999, "Not Valid Phone Number!")
        .required("Phone is Required!"),
    password: yup
        .string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        )
        .required("Password is Required!"),
    gender: yup.string().required("Gender is Required!"),
    date: yup.date().required("Date of Birth is required"),
    income: yup.string().required("Required"),
    about: yup
        .string()
        .min(5, "too small!")
        .max(500, "Too Long String")
        .required("Required"),
    social: yup
        .array()
        .of(
            yup
                .string("String is Required!")
                .min(4, "Too Short")
                .max(20, "Too Long")
                .required("Required")
        )
        .min(1, "Atleast One Social Media is Required!")
        .required("Required"),
    hobbies: yup
        .array()
        .of(
            yup
                .string("String is Required!")
                .min(4, "Too Short")
                .max(20, "Too Long")
                .required("Required")
        )
        .min(1, "Atleast One Hobbies is Required!")
        .required("Required"),
});
const FileUp = () => {
    return (
        <div>
            <Formik

                initialValues={{

                    file: ""
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ values, setFieldValue }) => (


                    <Form>
                        <input
                            type='file'
                            // name="file"
                            onChange={e => setFieldValue("file", e.target.files[0])}
                        ></input>
                        <button type="submit" className="bg-gray-400">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FileUp;