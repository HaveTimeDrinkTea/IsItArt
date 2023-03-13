import Nav from 'react-bootstrap/Nav';

export default function NavbarFill() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/portfolio">Apps Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/portfolioart">Illustration Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/skills">Skills</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

