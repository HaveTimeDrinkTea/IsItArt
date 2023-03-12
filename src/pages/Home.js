import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import HomeRoles from '../components/HomeRoles';

function Home(props) {
  return (
    <> 
    <Container>
    <div>
      <Row>

        <Col size="sm-6">
          <div className="homeBkGr">

          <h1>Pei Wang</h1>
          </div>
          
        </Col>
        <Col size="sm-6">  
        <h1 className="main-header">Is It Art?</h1>
        <HomeRoles roleType="web developer" />
        <HomeRoles roleType="digital illustrator" />
        <HomeRoles roleType="tea master" />
        <HomeRoles roleType="kindness promoter" />
        </Col>

      </Row>

      </div>
    </Container>
    </>

  )
}

export default Home;