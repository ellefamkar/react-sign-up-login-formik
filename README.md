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

![](./public/images/Sign-up-Screenshot.png)

![](./public/images/Sign-up-screenshot-validation.png)

![](./public/images/Login-Screenshot.png)

### Links

- Live Site URL: [React Sign Up | Login Form Application](https://melodic-cactus-7d3a19.netlify.app/)

## My process

### Where to find resources

The first think to do is to look for your perfect design! So let's checkout [dribble](https://dribbble.com/) for our favourite design to begin!

### Built with

- Reactjs
- React Toastify
- Building custom hooks
- Styled Components
- CSS
- Flexbox
- CSS Grid
- Desktop-first workflow
- CSS Animations

You can use any tools you like to help you complete the project. So if you got something you'd like to practice, feel free to give it a try. However, i made it responsive for all the devices, since my users should be able to: View the optimal layout depending on their device's screen size

### What I learned

This projects helped me being more familiar with the details of react, how to validate sign up and login forms and handle errors together with giving styles with Styled components, toastify and use my css knowledge as well to create a responsive project with small details on colors,sizes and so on.

To see parts of my codes and see how you can add code snippets, see below:

``` JSX

const submitHandler = (event) => {
      event.preventDefault();
      notify();
      if (!Object.keys(errors).length) {
         notify("Successful", "success");
      } else {
         notify("Invalid", "error");
         setTouched({
            name: true,
            email: true,
            password: true,
            confirmPassword: true,
            select: true,
            isAccepted: true,
         });
      }
   };

     const changeHandler = (event) => {
      if (event.target.name === "isAccepted") {
         setData({
            ...data,
            [event.target.name]: event.target.checked,
         });
      } else {
         setData({
            ...data,
            [event.target.name]: event.target.value,
         });
         if (event.target.value) {
            event.target.style.background = "#ffffff";
            event.target.style.color = "#000000";
         } else {
            event.target.style.background = "transparent";
            event.target.style.color = "transparent";
         }
      }
   };

```
```css

const FormContainer = styled.div`
   background-color: rgba(0, 0, 34, 0.241);
   border-radius: 10px;
   width: 400px;
   height: 500px;
   padding: 2.5rem 2rem;
   background: rgba(255, 255, 255, 0.2);
   border-radius: 16px;
   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
   backdrop-filter: blur(4.9px);
   -webkit-backdrop-filter: blur(4.9px);
   border: 1px solid rgba(255, 255, 255, 0.1);
   z-index: 2;
   text-align: center;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   
   h2 {
      color: #ffffff;
   }
   p {
      position: relative;
      font-family: sans-serif;
      text-transform: uppercase;
      font-size: 1.6em;
      letter-spacing: 4px;
      overflow: hidden;
      background: linear-gradient(103deg, #00128f, #fff, #000528);
      background-repeat: no-repeat;
      background-size: 80%;
      animation: animate 5s linear infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: rgba(225, 225, 225, 0.5);
      margin-bottom: 1rem;
   }

   form {
      width: 100%;
      .buttonContainer{
        width:50%;
        margin:1rem auto 0.2rem auto;
        display: flex;
        flex-direction:row;
       justify-content: space-between;
       align-items: center;
      }

      button,
      a {
         cursor: pointer;
         padding: 0.5rem 1rem;
         border-radius: 5px;
         border: none;
         margin-top:1rem;
       
         &.signup {
            background-color: #f09;
            color: #ffffff;
         }
      }
   }

   & > div {
      width: 50%;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   @keyframes animate {
      0% {
         background-position: -500%;
      }
      100% {
         background-position: 500%;
      }
   }
`;

```

### Useful resources

In order to do this project in a correct way you need to have a good knowledge of html and css, js and reactjs so let's master at them with these fruitful resources.

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
