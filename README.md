# Welcome to my React Sign Up | Login Form Application validated with Formik and Yup 👋

## Available Scripts

In the project directory, you can run:
### `npm start`

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Thanks for checking out my Sign Up form app project.
Remember that "Every day is a learning day" and try to learn from everyone! 

 ### Screenshot 

![](./src/images/Screenshot-1.png)

![](./src/images/Screenshot-2.png)

### Links

- Live Site URL: [React Sign Up | Login Form Application](https://react-form-formik.netlify.app/)

## My process

### Where to find resources

The first think to do is to look for your perfect design! So let's checkout [dribble](https://dribbble.com/) for our favourite design to begin!

### Built with

- Reactjs
- React Toastify
- Formik
- Yup Validation
- CSS Modules
- Flexbox
- CSS Grid
- Desktop-first workflow
- CSS Animations
- Animated emoji

You can use any tools you like to help you complete the project. So if you got something you'd like to practice, feel free to give it a try. However, i made it responsive for all the devices, since my users should be able to: View the optimal layout depending on their device's screen size

### What I learned

This projects helped me being more familiar with the details of react, how to validate sign up and login forms and handle errors together with giving styles using css modules files, validate form with Yup and Formik, toastify and use my css knowledge as well to create a responsive project with small details on colors,sizes and so on.

To see parts of my codes and see how you can add code snippets, see below:

``` JSX

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required")
    .min(8, 'Password should have minimum 8 chars.')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
    confirmPassword: Yup.string().required("Password Confirm is required").oneOf([Yup.ref('password'), null], 'Passwords do not match'),
    phoneNumber: Yup.string().required("Phone Number is required").matches(phoneRegExp, 'Invalid Phone Number'),
    gender: Yup.string().required("Gender is required"),
    nationality: Yup.string().required('Please choose your nationality'),
    // interests: Yup.array().min(1).required("Choose at least one item"),
    terms: Yup.boolean().required('Please accept the terms').oneOf([true],'Please accept the terms'),
});

const Signup = () => {

    const [formValues, setFormValues] = useState(null);

    // name, pass, email => submit => DB => redirect /panel 
    const formik = useFormik({
        initialValues: formValues || initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
        enableReinitialize: true
    });

}

```
```css

form::before{
    content: "";
    background: linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%);
    position: absolute;
    top: -5px;
    left: -5px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    z-index: 1;
    border-radius: 12px;
}

form::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 2;
    border-radius: 8px;
}

.CheckboxContainer{
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
}

.CheckboxContainer label{
    margin-bottom: 0 !important;
}

button:disabled {
    background-color: #319197;
    opacity: 0.4;
    cursor:no-drop;
    color: #eaeaea;
}


```

### Useful resources

In order to do this project in a correct way you need to have a good knowledge of html and css, js and reactjs so let's master at them with these fruitful resources.

- [Animated Fluent Emoji](https://animated-fluent-emoji.vercel.app/) - This gives you animated emojis
- [w3schools](https://www.w3schools.com/) - This helps you a lot with both your css and html which is easy to read and has numerous examples.
- [MDN](https://developer.mozilla.org/en-US/) - Remember that no matter how many tutorial videos you have watched, you always need to learn details and features from codes documentations
- [codeacademy](https://www.codecademy.com/)
- [udemy](https://www.udemy.com/) - Here you can find a number of tutorials in different languages
- [coursera](https://www.coursera.org/)

## Author

- Website - [Elle Famkar](https://bespoke-marigold-f2f8e3.netlify.app/)
- Twitter - [@Ellefamkar](https://www.twitter.com/ellefamkar)

Feel free to ask any questions come to your mind  and send me message via my current temporary website in the link above!

## Acknowledgments

I am thankful to each and every person in this area who teaches me a single piece of code! I learn every single day from amazing people! so I need to thank you all ❤

**Have fun using this project!** 🚀
