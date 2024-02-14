import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faBars, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import './Buttons.css'

const ContactButton: React.FC =()=>{
    return<>
    <div className='button-container'>
        <button className='borderless-button' > 
    Get in touch
    </button>
    <span className='circular-font-border'>
        <FontAwesomeIcon icon={faEnvelope} beatFade />
        </span>
        </div>
    </>
}
export default ContactButton