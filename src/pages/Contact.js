import React, { useState } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import HomeRoles from '../components/HomeRoles';

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
      <Container>
         <Row>
            <Col size="sm-6">
            <div className="homeBkGr lhsH">
            <div class="typewriter">
            <h1>Contact</h1>
            </div>
            <br/><br/>
            <HomeRoles roleType="Let's chat" />
            <HomeRoles roleType="over cups" />
            <HomeRoles roleType="of tea 🍵" />
            </div>
            </Col>
            <Col size="sm-6">  
               <div class="rhsHome">
               <form onSubmit={handleSubmit}>
                  <input name="name" onChange={handleChange} type="text" placeholder="Your Name" />

                  <input name="email" onChange={handleChange} type="email" placeholder="Your Email" />
            
                  <textarea name="message" onChange={handleChange} cols="30" rows="10" placeholder="Your Message"></textarea>
                  
                  <button style={styles.submitBtn}>Submit</button>
               </form>
               </div>
            </Col>
         </Row>
      </Container>
      </>
   )
}
