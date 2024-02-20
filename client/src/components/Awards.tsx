import React from "react";
import Writeup from "./Writeup";
import {Row,Col} from 'react-bootstrap'
import '../assets/Styles.css'

const Awards:React.FC = ()=>{
    const awards = ['awards 1','awards 2','awards 3','awards 4','awards 5','awards 6','awards 7','awards 8',]
    return<>
    <Writeup head='Awards' writeup="We have distinguished ourselves as masters in our craft.Our dedication to excellence and innovation has earned us numerous awards and accolades in the cybersecurity industry"/>
   <div  className='margin-vertical'>
    <Row>
                {
                    awards.map((award: any, index: number) => (
                        <Col key={index} xs={6} md={4} lg={3} className='text-center'>
                            {award}
                        </Col>
                    ))
                }
            </Row>
            </div>
    </>
}
export default Awards