import React, { useState } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import HomeRoles from '../components/HomeRoles';
import Nav from 'react-bootstrap/Nav';


const styles ={
   header: {
      textAlign: 'center',
      margin: '20px 0',
   },
   submitBtn: {
      backgroundColor: '#0047ab',
      border: '0.2rem solid white',
      cursor: 'pointer',
   },
   success: {
      textAlign: 'center',
      color: '#0047ab',
      marginTop: '15px',
      border: 'lightseagreen'
   }
}

export default function Contact() {

   //-- create state variable for form submit process
   const [success, setSuccess] = useState(false);

   //--PW state variable for collecting form data
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
      access_key: 'ffe73182-8cf1-42b3-bd3d-c5ae58d92bd9'
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
      const msgData = JSON.stringify(formData);


      fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
            },
            body: msgData
            })
            .then (res => res.json())
            .then(data => {
               setSuccess(true);
               setFormData({
                  ...formData,
                  name: '',
                  email: '',
                  message: ''
               })
               setTimeout(() => {
                  setSuccess(false);
               }, 3000);   
            })
            .catch(err => console.log(err));

      // console.log('form submitted');
      // //--PW so can do some data validation here
      // console.log('formData:', formData);
   };

   return (
      <>
      <Container>
         <Row>
            <Col size="sm-6">
            <div className="homeCn lhsH">
            <div className="typewriterSub">
            <h1>Contact</h1>
            </div>
            <br/><br/>
            <HomeRoles roleType="Let's chat over" />
            <HomeRoles roleType="cups of 🍵" />         
            <div>
               <h3 className="homeRolesContact">
                  <Nav.Link href="https://www.github.com/havetimedrinktea/" className="aHoverFooterNav"><i class="fa fa-github-square" aria-hidden="true"></i> GitHub</Nav.Link>
               </h3>
            </div>           
            <div>
               <h3 className="homeRolesContact">
                  <Nav.Link href="https://www.linkedin.com/in/teanamu" className="aHoverFooterNav"><i class="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</Nav.Link>
               </h3>
            </div>
            </div>
            </Col>
            <Col size="sm-6">  
               <div className="rhsHome">
                  <h2><i className="fa fa-terminal iconColor" aria-hidden="true"></i>Say Hi! </h2>
               
               <form onSubmit={handleSubmit}>
                  <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your Name" />

                  <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Your Email" />
            
                  <textarea name="message" value={formData.message} onChange={handleChange} cols="30" rows="10" placeholder="Your Message"></textarea>
                  
                  <button style={styles.submitBtn}>Submit</button>
                  <span className="disclaimer"><i className="fa fa-code" aria-hidden="true"></i>Privacy Notice: All relevant GDPR regulations are adhered by best endeavors.<i className="fa fa-code" aria-hidden="true"></i></span>

                  { success && <p style={styles.success}>Thank you so much for getting in touch! I'll be sure to get back to you!</p> }
               </form>
               </div>
            </Col>
         </Row>
      </Container>
      </>
   )
}
