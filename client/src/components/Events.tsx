import React from 'react';
import { Card, Container,Row,Col } from 'react-bootstrap';
import '../assets/Styles.css'
import image from '../assets/images/logo.avif'
import { BookingButton } from './Buttons';
interface Event {
  eventName: string;
  date: string;
  venue: string;
  details: string;
}

const Events: React.FC= () => {
  const events = [ {
    eventName: 'CNI Cyber Security Summit 2024',
    date: '23rd May',
  venue: 'East London',
  details: `Join us for the inaugural CNI Cyber Security Summit at the Radisson Blu Bloomsbury Street Hotel Central London.
  Designed specifically for senior decision makers working within the UK’s Critical National Infrastructure sectors, this  event will address the latest trends, 
  regulations and threats affecting CNI organisations, and how to deal with them.
   It will also provide an opportunity to network with peers and CNI industry leaders.`
  }]
  

  return (
    <Container className='margin-vertical'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
      <h2>Upcoming Events</h2>
      <div className='text-bar'></div>
      </div>
     
      {events.map((event:Event, index:number) => (
        <Card key={index} className="mb-3">
          <Card.Body>
      <Row>
        <Col lg={6}>
    <Card.Img src={image} alt='events' />
    </Col>
    <Col lg={6} >
            <Card.Title><h1>{event.eventName}</h1></Card.Title>
            <Card.Text><h4>{event.date}, {event.venue}</h4></Card.Text>
            <Card.Text><p>{event.details}</p></Card.Text>
            </Col>
    </Row> 
   <div className='margin-top'><BookingButton/></div>
          </Card.Body>
        </Card>
      ))}

    </Container>
  );
};

export default Events;
