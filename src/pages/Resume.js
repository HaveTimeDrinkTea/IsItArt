import React, { useState } from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import HomeRoles from '../components/HomeRoles';

export default function Resume(props) {


   return (
      <> 
      <Container>
         <Row>
            <Col size="sm-6">
               <div className="homeRe lhsH">
                  <div className="typewriterSub">
                     <h1>Résumé</h1>
                  </div>

                  <br/><br/>
                  <HomeRoles roleType="web developer" />
                  <HomeRoles roleType="illustrator" />
                  <HomeRoles roleType="tea master" />
               </div>
            </Col>
            <Col size="sm-6">  
               <div className="rhsHome">
                  <img src={require("../components/assets/cv_peiwang_webdev.png")} alt="resume" width="500px"/>
                  <div className="alignRight">
               <a href="https://drive.google.com/file/d/1cUTJ86YpZNDiZScHxEQTLiVtrcXWdZH0/view?usp=sharing" target="_blank" rel="noreferrer"><i className="fa-solid fa-download iconColorSize2"></i><i className="fa-solid fa-file-pdf iconColorSize2 "></i></a>
               </div>
               </div>
            </Col>

         </Row>
      </Container>
      </>

)
}
