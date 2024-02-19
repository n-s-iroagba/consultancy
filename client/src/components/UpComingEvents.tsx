import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';

interface Item {
  title: string;
  description: string;
  image: string;
}

interface CardGridProps {
  items: Item[];
}

const CardGrid: React.FC<CardGridProps> = ({ items }) => {
  return (
    <Container>
      <Row>
        {items.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className="mb-4">
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const UpComingEvents:React.FC = ()=>{
    return <div>events</div>
    
}
export default UpComingEvents