import React, { useState } from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import CarouselArt from '../components/CarouselArt';
import HomeRoles from '../components/HomeRoles';
import '../index.css';
export default function PortfolioArt() {

   // const[portfolioList, setPortfolioList] = useState(portfolioData);
   
   return (
      <>
      <Container>
      <Row>
         <Col size="sm-6">
            <div className="homeBkGr lhsH">
               <div className="typewriterSub">
               <h1>Illustrations</h1>
               </div>
               <br/><br/>
               <HomeRoles roleType="a sample of my digital artworks" />
            </div>
         </Col>
         <Col size="sm-6">  
         <div className="rhsContainer mx-auto"> 
         <br/><br/>
         <CarouselArt />
         </div>
            
         
         </Col>
      </Row>
      </Container>
      
      </>
   )
}