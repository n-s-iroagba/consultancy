import React from 'react'
import NavbarComponent from '../../components/navbar/NavbarComponent'
import './Home.css'
import FirstWriteup from '../../components/header/Header'
import Solution from '../../components/solution_carousel/Solution'
import Footer from '../../components/footer/Footer'
import Counter from '../../components/counter/Counter'


const Home:React.FC= ()=>{

    return( 

        
     <div className='home-container'>
        <div className='home-firstview'>
        <NavbarComponent/>
       <FirstWriteup/>
       
        </div>
        <Solution/>
        <Counter/>
        aefhnaf f
        <Footer/>
    </div> 
  
    )
}
export default Home