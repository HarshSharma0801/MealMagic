import React , {useContext} from 'react'
import CartContext from "../../ContextAPI/CartContext";
import {BsFillCartCheckFill} from 'react-icons/bs'


const HeaderCart = (props)=>{

  const Cartc = ()=>{
    props.CartClicked();
    console.log("hi");
  }
 


    return(
        <div  className='pr-6 md:pr-16'>
        <button onClick={Cartc}  className='flex md:flex cursor-pointer font-inherit rounded-full w-36 h-8 pr-2 justify-center border-2 border-MainTheme hover:bg-MainTheme'>
          <BsFillCartCheckFill className='h-6 w-8'/>
          <span className=' text-Text-Color font-bold'>Your Cart</span>
          <span className='badge px-1 text-Text-Color font-bold '>(0)</span>
  
        </button>
  
        </div>

    )
}
export default HeaderCart