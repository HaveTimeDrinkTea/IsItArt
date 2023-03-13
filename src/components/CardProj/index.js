import React from "react";
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import "./style.css";


export default function CardProj(props) {

   let imageLoc;
   switch (props.id) {
   case '1':
       imageLoc = './peiwang_teanamu1.png';
       break;
   case '2':
      imageLoc = '../../../public/images/peiwang_teanamu.png';
       break;
   case '3':
      imageLoc = '../res/hockey.png';
       break;
   default:
      imageLoc = '../res/tennis.png';
   }
 
   return (
      <>
      

      <Card style={{ width: '18rem', height: '22rem'}}>
         <Card.Img 
            variant="top" 
            src="./peiwang_teanamu.png"
            />
         <Card.Body>
            <Card.Title>{props.projName} </Card.Title>
            <Card.Text>
               <strong>Created with:</strong> {props.tech}
            </Card.Text>

            <button> <NavLink to="project/`{props.id}`"
      end className={({ isActive}) => isActive ? 'nav-link active' : 'nav-link'}>more details</NavLink></button>
         </Card.Body>
      </Card>
      this is real shit
      <img src="images/peiwang_teanamu.png" />
</>
   );
}

