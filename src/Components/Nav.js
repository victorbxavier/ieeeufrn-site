import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Imgs/logo-44.png'

import '../css/nav.css'

function NavScrollExample() {
    const linkStyle = {
        fontSize: "18px",
        fontWeight: '500',
    };
    
    const linkHoverStyle = {
        color: 'red', // Substitua pela cor desejada
    };

  return (
    <Navbar bg="light" expand="lg" variant="light" style={ {borderBottom: "1px solid #FFC72C", marginBottom: '70px'} }  >
        <Container >

            <Navbar.Brand>
                <Image src={logo} alt="Logo" style={ { height: "50px" } }/>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">

            {
            /* <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Procurando por algo?"
                    className="me-2"
                    aria-label="Search"
                    style={{
                        width: "300px",
                        borderRadius: "40px",
                        background: "#D68914",
                        border: "none",
                     
                    }}
                />
                <Button variant="outline-success">Search</Button>
            </Form> */
            }
                
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#" className='linkStyle'>Início</Nav.Link>
                    <Nav.Link href="#" className='linkStyle'>Notícias</Nav.Link>
                    <Nav.Link href="#" className='linkStyle'>Projetos</Nav.Link>
                    <Nav.Link href="#" className='linkStyle'>Eventos</Nav.Link>
                    <Nav.Link href="#" className='linkStyle'>Capítulos</Nav.Link>
                    <Nav.Link href="#" className='linkStyle'>Sobre</Nav.Link>
                </Nav>
          
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavScrollExample;