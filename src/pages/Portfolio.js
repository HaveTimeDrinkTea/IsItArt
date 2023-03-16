import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import HomeRoles from '../components/HomeRoles';
import ProjAccordion from '../components/ProjAccordion';
import '../index.css';
// import portfolioData from '../components/portfolio.json';


export default function Portfolio() {

   // const[portfolioList, setPortfolioList] = useState(portfolioData);
   
   return (
      <>
      <Container>
      <Row>
         <Col size="sm-6">
            <div className="homeWD lhsH">
               <div className="typewriterSub">
                  <h1>portfolio</h1>
               </div>
               <br/><br/>
               <HomeRoles roleType="apps" />
               <HomeRoles roleType="web sites" />
            </div>
         </Col>
         <Col size="sm-6">  
            <div className="rhsContainer mx-auto"> 
            <br/><br/>
            <ProjAccordion />
            </div>
         </Col>
      </Row>
      </Container>
      
      </>
   )
}
