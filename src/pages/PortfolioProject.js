import React, { useState } from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import HomeRoles from '../components/HomeRoles';
import '../index.css';
import portfolioData from '../components/portfolio.json';


export default function PortfolioProject(props) {

 let projectObj = portfolioData[(parseInt(props.id)-1)];
 let githubURL ="";  
 if (projectObj.githubURL) {
   githubURL = `<br/><a href={` 
      + githubURL 
      + `} target="_blank" alt={` 
      + projectObj.projName 
      + `} className="accordionLink"><i className="fa-brands fa-github"></i> GitGub Details<i className="fa fa-chevron-circle-right" aria-hidden="true"></i><i className="fa fa-chevron-circle-right" aria-hidden="true"></i><i className="fa fa-chevron-circle-right" aria-hidden="true"></i>`
 }

 console.log("projectObj:", projectObj);

   return (
      <>
      <Container>
      <Row>
         <Col size="sm-6">
         <div className="homeBkGr lhsH">
               <div className="typewriterSub">
                  <h1>portfolio</h1>
               </div>
               <br/><br/>
               <HomeRoles roleType="apps" />
               <HomeRoles roleType="web sites" />
            </div>
         </Col>
         <Col size="sm-6">  
            <div className="rhsHome"> 
               <div>
                  <div className="center">
                  <img src={projectObj.imageLoc} alt={props.projName}/> 
                  <h2>{projectObj.projName}</h2>

                  <p className="aligntextCenter">Created with {projectObj.tech}</p>
                  <p className="aligntextCenter">{projectObj.descLong}</p>

                  </div>

                  <div className="alignRight">   
                     <a href={projectObj.projURL} target="_blank" alt={projectObj.projName} className="accordionLink">{projectObj.projName} <i className="fa fa-chevron-circle-right" aria-hidden="true"></i><i className="fa fa-chevron-circle-right" aria-hidden="true"></i><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></a>
                     {githubURL}
                  </div>
               </div>
            </div>         
         </Col>
      </Row>
      </Container>
      
      </>
   )
}
