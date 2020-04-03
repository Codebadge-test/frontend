import React from 'react';
import { Button,Navbar,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
const Header = () => {
    return (
        <Navbar class="header" bg="white" expand="lg">
            <Navbar.Brand class="toolbar"><h2>Codebadge</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content:end">
                <Nav className="mr-auto toolbar-button">
                    <Nav.Link><Button  variant="light" className="light">About Us</Button></Nav.Link>
                    <Nav.Link><Button  variant="light" className="light">Join Us</Button></Nav.Link>
                    <Nav.Link><Button  variant="primary" className="primary">Logout</Button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
