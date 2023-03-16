import React from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import HomeRoles from '../components/HomeRoles';

export default function Home(props) {
  return (
    <> 
    <Container>
      <Row>

        <Col size="sm-6">
          <div className="homeBkGr lhsH">
            <div className="typewriter">
            <h1>Pei Wang</h1>
            </div>
            <br/><br/>
            <HomeRoles roleType="web developer" />
            <HomeRoles roleType="illustrator" />
            <HomeRoles roleType="tea master" />
            <div>
              <h3 className="homeRoles">
              <i className="fa fa-terminal iconColor" aria-hidden="true"></i>
              <i className="fa-regular fa-lightbulb fa-spin iconColor" aria-hidden="true"></i>peekaboo!
                <div className="avatar_container">
                  <div className="avatar_middle">
                    <img src={require("../../src/components/assets/webdeveloper_peiwang2.png")} alt="another avatar of Pei Wang" className="avatar_image avatar" />
                  </div>
                </div>  
              </h3>
            </div>
          </div>
          
        </Col>
        <Col size="sm-6">  
          <div className="rhsHome">
            <span className="opener"> <i className="fa fa-code" aria-hidden="true"></i>A "born-again" dabbler of all things web<i className="fa fa-code" aria-hidden="true"></i> </span> <br/>I prefer simple designs and unclutteredness. As a disciple of Marie Kondo's <strong>*Spark Joy*</strong> philosophy and self titled <strong><em><u>#cleanfluencer</u></em></strong>, I believe everything in life should gleam with joy and that includes beautiful and practical web design and apps. 
            <br/><br/>
            <span className="opener"> <i className="fa fa-code" aria-hidden="true"></i>A meditator at heart <i className="fa fa-code" aria-hidden="true"></i></span> <br/>I try to live a life of <strong><em><u>#kindfulness</u></em></strong> in a world where kindness for all beings comes first. That includes using technology and the web in all sorts of ways to improve all our lives. Insight meditation gives me the opportunity to revisit my thoughts (design or otherwise) and helps me to focus on what is important.  Undeniably useful skills for a web designer.
            <br/><br/>
            <span className="opener"> <i className="fa fa-code" aria-hidden="true"></i>An art of tea practitioner<i className="fa fa-code" aria-hidden="true"></i> </span> <br/>I am a learner and teacher of tea for over 20 years. Through the art of tea, I have learnt the importance of patience and the smooth flow of things. I treasure the tea ceremony motto of <strong><em>ichigo-ichie</em></strong> "<strong>一 期 一 会</strong>" (<em>lit. “for this time only"</em>). This is a concept of treasuring <strong>the unrepeatable nature of a moment</strong>. In web design, the said moment is a very short time where a user is either attracted to a web page or be turned away from it.  A well-designed website is made for the user in mind not at the whims of the web designer.
          </div>
        </Col>

      </Row>
    </Container>
    </>

  )
}