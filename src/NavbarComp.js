import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './navbarstyle.css';


function NavbarComp() {
    return (
        <Navbar className="" expand="lg" bg="white" sticky='top' >
            <Container>
                <Navbar.Brand href="#"><h3>KW</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto justify-content-end">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#portfolio"><h4>Projects</h4></Nav.Link>
                        <Nav.Link href="#skills"><h4>Skills</h4></Nav.Link>
                        <Nav.Link href="#timeline"><h4>Timeline</h4></Nav.Link>
                        <Nav.Link href="#about" ><h4>About Me</h4></Nav.Link>
                        <Nav.Link href="#contact"><h4>Contact</h4></Nav.Link>
                        
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default NavbarComp;