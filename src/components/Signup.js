import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
    phoneNumber: Yup.string().required("Phone Number is required").matches(phoneRegExp, 'Invalid Phone Number')
});

const Signup = () => {

    // name, pass, email => submit => DB => redirect /panel 

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Name</label>
                    {/* <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} /> */}
                    <input type="text" name="name" {...formik.getFieldProps('name')} />
                    {formik.errors.name && formik.touched.name && <span>{formik.errors.name}</span> }
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" {...formik.getFieldProps('email')} />
                    {formik.errors.email && formik.touched.email && <span>{formik.errors.email}</span> }
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" name="phoneNumber" {...formik.getFieldProps('phoneNumber')} />
                    {formik.errors.phoneNumber && formik.touched.phoneNumber && <span>{formik.errors.phoneNumber}</span> }
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" {...formik.getFieldProps('password')} />
                    {formik.errors.password && formik.touched.password && <span>{formik.errors.password}</span> }
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" {...formik.getFieldProps('confirmPassword')} />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword && <span>{formik.errors.confirmPassword}</span> }
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