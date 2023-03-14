
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./style.css";

export default function NavbarScroll() {
  return (
    <Navbar expand="lg" className="navbarScroll fixed-top justify-content-end">
      <Container fluid>
        <Navbar.Brand href="/" className="aHoverTopNavLogo">
          HaveTimeDrinkTea <br/>
          <div className="avatar_container">
            <div className="avatar_middle">
               <img src={require("./webdeveloper_peiwang2.png")} alt="another avatar of Pei Wang" class="avatar_image avatar" />
            </div>
         </div>  
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-auto"
            style={{ maxHeight: '190px' }}
            navbarScroll
          >
            <Nav.Link href="/portfolio" className="aHoverTopNav">Web Dev</Nav.Link>
            <Nav.Link href="/portfolioart" className="aHoverTopNav">Digital Illustration</Nav.Link>
            <Nav.Link href="/skills" className="aHoverTopNav">Skills</Nav.Link>
            <Nav.Link href="/" className="aHoverTopNav">About Me</Nav.Link>
            <Nav.Link href="/resume" className="aHoverTopNav">Résumé</Nav.Link>
            <Nav.Link href="/contact" className="aHoverTopNav">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

