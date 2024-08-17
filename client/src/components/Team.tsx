import React from 'react';
import { Card, Container } from 'react-bootstrap';
import klitz from '../assets/images/mrklitz.jpeg'
import team1 from '../assets/images/team1.jpeg'


import { Row, Col } from 'react-bootstrap';
import '../assets/Styles.css'
interface TeamMember {
  name: string,
  position: string,
  position2:string,
  image: any,
}

const Team: React.FC = () => {
  const teamMembers =[{
    name: 'Elijah Winslow',
    position: 'Chief Executive Officer',
    position2:' Chief Technical Officer',
    image:klitz
  
  },
  {
    name: 'Anna Legend',
    position: 'Chief Operations Officer',
    position2:'',
    image:team1
  
  }, 
 ]
  return (
    <Container>
     <div className='d-flex flex-column justify-content-center align-items-center py-4'>
      <h2>The Team</h2>
      <div className='text-bar'></div>
      <p className='text-center'>Our Management Team are the brains behind our success</p>
      </div>
    <Row className='gy-4 d-flex justify-content-center'>
    {teamMembers.map((member:TeamMember, index:number) => (
      <Col xs={12} md={6}lg={3}>
            <Card className=''>
              <Card.Img style={{height:'13cm',objectFit:'cover',paddingTop:'2cm'}}className=' round-border  px-1 py-1'  src={member.image} />
              <Card.Body className='text-center'>
                <Card.Title>{member.name}</Card.Title>
               <> <Card.Text>{member.position}</Card.Text></>
                <>{member.position2!==''?<Card.Text>&</Card.Text>:<Card.Text className='text-transparent'>a</Card.Text>}</>
                <>{member.position2!==''?<Card.Text>{member.position2}</Card.Text>:<Card.Text className='text-transparent'>a</Card.Text>}</>
              </Card.Body>
            </Card>
      </Col>
))}
      </Row>
    </Container>
  );
};

export default Team;
