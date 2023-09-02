import React , {useRef} from "react";
import Input from "./Input";
import './CartForm.css'
const CartForm = (props) => {
  
  const AmountInputRef = useRef();
  const SubmitHandler = event=>{
    event.preventDefault();
    const EnteredAmount = AmountInputRef.current.value ;
    const EnteredAmountNumber = +EnteredAmount;
    if(EnteredAmount.trim().length===0 || EnteredAmountNumber<1 || EnteredAmountNumber >5){
      return ;
    }

  }
  return (
    <form className="form" onSubmit={SubmitHandler}>
        <Input ref={AmountInputRef} label='Amount' input={{
         
        }}/> 
      <button>+Add</button>
    </form>
  );
};

export default CartForm;
