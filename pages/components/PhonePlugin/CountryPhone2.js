import React from "react";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-number-input";


// https://codesandbox.io/s/formik-react-phone-number-input-p5jvs?file=/src/App.js:0-1062
const FormikPhoneInput = React.forwardRef(
  ({ name, onChange, formik, ...rest }, ref) => (
    <PhoneInput {...rest} ref={ref} name={name} onChange={onChange} />
  )
);

FormikPhoneInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  formik: PropTypes.shape({
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired
  }).isRequired
};

export default FormikPhoneInput;