import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComp() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky='top'>
            <Container>
                <Navbar.Brand href="#home">KW</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto justify-content-end">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#about" >About Me</Nav.Link>
                        <Nav.Link href="#portfolio">Projects</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#timeline">Timeline</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default NavbarComp;