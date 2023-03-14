import React from 'react';
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
          <div className="homeBkGr lhsH">
            <div class="typewriter">
            <h1>Résumé</h1>
            </div>

          <br/><br/>
        <HomeRoles roleType="web developer" />
        <HomeRoles roleType="illustrator" />
        <HomeRoles roleType="tea master" />
          </div>
          
        </Col>
        <Col size="sm-6">  
          <div class="rhsHome">
          <embed
	         src="document.pdf" type="application/pdf"
	         width="100%"
	         height="100%"
            />
</div>
        </Col>

      </Row>
    </Container>
    </>

  )
}
