import React from 'react';
import styles from './SelectOptionInput.module.css';

const SelectOptionInput = ({name, formik, selectOptions}) => {
    return (
        <div className={styles.selectContainer}>
            <select name={name} {...formik.getFieldProps(name)} >
                {selectOptions.map((item)=> (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </select>
            {formik.errors[name] && formik.touched[name] && <span className={styles.Error}>{formik.errors[name]}</span> }
        </div>
    );
};

export default SelectOptionInput;