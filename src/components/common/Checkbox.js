import React from 'react';

const Checkbox = ({name, formik, checkBoxOptions}) => {
    return (
        <>
            { checkBoxOptions.map((item) => (
                <React.Fragment key={item.value}>
                    <input type='checkbox' name={name} value={item.value} id={item.value} onChange={formik.handleChange} checked={formik.values[name].includes(item.value)} />
                    <label htmlFor={item.value}>{item.label}</label>
                </React.Fragment>
            ))}
            {formik.errors[name] && formik.touched[name] && <span>{formik.errors[name]}</span> }
        </>
    );
};

export default Checkbox;