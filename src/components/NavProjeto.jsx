import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Inicio from "../assets/inicio.png";


function NavProjeto() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Navbar.Brand href="#home">
            <img className="d-block w-100 c-img" src={Inicio} alt="" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Sobre">Sobre</Nav.Link>
            <Nav.Link href="/Contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavProjeto;