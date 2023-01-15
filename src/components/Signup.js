import React, { useState } from 'react';


// 1.manage state 
// 2.handle form submission 
// 3.validation - error message 
// 4. formik --> use formik hook --> useFormik

const Signup = () => {
    // name, pass, email => submit => DB => redirect /panel 
    const [data, setData] = useState({
        name: "",
        email:"",
        // password: ""
    });

    const handleChange = ({target}) =>{
        setData({
            ...data,
            [target.name] : target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // call the server => submit data => post => user data
        console.log(event);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={data.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={data.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={data.password} onChange={handleChange} />
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