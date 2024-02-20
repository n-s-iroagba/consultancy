import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {  faEnvelope,faArrowDown} from '@fortawesome/free-solid-svg-icons'
import '../assets/Styles.css'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const Button: React.FC<{label:string,icon:IconProp}> =({label, icon})=>{
    return<>
        <button className='round-button d-flex flex-row justify-content-evenly align-items-center' > 
    <span> {label}</span>
    <span className='circular-icon-border'>
        <FontAwesomeIcon icon={icon} beatFade />
        </span>
    </button>
   
    </>
}


export const  ContactButton :React.FC = ()=>{
    return<Button label='Get in touch' icon ={faEnvelope}/>
}
export const  BookingButton :React.FC = ()=>{
    return<Button label='Book your seat' icon ={faArrowDown}/>
}