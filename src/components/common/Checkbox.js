import React from 'react';

const Checkbox = ({name, formik, radioOptions}) => {
    return (
        <>
            { radioOptions.map((item) => (
                <React.Fragment key={item.value}>
                    <input type='radio' name={name} value={item.value} id={item.value} onChange={formik.handleChange} checked={formik.values[name] === item.value} />
                    <label htmlFor={item.value}>{item.label}</label>
                </React.Fragment>
            ))}
            {formik.errors[name] && formik.touched[name] && <span>{formik.errors[name]}</span> }
        </>
    );
};

export default Checkbox;