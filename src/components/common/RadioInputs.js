import React from 'react';
import styles from './RadioInputs.module.css';

const RadioInputs = ({name, formik, radioOptions}) => {
    return (
        <div className={styles.RadioContainer}>
            { radioOptions.map((item) => (
                <React.Fragment key={item.value}>
                    <input type='radio' name={name} value={item.value} id={item.value} onChange={formik.handleChange} checked={formik.values[name] === item.value} />
                    <label htmlFor={item.value}>{item.label}</label>
                </React.Fragment>
            ))}
            {formik.errors[name] && formik.touched[name] && <span>{formik.errors[name]}</span> }
        </div>
    );
};

export default RadioInputs;