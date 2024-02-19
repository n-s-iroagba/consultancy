import React from 'react';
import { Card, Container } from 'react-bootstrap';

interface Event {
  eventName: string;
  sponsors: string;
  topic: string;
  date: string;
}

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  // Sort events by date from earliest to latest
  const sortedEvents = events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <Container>
      <h2>Events</h2>
      {sortedEvents.map((event, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>{event.eventName}</Card.Title>
            <Card.Text><strong>Sponsors:</strong> {event.sponsors}</Card.Text>
            <Card.Text><strong>Topic:</strong> {event.topic}</Card.Text>
            <Card.Text><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default EventList;
