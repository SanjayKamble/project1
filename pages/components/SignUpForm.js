// Form without library for state management or validation

import Link from 'next/link'
import React, { useState, useReducer, useEffect } from 'react'
import Image from 'next/image';
import CountryPhone from './PhonePlugin/CountryPhone';
import FilteringTable from '../table/FilteringTable';
import {COLUMNS} from '../table/columns';



const reducer = (state, action) => {

    switch (action.type) {
        case "TYPE_OF_ENTITY":
            return { ...state, typeOfEntity: action.payload }
        case "ORGANIZATION2":
            return { ...state, nameOfOrganization: action.payload }
        case "FULLNAME":
            return { ...state, fullName: action.payload }
        case "EMAILID":
            return { ...state, emailId: action.payload }
        case "COUNTRY_CODE":
            return { ...state, countryCode: action.payload }
        case "PHONE":
            return { ...state, phone: action.payload }
        case "PASSWORD":
            return { ...state, password: action.payload }
        case "REPEAT_PASSWORD":
            return { ...state, repeatPassword: action.payload }
        case "ROBOT":
            return { ...state, robot: !state.robot }
        default:
            break;
    }
}
const SignUpForm = () => {
    const [btnCol, setBtnCol] = useState(" bg-blue-600 text-white ")

    const [nameOfOrganization, setNameOfOrganization] = useState(false);
    const [lengthOfOrganization, setLenghtOfOrganization] = useState(false);

    const [fullName, setFullName] = useState(false);
    const [lengthOfPersonName, setLenghtOfPersonName] = useState(false);

    const [emailId, setEmailId] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);

    const [invalidPassword, setInvalidPassword] = useState(false);
    const [passwordNotMatchingMessage, setPasswordNotMatchingMessage] = useState(false);
    const [verifyYourself, setVerifyYourself] = useState(false);

    const [state, dispatch] = useReducer(reducer, {
        typeOfEntity: "organization",
        nameOfOrganization: "",
        fullName: "",
        emailId: "",
        countryCode: "",
        phone: "",
        password: "",
        repeatPassword: "",
        robot: false
    })

    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const emailSpecialFormat = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
    const beforeAbstrate = /[ `!#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log("In handleSubmit function")

        // console.log(state.emailId.charAt(state.emailId.indexOf("@") + 1));

        if (state.nameOfOrganization === "") setNameOfOrganization(true);
        else if (state.nameOfOrganization.length < 3) setLenghtOfOrganization(true);

        if (state.fullName === "") setFullName(true);
        else if (state.fullName.length < 3) setLenghtOfPersonName(true);


        if (state.emailId === "") setEmailId(true);
        else if (!state.emailId.includes('@')) setInvalidEmail(true);// to check if id contains @
        else if (state.emailId.slice(-1) == "@") setInvalidEmail(true); // to check if last character is not @
        else if (!state.emailId.slice(-(state.emailId.length - state.emailId.indexOf("@"))).includes('.')) setInvalidEmail(true); // to check if . is present after @ 
        else if (state.emailId.slice(-1) == ".") setInvalidEmail(true); // to check if last character is not .
        else if (state.emailId.charAt(state.emailId.indexOf("@") + 1) == ".") setInvalidEmail(true); // to check if immediate character after @ is not .
        else if (emailSpecialFormat.test(state.emailId.slice(-(state.emailId.length - state.emailId.indexOf("@")) + 1))) setInvalidEmail(true); // to check if there is no special character after @ except .
        else if (beforeAbstrate.test(state.emailId.slice(0, state.emailId.indexOf("@")))) setInvalidEmail(true); // to check if there is no special character before @ except _


        // console.log(state.emailId.slice((state.emailId.length - state.emailId.indexOf("@"))+1))


        const str = ' hellohowareyou';
        // console.log(str.split(" ").length);
        console.log(/\s/.test(str));
        console.log(str.length)

        if (!format.test(state.password)) setInvalidPassword(true);
        if (!/[a-z]/.test(state.password)) setInvalidPassword(true);
        if (!/[A-Z]/.test(state.password)) setInvalidPassword(true);
        if (!/\d/.test(state.password)) setInvalidPassword(true);

        if (state.password !== state.repeatPassword) setPasswordNotMatchingMessage(true);
        if (state.robot === false) setVerifyYourself(true);

        // console.log(state);

        fetch('http://localhost:3005/Users/', {
            method: 'POST',
            body: JSON.stringify({
                typeOfEntity: state.typeOfEntity,
                nameOfOrganization: state.nameOfOrganization,
                fullName: state.fullName,
                emailId: state.emailId,
                countryCode: state.countryCode,
                phone: state.phone,
                password: state.password,
                repeatPassword: state.repeatPassword,
                id: new Date()

            }),
            headers: {
                'Content-type': 'application/json',
            },
        }).then((response) => response.json())
            .then((result) => {
                alert("Record inserted")
                console.log(result);
            })

    }

    useEffect(() => {
        setPasswordNotMatchingMessage(false);
    }, [state.repeatPassword])

    useEffect(() => {



        if (!format.test(state.password)) setInvalidPassword(true);
        else if (!/\d/.test(state.password)) setInvalidPassword(true);
        else if (!/[A-Z]/.test(state.password)) setInvalidPassword(true);
        else if (!/\d/.test(state.password)) setInvalidPassword(true);
        else setInvalidPassword(false);

        if (state.password == "") setInvalidPassword(false);
    }, [state.password])

    useEffect(() => {

        if (!state.emailId.includes('@')) setInvalidEmail(true);// to check if id contains @
        else if (state.emailId.slice(-1) == "@") setInvalidEmail(true); // to check if last character is not @
        else if (!state.emailId.slice(-(state.emailId.length - state.emailId.indexOf("@"))).includes('.')) setInvalidEmail(true); // to check if . is present after @ 
        else if (state.emailId.slice(-1) == ".") setInvalidEmail(true); // to check if last character is not .
        else if (state.emailId.charAt(state.emailId.indexOf("@") + 1) == ".") setInvalidEmail(true); // to check if immediate character after @ is not .
        else if (emailSpecialFormat.test(state.emailId.slice(-(state.emailId.length - state.emailId.indexOf("@")) + 1))) setInvalidEmail(true); // to check if there is no special character after @ except .
        else if (beforeAbstrate.test(state.emailId.slice(0, state.emailId.indexOf("@")))) setInvalidEmail(true); // to check if there is no special or space character before @ except _
        else setInvalidEmail(false);

        if (state.emailId == "") setInvalidEmail(false);

    }, [state.emailId])

    useEffect(() => {

        if (/\w/.test(state.nameOfOrganization)) setNameOfOrganization(false);
        if (/\w/.test(state.fullName)) setFullName(false);
        if (/\w/.test(state.emailId)) setEmailId(false);
        if (/\w/.test(state.repeatPassword)) setPasswordNotMatchingMessage(false);

        if (state.robot === true) setVerifyYourself(false);

        if (state.nameOfOrganization.length == "") setLenghtOfOrganization(false)
        else if (state.nameOfOrganization.length > 2) setLenghtOfOrganization(false)
        else setLenghtOfOrganization(true);

        if (state.fullName.length == "") setLenghtOfPersonName(false)
        else if (state.fullName.length > 2) setLenghtOfPersonName(false)
        else setLenghtOfPersonName(true);


        // console.log(state);

    }, [state])

    // useEffect(() => {
      
    
      
    //     fetch("http://localhost:3005/Users")
    //         .then((response) => response.json())
    //         .then((result) => {
    //             console.log(result)
    //         })
    
    // }, [])
    

    return (
        <>
            <div className='flex flex-col w-full md:w-1/2 m-10 p-20'>

                <div className='font-bold text-2xl text-slate-800'>Sign Up</div>
                <div> Having an account ?
                    <Link className='text-blue-600' href="/SignIn"> Sign-in </Link>
                    here</div>

                <form className='flex flex-col' onSubmit={handleSubmit} autoComplete="off">
                    <div className='mt-6'>What are you looking for ? </div>
                    <div className='flex flex-col md:flex-row'>
                        <div className='flex border rounded-md bg-blue-600 text-white px-8 py-4 mr-2 mt-2'>
                            <input className='h-5 w-5' type="radio" id="organization1" value={state.typeOfEntity} defaultChecked
                                onChange={e => dispatch({ type: "TYPE_OF_ENTITY", payload: e.target.value })}
                                name="entityType" />
                            <label className='ml-2' htmlFor="organization1">Organization</label>

                        </div>
                        <div className='flex border rounded-md text-black px-8 py-4 mx-2 mt-2'>
                            <input className='h-5 w-5' type="radio" id="personal" name="entityType" value="personal"
                                onChange={e => dispatch({ type: "TYPE_OF_ENTITY", payload: e.target.value })} />
                            <label className='ml-2' htmlFor="personal">Personal</label>
                        </div>
                    </div>

                    <label className='mt-6 text-gray-700' htmlFor="organization2">Organization name</label>
                    <input className='border border-gray-700 pl-3 h-10 rounded-md mt-2' type="text" id="organization2"
                        onChange={e => dispatch({ type: "ORGANIZATION2", payload: e.target.value })} placeholder='Enter here' />
                    {nameOfOrganization ? <span className='text-red-500 text-sm'>Name of organization cannot be empty</span> : ""}
                    {lengthOfOrganization ? <span className='text-red-500 text-sm'> Must contain atleast 3 characters</span> : ""}

                    <label className='mt-6  text-gray-700' htmlFor="fullName">Full name</label>
                    <input maxLength="50" className='border border-gray-700 pl-3 h-10 rounded-md mt-2' type="text" id="fullName"
                        onChange={e => dispatch({ type: "FULLNAME", payload: e.target.value })} placeholder='Enter here' />
                    {fullName ? <span className='text-red-500 text-sm'>Name cannot be empty</span> : ""}
                    {lengthOfPersonName ? <span className='text-red-500 text-sm'>Name of person should have atleast 3 characters</span> : ""}

                    <label className='mt-6  text-gray-700' htmlFor="emailId">Email ID</label>
                    <input className='border border-gray-700 pl-3 h-10 rounded-md mt-2' type="text" id="emailId"
                        onChange={e => dispatch({ type: "EMAILID", payload: e.target.value })} placeholder='Enter here' errormessage="email should be valid" />
                    {emailId ? <span className='text-red-500 text-sm'>Email Id cannot be empty</span> : ""}
                    {invalidEmail ? <span className='text-red-500 text-sm'> Invalid email</span> : ""}
                    <label className='mt-6  text-gray-700' htmlFor="phone">Phone</label>
                    <div className='flex'>
                        <input required className='border border-gray-700 pl-3 h-10 rounded-md mt-2 w-1/5' type="text"
                            onChange={e => dispatch({ type: "COUNTRY_CODE", payload: e.target.value })} />
                        <input requiredmin="5" max="15" className='border border-gray-700 pl-3 h-10 rounded-md mt-2 w-full ml-2' type="tel"
                            onChange={e => dispatch({ type: "PHONE", payload: e.target.value })} name="phone" id="phone" placeholder='Enter here' />
                    </div>

                    {/* <CountryPhone></CountryPhone> */}
                    <label className='mt-6  text-gray-700' htmlFor="password">Password</label>
                    <input min="8" max="20" className='border border-gray-700 pl-3 h-10 rounded-md mt-2'
                        onChange={e => dispatch({ type: "PASSWORD", payload: e.target.value })} type="text" id="password" placeholder='Enter here' />
                    {invalidPassword ? <span className='text-sm text-red-500'>Password should contain atleast one number,one uppercase, one lowercase and one special character</span> : ""}

                    <label className='mt-6  text-gray-700' htmlFor="password2">Repeat Password</label>
                    <input min="8" max="20" className='border border-gray-700 pl-3 h-10 rounded-md mt-2'
                        onChange={e => dispatch({ type: "REPEAT_PASSWORD", payload: e.target.value })} type="text" id="password2" placeholder='Enter here' />

                    {passwordNotMatchingMessage ? <span className='text-sm text-red-500'>Passwords do not match</span> : ""}
                    <div className='flex justify-between border-4 border-gray-400 bg-slate-100 mt-4'>
                        <div className='grid grid-cols-3 content-center'>
                            <input className='h-5 w-5 ml-4' type="checkbox" id="humanVerification" checked={state.robot}
                                onChange={e => dispatch({ type: "ROBOT" })} />
                            <label className='col-span-2' htmlFor="humanVerification">I'm not a robot</label>
                        </div>
                        <div className='flex flex-col justify-items-center mr-2 my-4'>
                            <Image className='mx-auto' src='/ReCaptchaLogo.svg.png' width={60} height={60} alt="captcha here" />
                            <div className='flex flex-row'>
                                <div className='text-xs'>Privacy - </div>

                                <div className="text-xs ml-1">Terms</div>
                            </div>
                        </div>
                    </div>
                    {verifyYourself ? <span className='text-sm text-red-500'>Verify yourself</span> : ""}
                    <input className=' border rounded-md bg-blue-600 text-white mt-4 py-2 w-24' type="submit" value="Sign Up" />

                </form>


            </div>
        </>
    )
}

export default SignUpForm