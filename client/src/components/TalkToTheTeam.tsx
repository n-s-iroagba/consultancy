import React from 'react';
import { ContactButton } from './Buttons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import MapComponent from './MapComponent';

const TalkToTheTeam = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center px-4 pb-4'>
      <h2>Talk to the Team</h2>
      <div className='text-bar'></div>
      <p>
      We value your input and would greatly appreciate hearing from you. Your feedback is important to us as we strive to continuously improve our services. Please feel free to reach out to us with any questions, concerns, or suggestions you may have. We look forward to hearing from you.
      </p>
        <FontAwesomeIcon className='icon-size' icon={faEnvelope}/>
        <p>contact@elijahklitz.tech</p>
        <FontAwesomeIcon className='icon-size' icon={faPhone}/>
        <p>+1-951-239-0523</p> 
    <ContactButton/>
    <FontAwesomeIcon className='pt-5' icon ={faLocationDot}/> 
    <p className='pt-2 text-center word-wrap'>1055 E Colorado Blvd.,5th Floor,Pasedena,CA 91106.</p>
    <MapComponent/>  
    </div>
  );
};

export default TalkToTheTeam;
