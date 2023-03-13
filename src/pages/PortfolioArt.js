import React, { useState } from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import CarouselArt from '../components/CarouselArt';

export default function PortfolioArt() {

   // const[portfolioList, setPortfolioList] = useState(portfolioData);
   
   return (
      <>
      <Container>
      <Row>
      <Col size="sm-6">
            <div className="homeBkGr">
               <h1>My digital pieces</h1>
            </div>
         </Col>
         <Col size="sm-6">  
         <div> <br/><br/> from portfolio Art </div>
            <CarouselArt />
         
         </Col>
      </Row>
      </Container>
      
      </>
   )
}