import React from 'react'
import  './Input.css'

const Input =React.forwardRef((props,ref)=>{
    return(

        <div className='input'>
            <label htmlFor={props.input.id} >{props.label}</label>
            <input  type='number' defaultValue={1} min={1}/>
        </div>
    )
}) 
export default Input
