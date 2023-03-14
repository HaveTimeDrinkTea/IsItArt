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
          <div className="homeSk lhsH">
            <div class="typewriter">
            <h1>skills</h1>
            </div>

          <br/><br/>
        <HomeRoles roleType="technologies" />
        <HomeRoles roleType="graphics" />
        <HomeRoles roleType="accountancy" />
        <HomeRoles roleType="consultancy" />
        <HomeRoles roleType="languages" />
          </div>
          
        </Col>
        <Col size="sm-6">  
          <div class="rhsHome">
            <span class="opener"> <i class="fa fa-code" aria-hidden="true"></i> tech competencies <i class="fa fa-code" aria-hidden="true"></i> </span> <br/>
            <i class="fa-brands fa-js bgJScript"></i> 
            <i class="fa-brands fa-html5 bgHTML5"></i>
            <i class="fa-brands fa-css3 bgCSS3"></i> 
            <i class="fa-brands fa-node-js bgNode"></i> 
            <i class="fa-brands fa-react bgReact"></i> 
            <i class="fa-brands fa-swift bgSwift "></i>
            <i class="fa-brands fa-github bgGitHub"></i>             
            <i class="fa-brands fa-git bgGit"></i> 
            <i class="fa-brands fa-bootstrap bgBootstrap"></i>
            <i class="fa-brands fa-wordpress bgWordpress"></i> <br/>
            <i class="fa-solid fa-database bgMySQL"></i> mySQL &amp; Oracle DBA <i class="fa-solid fa-cart-shopping bgWoo"></i> Woocommerce

            <br/><br/>
            <span class="opener"> <i class="fa fa-code" aria-hidden="true"></i> digital illustrations <i class="fa fa-code" aria-hidden="true"></i></span> <br/> I started digital illustrations during the pandemic and have been drawing on <strong><em>Procreate</em></strong> and <strong><em>Affinity Designer</em></strong> apps since. I am learning <strong><em>Affinity Photos</em></strong>  and <strong><em>Affinity Publisher</em></strong>. My art works are used mainly in the social media marketing for teanamu.com.
            <br/><br/>
            <span class="opener"> <i class="fa fa-code" aria-hidden="true"></i> business management & accountancy <i class="fa fa-code" aria-hidden="true"></i> </span> <br/>I am a graduate of B.Acc and have over 20 years of accountancy business management experience. I currently own and run a micro-business at teanamu limited.
            <br/><br/>
            <span class="opener"> <i class="fa fa-code" aria-hidden="true"></i> consultancy & data mining <i class="fa fa-code" aria-hidden="true"></i> </span> <br/> I worked with Oracle Singapore as a Oracle Financials consultant and later in data-mining and manager with a UK telecomms company and a large UK retailer.
            <br/><br/>
            <span class="opener"> <i class="fa fa-code" aria-hidden="true"></i> languages <i class="fa fa-code" aria-hidden="true"></i> </span> <br/> I am fluent in English and Chinese. I can also speak and read beginner's level Japanese (JLPT Level N4).
          </div>
        </Col>

      </Row>
    </Container>
    </>

  )
}
