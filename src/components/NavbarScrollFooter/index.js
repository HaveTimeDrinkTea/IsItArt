
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./style.css";

export default function NavbarScrollFooter() {
  return (
    <Navbar expand="lg" fixed="bottom" className="navbarScroll justify-content-end">
      <Container fluid>
        <Navbar.Brand href="/" className="aHover">Pei Wang <i class="fa fa-copyright" aria-hidden="true"></i> 2023 <br/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-auto"
            style={{ maxHeight: '190px' }}
            navbarScroll
          >
            <Nav.Link href="/contact" className="aHover"><i class="fa fa-envelope fa-2x" aria-hidden="true"></i> eMail</Nav.Link>
            <Nav.Link href="https://www.github.com/havetimedrinktea/" className="aHover"><i class="fa fa-github-square fa-2x" aria-hidden="true"></i> GitHub</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/teanamu" className="aHover"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i> LinkedIn</Nav.Link>
            <Nav.Link href="https://www.facebook.com/havetimedrinktea/" className="aHover"><i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i> Facebook</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

