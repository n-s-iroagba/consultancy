import React from 'react'
import '../assets/Styles.css'
import Writeup from './Writeup'
interface SingleImageProps{
    solutionImage:string,
    writeup: string
}
const SingleImage:React.FC<SingleImageProps> = ({solutionImage,writeup})=>{
return<div className={solutionImage}>
    <div style={{color:"white"}}>{writeup}</div>
</div>
}

const writeup = 'we offer a range of services'

const SolutionCarousel:React.FC= () =>{
const classes = ['solution1','solution2', 'solution3', 'solution4']
const writeups = ['penetration testing','cyber']
    return<>
    <div><Writeup head='Our Solution' writeup={writeup} /></div>
    <div className='scroll-items-wrapper'>
    <div className='scroll-items'>
    { classes.map((classItem: string,index:number)=>(
    <SingleImage key={index} solutionImage = {classItem} writeup= {writeups[index]} />
    ))   
}</div>
</div>
    </>
}
export default SolutionCarousel


