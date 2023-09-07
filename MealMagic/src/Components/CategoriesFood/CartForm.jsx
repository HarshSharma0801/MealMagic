import React , {useRef , useState} from "react";
import Input from "./Input";
import './CartForm.css'
const CartForm = (props) => {
  
  const AmountInputRef = useRef();
  const [Click,SetClick] = useState(false)


  const SubmitHandler = event=>{
    SetClick(true)
    console.log(Click)
    event.preventDefault();
    const EnteredAmount = AmountInputRef.current.value ;
    console.log("Amount is "+EnteredAmount);
    const EnteredAmountNumber = +EnteredAmount;
    if(EnteredAmount.trim().length===0 || EnteredAmountNumber<1 || EnteredAmountNumber >5){
      return ;
    }
    props.OnAddingCart(EnteredAmountNumber);

  }
  
  return (
    <form className="form" onSubmit={SubmitHandler}>
        <Input ref={AmountInputRef} label='Amount:' input={{
         
        }}/> 
      <button>+Add</button>
    </form>
  );
};

export default CartForm;
