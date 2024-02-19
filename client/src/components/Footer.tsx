import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/Styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
  return (
    <footer className=" text-light py-4">
      <Container>
        
        <Row>
          <Col xs={12} md = {9}>
             {/* 3 columns */}
            <Row> 
              <Col md={4}>
                <h5>Services</h5>
                <ul className="list-unstyled">
                  <li>Cyber Security Services</li>
                  <li>Penetration Testing</li>
                  <li>Data Privacy</li>
                </ul>
              </Col>
              <Col md={4}>
                <h5>About Us</h5>
                <ul className="list-unstyled">
                  <li>Services</li>
                  <li>Why Elijah Klitz?</li>
                  <li>Insights</li>
                  <li>Careers</li>
                </ul>
              </Col>
              <Col md={4}>
                <h5>Legal</h5>
                <ul className="list-unstyled">
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                  <li>Terms of Use</li>
                  <li>Sitemap</li>
                  <li>Contact Us</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md= {3}>
           {/* 1 column */}
            <Row className="mt-4">
              <Col xs={12}>
                <p style={{}}>+44 (0)3308 285 883</p>
                <p>hello@elijahklitzcybersecurity.com</p>
              </Col>
            </Row>
            <Row>
              {/* <FontAwesomeIcon/>
               <FontAwesomeIcon/>
              <FontAwesomeIcon/> */}
            </Row>
          </Col>
        </Row>
        <Row>
           {/* bottom */}
          <Col md={6}>
          <p className="text-md-right">
              ELijah Klitz  is the trading name of Elijah Cyber Security Limited, a company registered in England and Wales.
            </p>
            <p className="text-md-right">
              VAT Registration No: 386809347 | Company Registration No: 11101195.
            </p>
            <p className="text-md-right">Registered Office: 40 Caversham Road, Reading, RG1 7EB</p>
  
          </Col>
          
        </Row>
        <Row>
            <Col xs={12}>
            <p className="text-center">Copyright 2024 – Elijah Klitz</p>
            </Col>
            </Row>
      </Container>
    </footer>
  );
};

export default Footer;
