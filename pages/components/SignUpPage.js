import React from 'react'
import SignUpForm22 from './PhonePlugin/SignUpForm22'
import SignUpForm from './SignUpForm'
import SignUpForm2 from './SignUpForm2'
import SignUpForm2Optimized from './SignUpForm2Optimized'
import SignUpPageImage from './SignUpPageImage'
import MultiSelect1 from './Multiselect'
import ReactSelect from './Multiselect/ReactSelect'
import ReactSelectSingle from './Multiselect/ReactSelectSingle'
import ReactSelectMulti from './Multiselect/ReactSelectMulti'
import FileUp from './FileUpload'
import Switch from './Switch'
import DragDrop from './FileUpload/DragDrop'
const SignUpPage = () => {
    return (
        <div className='flex flex-col m-10 '>

            {/* Without any library */}
            <SignUpForm></SignUpForm>

            {/* Formik */}
            {/* <SignUpForm2></SignUpForm2>  */}

            {/* Formik Optimized */}
            {/* <SignUpForm2Optimized></SignUpForm2Optimized>  */}

            {/* <SignUpPageImage></SignUpPageImage> */}

            {/* Multi select */}
            {/* <MultiSelect1></MultiSelect1> */}
            {/* <ReactSelect></ReactSelect> */}
            {/* <ReactSelectSingle></ReactSelectSingle> */}

            {/* <ReactSelectMulti></ReactSelectMulti> */}

            {/* <Switch></Switch> */}
            {/* <FileUp></FileUp> */}
            {/* <DragDrop></DragDrop> */}

        </div>
    )
}

export default SignUpPage