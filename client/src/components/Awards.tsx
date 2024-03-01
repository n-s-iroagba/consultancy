import React from "react";
import Writeup from "./Writeup";
import {Row,Col} from 'react-bootstrap'
import '../assets/Styles.css'
import awards1 from '../assets/home_images/award.png'
import awards2 from '../assets/home_images/award2.png'
import awards3 from '../assets/home_images/award3.png'
import awards4 from '../assets/home_images/award4.png'

const Awards:React.FC = ()=>{
    const awards = [awards1, awards2, awards3,awards4]
    return<>
    <Writeup head='Awards' writeup="We have distinguished ourselves as masters in our craft.Our dedication to excellence and innovation has earned us numerous awards and accolades in the cybersecurity industry"/>
   <div  className='margin-vertical'>
    <Row className="px-4">
                {
                    awards.map((award: any, index: number) => (
                        <Col key={index} xs={12} md={6} lg={3} className='text-center'>
                            <img className="w-100" src={award} alt="award"/>
                        </Col>
                    ))
                }
            </Row>
            </div>
    </>
}
export default Awards