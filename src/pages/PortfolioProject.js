import React, { useState } from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import portfolioData from '../portfolio.json';


export default function PortfolioProject(props) {

 let projectObj = portfolioData[(parseInt(props.id) - 1) ];
   
   let imgLoc = `"`+ projectObj.imageLoc +`"`;
   let projURL = `"`+ projectObj.projURL +`"`;
   return (
      <>
      <Container>
      <Row>
         <Col size="sm-6">
            <div className="homeBkGr">
               <h1>My Portfolio</h1>
            </div>
         </Col>
         <Col size="sm-6">  
         <br /><br />
         <br />
         <br />
         <h1>{projectObj.projName}</h1>
         <img src={imgLoc} alt="blah" />
         <a href={projURL}>{projectObj.projName}</a>
         <h2>{projectObj.tech}</h2>
         <h3>{projectObj.desc}</h3>        
         </Col>
      </Row>
      </Container>
      
      </>
   )
}
