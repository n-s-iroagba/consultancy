import React from "react";
import Writeup from "./Writeup";
import {Row,Col} from 'react-bootstrap'
import '../assets/Styles.css'

const Cerfication:React.FC = ()=>{
    const cerfications = ['certification 1','certification 2','certification 3','certification 4','certification 5','certification 6','certification 7','certification 8',]
    return<>
    <Writeup head='Accreditations and Certifications' writeup="Our cyber security consultants and services are globally recognised for meeting the highest standards of accreditation and have leading industry certifications."/>
   <div  className='margin-vertical'>
    <Row>
                {
                    cerfications.map((award: any, index: number) => (
                        <Col key={index} xs={6} md={4} lg={3} className='text-center'>
                            {award}
                        </Col>
                    ))
                }
            </Row>
            </div>
    </>
}
export default Cerfication