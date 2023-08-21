import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <>
      <Navbar bg="sucess" variant="light">
        <Container>
          <Navbar.Brand href="/">ONG Floresta Viva</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Site Institucional </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
