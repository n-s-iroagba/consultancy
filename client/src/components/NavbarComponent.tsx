import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../assets/Styles.css'

const GoldNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar className='background-primary px-5' variant="light" expand="lg" expanded={expanded} fixed="top">
        <Navbar.Brand href="#">Your Logo</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/contact-us">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default GoldNavbar;






