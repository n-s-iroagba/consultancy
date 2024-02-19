import React from 'react'
import '../assets/Styles.css'
import ContactButton from './ContactButton'
import { ReactTyped } from "react-typed";


const HeadText = () => (
  <div className='horizontal-flex'>
    <h1 className='text-gold m-right-text'> We're {' '}</h1>
    <h1 className='text-light'>
      <ReactTyped
        startWhenVisible
        strings={[
          "Elijah Klitz",
        ]}
        typeSpeed={120}
      />
    </h1>
  </div>
);

const FirstWriteup: React.FC = () => {

  return <>
    <div className='head'>
      <div className='head-writeup'>
        <HeadText />
        <h1 className='sub-writeup'>
          LEADERS IN
        </h1>
        <h1 className='main-writeup'>
          CYBER SECURITY SERVICES
        </h1>
        <ContactButton />
      </div>
     
    </div>
  </>
}
export default FirstWriteup