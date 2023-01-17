import React from 'react';
import styles from './Input.module.css';

const Input = ({label, name, formik, type = "text"}) => {
    return (
        <div className={styles.InputController}> 
            <div className={styles.InputsTitle}>
             <label htmlFor={name}>{label}</label>
             {formik.errors[name] && formik.touched[name] && <span className={styles.Error}>{formik.errors[name]}</span> }
            </div>
            {/* <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} /> */}
            <input type={type} id={name} name={name} {...formik.getFieldProps(name)} />
        </div>
    );
};

export default Input;