import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavbarComponent.css'

const GoldNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
    <div className='navbar-wrapper'>
      <Navbar className='background-primary padding-side' variant="light" expand="lg" expanded={expanded} fixed="top">
        <Navbar.Brand href="#">Your Logo</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
</div>
    </>
  );
};

export default GoldNavbar;






