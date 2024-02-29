import React from 'react';
import { Card, Container } from 'react-bootstrap';
import logo from '../assets/images/logo.avif'
import { Row, Col } from 'react-bootstrap';
import '../assets/Styles.css'
interface TeamMember {
  name: string,
  position: string,
  image: any,
}

const TeamCarousel: React.FC = () => {
  const teamMembers =[{
    name: 'Elijah Klitz',
    position: 'Chief Executive Officer',
    image:logo
  
  }]
  return (
    <Container>
     <div className='d-flex flex-column justify-content-center align-items-center py-4'>
      <h2>The Team</h2>
      <div className='text-bar'></div>
      </div>
    <Row>
      <Col lg={3}>

        {teamMembers.map((member:TeamMember, index:number) => (

            <Card>
              <Card.Img className='w-100 rounded-circle border px-4 py-4 round-border' variant="top" src={member.image} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.position}</Card.Text>
              </Card.Body>
            </Card>

        ))}
  
      </Col>
      </Row>
    </Container>
  );
};

export default TeamCarousel;
