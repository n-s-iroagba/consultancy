import React from 'react';
import { Carousel, Card, Container } from 'react-bootstrap';

interface TeamMember {
  name: string,
  position: string,
  bio: string,
  image: string,
}

interface TeamCarouselProps {
  teamMembers: TeamMember[];
}

const TeamCarousel: React.FC<TeamCarouselProps> = ({ teamMembers }) => {
  return (
    <Container>
      <Carousel>
        team
        {teamMembers.map((member:TeamMember, index:number) => (
          <Carousel.Item key={index}>
            <Card>
              <Card.Img variant="top" src={member.image} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.position}</Card.Text>
                <Card.Text>{member.bio}</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default TeamCarousel;
