import React from 'react';

const SelectOptionInput = ({name, formik, selectOptions}) => {
    return (
        <>
            <select name={name} {...formik.getFieldProps(name)} >
                {selectOptions.map((item)=> (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </select>
            {formik.errors[name] && formik.touched[name] && <span>{formik.errors[name]}</span> }
        </>
    );
};

export default SelectOptionInput;