import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer className="mt-5 bg-black text-white text-center py-3" style={{ opacity: 0.5 }}>
      <Container fluid>
        <Row>
          <Col>
            <p>&copy; 2022 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

