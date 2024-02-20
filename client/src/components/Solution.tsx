import React from 'react'
import { Carousel, Card } from 'react-bootstrap'
import '../assets/Styles.css'
import Writeup from './Writeup'
import { ContactButton } from './Buttons'

const writeup = `As a premier cybersecurity firm, we lead the industry with cutting-edge solutions and a global team of experts. 
Our personalized services guarantee round-the-clock protection, ensuring fast and reliable defense against cyber threats tailored to your specific needs.`

const SolutionCarousel: React.FC = () => {
    const classes = ['solution1', 'solution2', 'solution3', 'solution4']
    const writeups = ['penetration testing', 'cyber', 'penetration testing', 'cyber']
    return <div className='d-flex flex-column justify-content-between align-items-center'  >
       
            <div className='d-flex flex-column justify-content-between align-items-center'>
                <Writeup head='Our Solution' writeup={writeup} />
          
            
                <Carousel className='carousel padding-side-responsive'>
                    {classes.map((className, index) => (
                        <Carousel.Item key={index}>
                            <Card className={className} style={{ backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center text-light">
                                    <h3>{writeups[index]}</h3>
                                    <p>This is the slide content for {writeups[index]}</p>
                                </Card.Body>
                            </Card>
                        </Carousel.Item>
                    ))}
                </Carousel>
            
        </div>
            <ContactButton />
        </div>
    
}
export default SolutionCarousel


