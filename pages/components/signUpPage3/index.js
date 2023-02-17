import React, { useRef, useState } from 'react'
import FormInput from './FormInput'


const SignUpPage3 = () => {
    const [state, setState] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmpassword: ""
    });

    const inputX = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "User name",
            label: "User Name"
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email ID",
            label: "Email"
        },
        {
            id: 3,
            name: "birthday",
            type: "text",
            placeholder: "Birth Day",
            label: "Birth day"
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password"
        },
        {
            id: 5,
            name: "confirmpassword",
            type: "password",
            placeholder: "Confirm Password",
            label: "Confirm password"
        },
    ]


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)

    }

    const onChange = e => setState({ ...state, [e.target.name]: e.target.value });

    console.log(state);
    return (
        <form onSubmit={handleSubmit}>
            {inputX.map(item => (
                <FormInput key={item.id} {...item} value={state[item.name]} x={onChange} />
            ))}


                    


            <button>Submit</button>
        </form>
    )
}

export default SignUpPage3