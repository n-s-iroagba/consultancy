import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const AwardsGrid:React.FC<any> = ({ awards }) => {
  return (
    <Row>
      {awards.map((award:any, index:number) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={award.image} />
            <Card.Body>
              <Card.Title>{award.title}</Card.Title>
              <Card.Text>{award.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AwardsGrid;
