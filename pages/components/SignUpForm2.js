//Form using Formik , Yup and react-phone-number-input

import Link from 'next/link';
import Image from 'next/image';
import CountryPhone from './PhonePlugin/CountryPhone';
import { useFormik, Field,Form } from 'formik';
import { signupSchema } from '../schemas';

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

const SignUpForm2 = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues: initialValues,
        validationSchema: signupSchema,
        onSubmit: (v) => {
            console.log(v);
        }
    })

    console.log(values);

    return (
        <>
            <div className='flex flex-col w-full md:w-1/2 m-10 p-20'>

                <div className='font-bold text-2xl text-slate-800'>Sign Up</div>
                <div> Having an account ?
                    <Link className='text-blue-600' href="/SignIn"> Sign-in </Link>
                    here
                </div>

                <form className='flex flex-col' onSubmit={handleSubmit} autoComplete="off">
                    <div id="my-radio-group" className='mt-6'>What are you looking for ? </div>
                    <div role="group" aria-labelledby="my-radio-group" className='flex flex-col md:flex-row'>
                        <div className='flex border rounded-md bg-blue-600 text-white px-8 py-4 mr-2 mt-2'>
                            <input className='h-5 w-5'
                                type="radio"
                                id="organization1"
                                defaultChecked
                                name="typeOfEntity"
                                value="Organization"
                            />
                            <label className='ml-2' htmlFor="organization1">Organization</label>

                        </div>
                        <div className='flex border rounded-md text-black px-8 py-4 mx-2 mt-2'>
                            <input className='h-5 w-5'
                                type="radio"
                                id="personal"
                                name="typeOfEntity"
                                value="Personal"
                            />
                            <label className='ml-2' htmlFor="personal">Personal</label>
                        </div>
                    </div>

                    <label className='mt-6 text-gray-700' htmlFor="organization2">Organization name</label>
                    <input className='border border-gray-700 pl-3 h-10 rounded-md mt-2'
                        name='nameOfOrganization'
                        type="text"
                        id="organization2"
                        value={values.nameOfOrganization}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Enter here'
                    />
                    {errors.nameOfOrganization && touched.nameOfOrganization ? <span className='text-red-500 text-sm'>{errors.nameOfOrganization}</span> : ""}

                    <label className='mt-6  text-gray-700' htmlFor="fullName">Full name</label>
                    <input className='border border-gray-700 pl-3 h-10 rounded-md mt-2'
                        name='fullName'
                        type="text"
                        id="fullName"
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Enter here'
                    />

                    {touched.fullName && errors.fullName ? <span className='text-red-500 text-sm'>{errors.fullName}</span> : null}
                    

                    <label className='mt-6  text-gray-700' htmlFor="emailId">Email ID</label>
                    <input className='border border-gray-700 pl-3 h-10 rounded-md mt-2'
                        name='emailId'
                        type="text"
                        id="emailId"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Enter here'
                    />
                    {touched.emailId && errors.emailId ? <span className='text-red-500 text-sm'>{errors.emailId}</span> : null}
                    
                    <label className='mt-6  text-gray-700' htmlFor="phone">Phone</label>

                    <CountryPhone placeholder="Enter here"
                        defaultCountry='IN'
                        name="phone"
                        value={values.phone}
                        onChange={e => setFieldValue("phone", e)} />

                    {/* <PhoneInput
                        placeholder="Enter here"
                        defaultCountry='IN'
                        name="phone"
                        value={values.phone}
                        onChange={e => setFieldValue("phone", e)}
                    /> */}
                    {touched.phone && errors.phone ? <span className='text-red-500 text-sm'>{errors.phone}</span> : null }
                    <label className='mt-6  text-gray-700' htmlFor="password">Password</label>
                    <input className='border border-gray-700 pl-3 h-10 rounded-md mt-2'
                        name='password'
                        type="text"
                        value={values.password}
                        id="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Enter here'
                    />

                    {touched.password && errors.password ? <span className='text-red-500 text-sm'>{errors.password}</span> : null }
                    

                    <label className='mt-6  text-gray-700' htmlFor="password2">Repeat Password</label>
                    <input className='border border-gray-700 pl-3 h-10 rounded-md mt-2'
                        name='repeatPassword'
                        type="text"
                        id="password2"
                        value={values.repeatPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Enter here'
                    />
                    {touched.repeatPassword && errors.repeatPassword ? <span className='text-red-500 text-sm'>{errors.repeatPassword}</span> : null }
                    
                    <div className='flex justify-between border-4 border-gray-400 bg-slate-100 mt-4'>
                        <div className='grid grid-cols-3 content-center'>
                            <input className='h-5 w-5 ml-4'
                                type="checkbox"
                                id="humanVerification"
                                name='robot'
                                value={values.robot}
                                onChange={handleChange}
                                onBlur={handleBlur}

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

                    <input className=' border rounded-md bg-blue-600 text-white mt-4 py-2 w-24' type="submit" value="Sign Up" />

                </form>
            </div>
        </>

    )
}

export default SignUpForm2