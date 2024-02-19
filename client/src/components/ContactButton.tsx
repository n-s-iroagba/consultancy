import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {  faEnvelope,} from '@fortawesome/free-solid-svg-icons'
import '../assets/Styles.css'

const ContactButton: React.FC =()=>{
    return<>
        <button className='round-button d-flex flex-row justify-content-evenly align-items-center' > 
    <span> Get in touch</span>
    <span className='circular-icon-border'>
        <FontAwesomeIcon icon={faEnvelope} beatFade />
        </span>
    </button>
   
    </>
}
export default ContactButton