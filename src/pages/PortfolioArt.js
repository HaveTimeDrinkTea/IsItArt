import React, { useState } from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import CarouselArt from '../components/CarouselArt';
import '../index.css';
export default function PortfolioArt() {

   // const[portfolioList, setPortfolioList] = useState(portfolioData);
   
   return (
      <>
      <Container>
      <Row>
      <Col size="sm-6">
            <div className="homeBkGr">
               <h1>a preview of some of my art works</h1>
            </div>
         </Col>
         <Col size="sm-6">  
         <div className="container rhsContainer mx-auto"> 
         <br/><br/>
         <CarouselArt />


         </div>
            
         
         </Col>
      </Row>
      </Container>
      
      </>
   )
}