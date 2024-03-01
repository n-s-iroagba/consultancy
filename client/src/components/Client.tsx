import React from "react";
import Writeup from "./Writeup";
import {Row,Col} from 'react-bootstrap'
import '../assets/Styles.css'
import client1 from '../assets/home_images/client1.png'
import client2 from '../assets/home_images/client2.png'
import client3 from '../assets/home_images/client3.png'
import client4 from '../assets/home_images/client4.png'

const Client:React.FC = ()=>{
    const clients = [client1,client2,client3,client4]
    return<>
    <Writeup head='Notable Clients' writeup="Our cyber security consultants and services are globally recognised for meeting the highest standards of accreditation and have leading industry certifications. Below are the trademarks of some of our notable clients"/>
   <div  >
    <Row>
                {
                    clients.map((award: any, index: number) => (
                        <Col key={index} xs={12} md={6} lg={3} className='text-center'>
                        <img className="w-100" src={award} alt="award"/>
                    </Col>
                    ))
                }
            </Row>
            </div>
    </>
}
export default Client