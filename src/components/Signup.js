import React from 'react';
import { useFormik } from 'formik';

// 1.manage state 
// 2.handle form submission 
// 3.validation - error message 
// 4. formik --> use formik hook --> useFormik

// 1. 
const initialValues = {
    name: "",
    email: "",
    password: "",
    // confirmPassword: "",
    // select: "",
    // isChecked: "" 
}

// 2. 
const onSubmit = (values) =>{
    console.log(values);
}

// 3. 
const validate = (values) =>{
    let errors = {};
    
    if(!values.name){
        errors.name = "Name is required";
    }

    
    if(!values.email){
        errors.email = "Email is required";
    }

    
    if(!values.password){
        errors.password = "Password is required";
    }

    return errors;
}

const Signup = () => {

    // name, pass, email => submit => DB => redirect /panel 

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    console.log(formik.errors);

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.name && formik.touched.name && <span>{formik.errors.name}</span> }
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.email && formik.touched.email && <span>{formik.errors.email}</span> }
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.password && formik.touched.password && <span>{formik.errors.password}</span> }
                </div>
                <div>
                    <button type='submit'>
                        submit
                    </button>
                </div>
            </form>   
        </>
    );
};

export default Signup;