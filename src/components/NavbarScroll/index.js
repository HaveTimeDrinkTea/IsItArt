
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./style.css";

export default function NavbarScroll() {
  return (
    <Navbar expand="lg" className="navbarScroll fixed-top">
      <Container fluid>
        <Navbar.Brand href="/">HaveTimeDrinkTea</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '190px' }}
            navbarScroll
          >
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
            <Nav.Link href="/resume">Résumé</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="Portfolio2" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Proj 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Proj2
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

