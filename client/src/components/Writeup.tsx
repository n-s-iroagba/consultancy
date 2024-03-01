import React from 'react'
import '../assets/Styles.css'
const Writeup: React.FC<{head:string,writeup:string}> =(props)=>{
 return<div className='px-4 mt-4'>
 <div >
<div className='d-flex justify-content-center flex-column align-items-center py-2'>
<h1 className='bold-text text-center'> {props.head}</h1>
<div className='text-bar'></div>
</div>

</div>
<div className=' text-alignment'>{props.writeup}</div>
 </div>
}
export default Writeup