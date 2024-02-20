import React from 'react'
import '../assets/Styles.css'
const Writeup: React.FC<{head:string,writeup:string}> =(props)=>{
 return<div>
 <div className='wrapper'>
<div className='d-flex justify-content-center flex-column align-items-center'>
<h1 className='bold-text'> {props.head}</h1>
<div className='text-bar'></div>
</div>

</div>
<div className='padding-side-responsive'>{props.writeup}</div>
 </div>
}
export default Writeup