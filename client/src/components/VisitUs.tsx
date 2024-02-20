import React from "react";
import { Container } from 'react-bootstrap';

import MapComponent from "./MapComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const VisitUs = ()=>{

      return (
        <Container >
        
        <div className='d-flex flex-column justify-content-start align-items-center'>
          <h2>Visit Us</h2>
          <div className='text-bar'></div>
          </div>
          <div  className='margin-vertical padding-side'>
          <FontAwesomeIcon icon ={faLocationDot}/>  
          <p >40 Caversham Road, Reading, RG1 7EB, Central London</p>
          <MapComponent/>    
          </div>
          
        </Container>
      );
    };
 
export default VisitUs