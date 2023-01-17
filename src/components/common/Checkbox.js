import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = ({name, formik, checkBoxOptions}) => {
    return (
        <div className={styles.CheckboxContainer}>
            { checkBoxOptions.map((item) => (
                <React.Fragment key={item.value}>
                    <input type='checkbox' name={name} value={item.value} id={item.value} onChange={formik.handleChange} checked={formik.values[name].includes(item.value)} />
                    <label htmlFor={item.value}>{item.label}</label>
                </React.Fragment>
            ))}
            {formik.errors[name] && formik.touched[name] && <span>{formik.errors[name]}</span> }
        </div>
    );
};

export default Checkbox;