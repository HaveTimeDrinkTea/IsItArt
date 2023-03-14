import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import HomeRoles from '../components/HomeRoles';

export default function Skills(props) {
  return (
    <> 
    <Container>
      <Row>

        <Col size="sm-6">
          <div className="homeBkGr lhsH">
            <div class="typewriter">
            <h1>skills</h1>
            </div>

          <br/><br/>
        <HomeRoles roleType="technologies" />
        <HomeRoles roleType="graphics" />
        <HomeRoles roleType="accountancy" />
        <HomeRoles roleType="consultancy" />
          </div>
          
        </Col>
        <Col size="sm-6">  
          <div class="rhsHome">
            <span class="opener"> <i class="fa fa-code" aria-hidden="true"></i> tech competencies <i class="fa fa-code" aria-hidden="true"></i> </span> <br/><i class="fa-brands fa-js iconColor"></i>
            <br/><br/>
            <span class="opener"> <i class="fa fa-code" aria-hidden="true"></i> digital illustrations <i class="fa fa-code" aria-hidden="true"></i></span> <br/>I try to live a life of <strong><em><u>#kindfulness</u></em></strong> in a world where kindness for all beings comes first. That includes using technology and the web in all sorts of ways to improve all our lives. Insight meditation gives me the opportunity to revisit my thoughts (design or otherwise) and helps me to focus on what is important.  Undeniably useful skills for a web designer.
            <br/><br/>
            <span class="opener"> <i class="fa fa-code" aria-hidden="true"></i> business management & accountancy<i class="fa fa-code" aria-hidden="true"></i> </span> <br/>I am a learner and teacher of tea for over 20 years. Through the art of tea, I have learnt the importance of patience and the smooth flow of things. I treasure the tea ceremony motto of <strong><em>ichigo-ichie</em></strong> "<strong>一 期 一 会</strong>" (<em>lit. “for this time only"</em>)。 This is a concept of treasuring <strong>the unrepeatable nature of a moment</strong>. In web design, the said moment is a very short time where a user is either attracted to a web page or be turned away from it.  A well-designed website is made for the user; not at the whims of the web designer.
          </div>
        </Col>

      </Row>
    </Container>
    </>

  )
}
