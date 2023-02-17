//Form using Formik , Yup and react-phone-number-Field

import Link from 'next/link';
import Image from 'next/image';
import CountryPhone from './PhonePlugin/CountryPhone';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signupSchema } from '../schemas';
import InputError from './InputError';



const initialValues = {

    typeOfEntity: "",
    nameOfOrganization: "",
    fullName: "",
    emailId: "",
    phone: "",
    password: "",
    repeatPassword: "",
    robot: false
}
const SignUpForm2Optimized = () => {


    const onSubmit = v => {
        console.log(v);
    }

    const validatePhone = values => {
        let error;
        if (!values) {
            error = 'Required';
        }
        return error;
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signupSchema}
            onSubmit={onSubmit}
        >
            {props => (
                <div className='flex flex-col w-full md:w-1/2 m-10 p-20'>

                    <div className='font-bold text-2xl text-slate-800'>Sign Up
                    </div>

                    <div> Having an account ?
                        <Link className='text-blue-600' href="/SignIn"> Sign-in </Link>
                        here
                    </div>

                    <Form className='flex flex-col' autoComplete="off">
                        <div className='mt-6'>What are you looking for ? </div>
                        <div className='flex flex-col md:flex-row'>
                            <div className='flex border rounded-md bg-blue-600 text-white px-8 py-4 mr-2 mt-2'>
                                <Field className='h-5 w-5'
                                    type="radio"
                                    id="organization1"
                                    // defaultChecked
                                    name="typeOfEntity"
                                    value="Organization"
                                />
                                <label className='ml-2' htmlFor="organization1">Organization</label>

                            </div>
                            <div className='flex border rounded-md text-black px-8 py-4 mx-2 mt-2'>
                                <Field className='h-5 w-5'
                                    type="radio"
                                    id="personal"
                                    name="typeOfEntity"
                                    value="Personal"
                                />
                                <label className='ml-2' htmlFor="personal">Personal</label>
                            </div>
                        </div>

                        <label className='mt-6 text-gray-700' htmlFor="organization2">Organization name</label>
                        <Field className='border border-gray-700 pl-3 h-10 rounded-md mt-2'
                            name='nameOfOrganization'
                            type="text"
                            id="organization2"
                            placeholder='Enter here'
                        />
                        <ErrorMessage name='nameOfOrganization' component={InputError} />

                        <label className='mt-6  text-gray-700' htmlFor="fullName">Full name</label>
                        <Field className='border border-gray-700 pl-3 h-10 rounded-md mt-2'
                            name='fullName'
                            type="text"
                            id="fullName"
                            placeholder='Enter here'
                        />
                        <ErrorMessage name="fullName" component={InputError} />

                        <label className='mt-6  text-gray-700' htmlFor="emailId">Email ID</label>
                        <Field className='border border-gray-700 pl-3 h-10 rounded-md mt-2'
                            name='emailId'
                            type="text"
                            id="emailId"
                            placeholder='Enter here'
                        />
                        <ErrorMessage name="emailId" component={InputError} />

                        <label className='mt-6  text-gray-700' htmlFor="phone">Phone</label>

                        <Field name="phone" component={CountryPhone} onChange={e => props.setFieldValue("phone", e)} validate={validatePhone}></Field>
                        {/* <CountryPhone placeholder="Enter here"
                            defaultCountry='IN'
                            name="phone"
                            onChange={e => props.setFieldValue("phone", e)}
                       />  */}
                        {/* {console.log(props)} */}
                        <ErrorMessage name="phone" component={InputError} />

                        <label className='mt-6  text-gray-700' htmlFor="password">Password</label>
                        <Field className='border border-gray-700 pl-3 h-10 rounded-md mt-2'
                            name='password'
                            type="text"
                            id="password"
                            placeholder='Enter here'

                        />
                        <ErrorMessage name="password" component={InputError} />

                        <label className='mt-6  text-gray-700' htmlFor="password2">Repeat Password</label>
                        <Field className='border border-gray-700 pl-3 h-10 rounded-md mt-2'
                            name='repeatPassword'
                            type="text"
                            id="password2"
                            placeholder='Enter here'
                        />
                        <ErrorMessage name="repeatPassword" component={InputError} />


                        <div className='flex justify-between border-4 border-gray-400 bg-slate-100 mt-4'>
                            <div className='grid grid-cols-3 content-center'>
                                <Field className='h-5 w-5 ml-4'
                                    type="checkbox"
                                    id="humanVerification"
                                    name='robot'

                                />
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



                        <Field className=' border rounded-md bg-blue-600 text-white mt-4 py-2 w-24' name='submit' type="submit" value="Sign Up" />

                    </Form>
                </div>
            )
            }

        </Formik>

    )
}

export default SignUpForm2Optimized