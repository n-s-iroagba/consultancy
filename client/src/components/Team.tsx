import React from 'react';
import { Card, Container } from 'react-bootstrap';
import klitz from '../assets/images/mrklitz.jpeg'
import team1 from '../assets/images/team1.jpeg'
import team2 from '../assets/images/team2.jpeg'
import team3 from '../assets/images/team3.jpeg'

import { Row, Col } from 'react-bootstrap';
import '../assets/Styles.css'
interface TeamMember {
  name: string,
  position: string,
  image: any,
}

const Team: React.FC = () => {
  const teamMembers =[{
    name: 'Elijah Klitz',
    position: 'Chief Executive Officer',
    image:klitz
  
  },
  {
    name: 'Anna Legend',
    position: 'Chief Operations Officer',
    image:team1
  
  }, 
  {
    name: 'Paschal Singh',
    position: 'Chief Technical Officer',
    image:team2
  
  }
  ,{
    name: 'Emmanuel Singh',
    position: 'Managing Director',
    image:team3
  
  }]
  return (
    <Container>
     <div className='d-flex flex-column justify-content-center align-items-center py-4'>
      <h2>The Team</h2>
      <div className='text-bar'></div>
      <p className='text-center'>Our Management Team are the brains behind our success</p>
      </div>
    <Row>
    {teamMembers.map((member:TeamMember, index:number) => (
      <Col xs={12} md={6}lg={3}>
            <Card>
              <Card.Img style={{height:'8cm',objectFit:'cover'}}className=' rounded-circle px-4 py-4 round-border'  src={member.image} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.position}</Card.Text>
              </Card.Body>
            </Card>

  
      </Col>

))}
      </Row>
    </Container>
  );
};

export default Team;
