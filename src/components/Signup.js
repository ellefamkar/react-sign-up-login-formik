import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// 1.manage state 
// 2.handle form submission 
// 3.validation - error message --> we add yup for this
// 4. formik --> use formik hook --> useFormik

// 1. 
const initialValues = {
    name: "",
    email: "",
    password: "",
    phoneNumber : "",
    confirmPassword: "",
    gender: "",
    // select: "",
    // isChecked: "" 
}

// 2. 
const onSubmit = (values) =>{
    console.log(values);
}

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
    gender: Yup.string().required("Gender is required")
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
            console.log(response.data);
            setFormValues(response.data);
        }).catch(error => console.log(error));
    }, [])

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    {/* <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} /> */}
                    <input type="text" id='name' name="name" {...formik.getFieldProps('name')} />
                    {formik.errors.name && formik.touched.name && <span>{formik.errors.name}</span> }
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type="email" id='email' name="email" {...formik.getFieldProps('email')} />
                    {formik.errors.email && formik.touched.email && <span>{formik.errors.email}</span> }
                </div>
                <div>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input type="text" id='phoneNumber' name="phoneNumber" {...formik.getFieldProps('phoneNumber')} />
                    {formik.errors.phoneNumber && formik.touched.phoneNumber && <span>{formik.errors.phoneNumber}</span> }
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type="password" id='password' name="password" {...formik.getFieldProps('password')} />
                    {formik.errors.password && formik.touched.password && <span>{formik.errors.password}</span> }
                </div>
                <div>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input type="password"id='confirmPassword' name="confirmPassword" {...formik.getFieldProps('confirmPassword')} />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword && <span>{formik.errors.confirmPassword}</span> }
                </div>
                <div>
                    <input type="radio" name="gender" value="0" id='0' onChange={formik.handleChange} checked={formik.values.gender === '0'} />
                    <label htmlFor='0'>Female</label>
                    <input type="radio" name="gender" value="1" id='1' onChange={formik.handleChange} checked={formik.values.gender === '1'} />
                    <label htmlFor='1'>Male</label>
                    {formik.errors.gender && formik.touched.gender && <span>{formik.errors.gender}</span> }
                </div>
                <div>
                    <button type='submit' disabled={!formik.isValid}>
                        submit
                    </button>
                </div>
            </form>   
        </>
    );
};

export default Signup;