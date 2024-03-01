import React from "react";
import { BigLogo } from "../components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactButton } from "../components/Buttons";
import MapComponent from "../components/MapComponent";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Team from "../components/Team";


const About = ()=>{

  const writeup= `Elijah Klitz Cybersecurity, nestled in the heart of Los Gatos, California, stands as a beacon of trust and innovation in the realm of digital protection.
   With a mission to safeguard businesses and individuals from the ever-evolving landscape of cyber threats, 
   Elijah Klitz Cybersecurity brings a wealth of expertise and dedication to its clients.

  In an era where data breaches and online vulnerabilities can disrupt lives and businesses,
   Elijah Klitz Cybersecurity offers a comprehensive suite of cutting-edge solutions.
    Whether it's securing sensitive information, fortifying networks against malicious 
    intrusions, or providing expert guidance on cybersecurity best practices, the team at Elijah Klitz is committed to delivering peace of mind in a digital age.
  
  What sets Elijah Klitz Cybersecurity apart is not just its technical prowess but also 
  its personalized approach. Understanding that each client's needs are unique, the team takes the time to tailor solutions that fit like a glove. Whether it's a small startup aiming to establish a secure foundation or a large enterprise seeking to bolster its defenses, Elijah Klitz Cybersecurity is a trusted partner every step of the way.
  
  Beyond their technical expertise, Elijah Klitz Cybersecurity prides itself on transparency 
  and reliability. Clients can trust that they are not just getting a service; they are 
  forging a lasting partnership built on trust, integrity, and a shared commitment to digital safety.
  
  In the dynamic landscape of cybersecurity, Elijah Klitz Cybersecurity stands firm as a
   guardian of digital assets, providing the shield that modern businesses and individuals need to thrive securely`
    return<>
      <div className='d-flex flex-column justify-content-center align-items-center py-4'>
      <h2>About Us</h2>
      <div className='text-bar'></div>
      <BigLogo/>
      <p className="px-4">{writeup}</p>
      <Team/>
      <FontAwesomeIcon className='icon-size' icon={faEnvelope}/>
        <p>ElijahKlitz@donald.com</p>
        <FontAwesomeIcon className='icon-size' icon={faPhone}/>
        <p>+123-457-8955</p> 
    <ContactButton/>
    <FontAwesomeIcon className='pt-3' icon ={faLocationDot}/> 
    <p className='pt-1'>Address in california</p>
    <MapComponent/>  
      </div>
    
    </>
}
export default About