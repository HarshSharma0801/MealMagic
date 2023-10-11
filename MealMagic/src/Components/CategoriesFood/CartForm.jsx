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
      <div className="flex-col justify-center"> 
      <div>
      <Input ref={AmountInputRef} label='Amount:' input={{
         
        }}/> 
      </div>
      <div>
      <button className="p-2 border-1 px-4 bg-MainTheme text-white rounded-full text-center">+Add</button>

      </div>
    
      </div>
      
    </form>
  );
};

export default CartForm;
