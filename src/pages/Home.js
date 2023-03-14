import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import HomeRoles from '../components/HomeRoles';

function Home(props) {
  return (
    <> 
    <Container>
      <Row>

        <Col size="sm-6">
          <div className="homeBkGr lhsH">
            <div class="typewriter">
            <h1>Pei Wang</h1>
            </div>

          <br/><br/>
        <HomeRoles roleType="web developer" />
        <HomeRoles roleType="illustrator" />
        <HomeRoles roleType="tea master" />
          </div>
          
        </Col>
        <Col size="sm-6">  
          <div class="rhsHome">
            <span class="opener"> <i class="fa fa-code" aria-hidden="true"></i>A "born-again" dabler of all things web<i class="fa fa-code" aria-hidden="true"></i> </span> <br/>I prefer simpler designs and unclutteredness. I am a self-proclaimed <strong><em><u>#cleanfluencer</u></em></strong> and disciple of Marie Kondo's spark joy method. Things should spark joy and that include web design. 
            <br/><br/>
            <span class="opener"> <i class="fa fa-code" aria-hidden="true"></i>A meditator at heart <i class="fa fa-code" aria-hidden="true"></i></span> <br/>I try to live a life of <strong><em><u>#kindfulness</u></em></strong> in a world where kindness for all beings comes first. That includes using technology and the web in all sorts of ways to improve all our lives. Insight meditation gives me the opportunity to revisit my thoughts (design or otherwise) and helps me to focus on what is important.  Undeniably useful skills for a web designer.
            <br/><br/>
            <span class="opener"> <i class="fa fa-code" aria-hidden="true"></i>An art of tea practitioner<i class="fa fa-code" aria-hidden="true"></i> </span> <br/>I am a learner and teacher of tea for over 20 years. Through the art of tea, I have learnt the importance of patience and the smooth flow of things. I treasure the tea ceremony motto of <strong><em>ichigo-ichie</em></strong> "<strong>一 期 一 会</strong>" (<em>lit. “for this time only"</em>)。 This is a concept of treasuring <strong>the unrepeatable nature of a moment</strong>. In web design, the said moment is a very short time where a user is either attracted to a web page or be turned away from it.  A well-designed website is made for the user; not at the whims of the web designer.
          </div>
        </Col>

      </Row>
    </Container>
    </>

  )
}

export default Home;