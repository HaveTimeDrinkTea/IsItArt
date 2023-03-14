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
                  <img src={require("../components/assets/cv_peiwang_webdev.jpg")} alt="resume" width="500px"/>
                  <div className="alignRight">
               <a href="../components/assets/cv_peiwang_webdev.pdf"><i class="fa-solid fa-download iconColorSize2"></i><i class="fa-solid fa-file-pdf iconColorSize2 "></i></a>
               </div>
               </div>
            </Col>

         </Row>
      </Container>
      </>

)
}
