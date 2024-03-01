import React from 'react'
import logo from '../assets/home_images/logo.png'
import '../assets/Styles.css'

const Logo:React.FC = ()=>{
    return <>
    <img  className='small-logo' src={logo} alt='logo'/>
    </>

}
export default Logo



export const BigLogo:React.FC = ()=>{
    return <>
    <img  className='big-logo' src={logo} alt='logo'/>
    </>

}