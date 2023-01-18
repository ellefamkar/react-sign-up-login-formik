import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = ({name, formik, checkBoxOptions}) => {
    return (
        <div className={styles.CheckboxContainer}>
            {checkBoxOptions.map((item) => (
                <React.Fragment key={item.value}>
                    <input type='checkbox' id={item.value} name={name} value={item.value} onBlur={formik.handleBlur} onChange={formik.handleChange} checked={formik.values[name].includes(item.value)} />
                    <label htmlFor={item.value}>{item.label}</label>
                </React.Fragment>
            ))}
            <div>
            {formik.errors[name] && formik.touched[name] && (<span className={styles.Error}>{formik.errors[name]}</span>)}
            </div>
        </div>
    );
};

export default Checkbox;