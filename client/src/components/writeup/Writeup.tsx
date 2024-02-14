import React from 'react'
import './Writeup.css'
const Writeup: React.FC<{head:string,writeup:string}> =(props)=>{
 return<div>
 <div className='wrapper'>
<div className='column-flex'>
<h1 className='bold-text'> {props.head}</h1>
<div className='text-bar'></div>
</div>

</div>
<div className=''>{props.writeup}</div>
 </div>
}
export default Writeup