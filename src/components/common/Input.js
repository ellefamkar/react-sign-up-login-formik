import React from 'react';

const Input = ({label, name, formik, type = "text"}) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            {/* <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} /> */}
            <input type={type} id={name} name={name} {...formik.getFieldProps(name)} />
            {formik.errors[name] && formik.touched[name] && <span>{formik.errors[name]}</span> }
        </div>
    );
};

export default Input;