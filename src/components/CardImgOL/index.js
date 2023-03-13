import React from "react";
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import "./style.css";

export default function CardImgOL(props) {

   let imageLoc;
   switch (props.id) {
   case '1':
       imageLoc = require('../assets/peiwang_teanamu1.png');
       break;
   case '2':
      imageLoc = require('../../../public/images/peiwang_teanamu.png')
       break;
   case '3':
      imageLoc = require('../res/hockey.png');

       break;
   case '4':
      imageLoc = require('../res/tennis.png');

       break;
   }

  return (
   // <div> <br/> <br/>this is {imgLoc}</div>
 
    <Card className="bg-dark text-white cardImg">
      {/* <Card.Img src={require(`../`
      + imageLoc)} alt={props.projName} /> */}
      <Card.Img src={imageLoc} /> 
      <Card.ImgOverlay>
        <Card.Title>{props.projName}</Card.Title>
        <Card.Text>
          Created with: {props.tech}
        </Card.Text>
        <Card.Text>Blah</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
