import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import Main from '../components/Main';

export default function About(props) {
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
         <p>
            Fat Free Fat. Kombucha, tempeh tofu Kaya toast, forage Pu-Erh tea freegan. Distillery lo-fi umami, tempura, Hainanese chicken rice. 
         </p>
         <p>
            Bitters seitan art kitsch is sriracha. Hammock ichigo-ichie.  Fabulous!
            SHADE! Sugarless sugar and extinction rebellion thunder cats dreamcatcher wabi sabi. Gongfu tea ceremony is kale chips. Don’t eat sugar. Brexit is a unicorn.  Is la croix the best bonsai?  
         </p>
         <p>
            But is it art?  WERK!
         </p>
        </Col>

      </Row>

      </div>
    </Container>
    </>

  )
}
