
//--Pw for inline styling, need to pass in an object for the css. Note that there are {} inside {}. The outer {} is JSX and the inner {} is style object

//--PW the style object will style this component only

import { useState } from "react";

const styles ={
   header: {
      textAlign: 'center',
      margin: '20px 0',
   },
   submitBtn: {
      backgroundColor: 'lightseagreen',
      border: '1px solid lightgreen',
      cursor: 'pointer',
   }
}

export default function Contact() {

   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
   });

   //--PW this handleChange event is called when the user types in the input field
   //--PW it then takes the user input and adds it to a new object and using the setFormData function, it sets the state to the new object
   //--PW the [event.target.name]: event.target.value is quite clever as it takes in the name of the input field on the LHS and then collects the value (what the user types) of the input field on the RHS and then 

   const handleChange = (event) => {
      console.log(event.target.value);
      setFormData({
         ...formData,
         [event.target.name]: event.target.value,
      })
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log('form submitted');
      //--PW so can do some data validation here
      console.log('formData:', formData);
   };

   return (
      <>
         <h1 style={ {color : 'blue', textAlign: 'center',
      margin: '20px 0',} }>Contact!</h1>

         <h2 style={styles.header}>Let's Chat Over a Cuppa 🍵!</h2>

         <form onSubmit={handleSubmit}>
            <input name="name" onChange={handleChange} type="text" placeholder="Your Name" />

            <input name="email" onChange={handleChange} type="email" placeholder="Your Email" />
            
            <textarea name="message" onChange={handleChange} cols="30" rows="10" placeholder="Your Message"></textarea>
            <button style={styles.submitBtn}>Submit</button>
         </form>

         {/* The following is a bit of fun to show that as a user types the email, it outputs it to the <p>! */}
         <p>Name: {formData.name}</p>
         <p>Email: {formData.email}</p>
         <p>Message: {formData.message}</p>
      </>
   )
}
