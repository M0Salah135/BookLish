import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Bookish</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Books</Nav.Link>
              <Nav.Link href="#pricing">Login</Nav.Link>
              <Nav.Link href="#pricing">SignUp</Nav.Link>
             
            </Nav>
          </Container>
        </Navbar>
        </>
  );
}

export default NavBar;