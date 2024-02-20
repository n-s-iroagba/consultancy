import React from 'react';
import { Container } from 'react-bootstrap';
import { ContactButton } from './Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const TalkToTheTeam = () => {
  return (
    <Container >
    <div className='d-flex flex-column justify-content-start align-items-center'>
      <h2>Talk to the Team</h2>
      <div className='text-bar'></div>
      </div>
      <div className='padding-side'>
      <p>
      We value your input and would greatly appreciate hearing from you. Your feedback is important to us as we strive to continuously improve our services. Please feel free to reach out to us with any questions, concerns, or suggestions you may have. We look forward to hearing from you.
      </p>
      <div>
        <FontAwesomeIcon className='icon-size' icon={faEnvelope}/>
        <p>ElijahKlitz@donald.com</p>
      </div>
      <div>
        <FontAwesomeIcon className='icon-size' icon={faPhone}/>
        <p>+123-457-8955</p>
      </div>
    <ContactButton/>
    </div>
    </Container>
  );
};

export default TalkToTheTeam;
