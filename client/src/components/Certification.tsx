import React from "react";
import Writeup from "./Writeup";
import { Row, Col } from 'react-bootstrap';
import certification1 from '../assets/home_images/cert1.png';
import certification2 from '../assets/home_images/awards02.png';
import certification3 from '../assets/home_images/cert3.png';

import '../assets/Styles.css';

const Cerfication: React.FC = () => {
    const cerfications = [ certification2, certification3,certification1];
    return (
        <div className="">
            <Writeup head='Accreditations and Certifications' writeup="Our cyber security consultants and services are globally recognised for meeting the highest standards of accreditation and have leading industry certifications." />
           
                <Row  className='px-4 mt-4 mr-0 w-100 d-flex justify-content-between align-items-center gy-4'>
                    {
                        cerfications.map((certification: any, index: number) => (
                            <Col key={index} xs={12}  lg={3}>
                                <div className='background-primary'>
                                    <img className="w-100" src={certification} alt="award" />
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            
        </div>
    );
};

export default Cerfication;
