import React, { useState } from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import dayjs from 'dayjs' 
import portfolioData from '../portfolio.json';
import Card from '../components/Card';

export default function Portfolio() {

   const[portfolioList, setPortfolioList] = useState(portfolioData);
   
   return (
      <>
      <Container>
      <Row>
         <Col size="sm-6">
            <div className="homeBkGr">
               <h1>My Portfolio</h1>
               <h4>Last updated: {dayjs().format("D MMM YYYY") }</h4>
            </div>
         </Col>
         <Col size="sm-6">  
            {portfolioList.map((proj) => (
               <Card 
               id={proj.id}
               projName={proj.projName}
               imageLoc={proj.imageLoc}
               tech={proj.tech}
               />
            ))}
         
         </Col>
      </Row>
      </Container>
      
      </>
   )
}
