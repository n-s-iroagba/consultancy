import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {  faEnvelope,faArrowDown} from '@fortawesome/free-solid-svg-icons'
import '../assets/Styles.css'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { useNavigate } from 'react-router-dom'

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
export default Button


export const  ContactButton :React.FC = ()=>{
    const navigate = useNavigate()

    return<div onClick={()=>navigate('/contact-us')}><Button label='Get in touch' icon ={faEnvelope}/></div>
}
export const  BookingButton :React.FC = ()=>{
    const navigate = useNavigate()
    return<div onClick={()=>navigate('/events')}><Button label='Book your seat' icon ={faArrowDown}/></div>
}
