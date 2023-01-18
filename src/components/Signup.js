import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Input from './common/Input';
import RadioInputs from './common/RadioInputs';
import SelectOptionInput from './common/SelectOptionInput';
// import Checkbox from './common/Checkbox';
import styles from './SignUp.module.css';
import Image from './common/Image';

// 1.manage state 
// 2.handle form submission 
// 3.validation - error message --> we add yup for this
// 4. formik --> use formik hook --> useFormik

const radioOptions = [
    {label: "Male", value: "0"},
    {label: "Female", value: "1"}
];

const selectOptions = [
    {label: "Select Nationality", value :""},
    {label: "Iranian", value :"IR"},
    {label: "American", value :"AM"},
    {label: "German", value :"GE"},
];

// const checkBoxOptions = [
//     {label: "Single", value: "Single"},
//     {label: "Married", value: "Married"},
//     {label: "Not willing to say", value: "Not willing to say"}
// ];

// 1. 
const initialValues = {
    name: "",
    email: "",
    password: "",
    phoneNumber : "",
    confirmPassword: "",
    gender: "",
    nationality: "",
    interests:[],
    terms: false, 
};

// 2. 
const onSubmit = (values) =>{
    axios.post('http://localhost:3001/users', values).then(
        response => console.log(response)
    ).catch(error => console.log(error))
};

// 3. 
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required")
    .min(8, 'Password should have minimum 8 chars.')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
    confirmPassword: Yup.string().required("Password Confirm is required").oneOf([Yup.ref('password'), null], 'Passwords do not match'),
    phoneNumber: Yup.string().required("Phone Number is required").matches(phoneRegExp, 'Invalid Phone Number'),
    gender: Yup.string().required("Gender is required"),
    nationality: Yup.string().required('Please choose your nationality'),
    interests: Yup.array().min(1).required("Choose at least one item"),
    terms: Yup.boolean().oneOf([true],'Please accept the terms').required('Please accept the terms'),
});

const Signup = () => {

    const [formValues, setFormValues] = useState(null);

    // name, pass, email => submit => DB => redirect /panel 
    const formik = useFormik({
        initialValues: formValues || initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
        enableReinitialize: true
    });

    useEffect(()=>{
        axios.get('http://localhost:3001/users/1').then(response => {
            setFormValues(response.data);
        }).catch(error => console.log(error));
    }, [])

    return (
        <>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
               <Image />
               <div>
                    <Input label="Name" name="name" formik={formik} />
                    <Input label="Email" name="email" formik={formik} />
                    <Input label="Password" name="password" formik={formik} />
                    <Input label="Confirm Password" name="confirmPassword" formik={formik} />
                    <Input label="Phone Number" name="phoneNumber" formik={formik} />
                    <SelectOptionInput name="nationality" formik={formik} selectOptions={selectOptions} />
                    <RadioInputs name="gender" formik={formik} radioOptions={radioOptions} />
                    {/* <Checkbox name="interests" formik={formik} checkBoxOptions={checkBoxOptions} /> */}
                    <div className={styles.CheckboxContainer}>
                        <input type='checkbox' name="terms" value={true} id="terms" onBlur={formik.handleBlur} onChange={formik.handleChange} checked={formik.values.terms} />
                        <label htmlFor="terms">Accept the terms and conditions</label>
                    </div>
                        {console.log(formik.errors.terms)}
                        {formik.errors.terms && formik.touched.terms && (<span className={styles.Error}>{formik.errors.terms}</span>)}
                    <div>
                        <button type='submit' disabled={!formik.isValid}>
                            Submit
                        </button>
                    </div>
               </div>
            </form>   
        </>
    );
};

export default Signup;