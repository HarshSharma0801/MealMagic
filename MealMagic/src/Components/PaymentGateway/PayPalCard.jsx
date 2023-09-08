import React, {useRef , useEffect , useContext} from "react";
import CartContext from "../../ContextAPI/CartContext";
import Modal from "../../Modals/Modal";

const Payment = ()=>{
    const paypal = useRef();
    const CartCtx = useContext(CartContext);
    const totalAmount = CartCtx.totalAmount.toFixed(2);

    useEffect(()=>{
        window.paypal.Buttons(
            {
                createOrder:(data,actions,err)=>{
                    return actions.order.create({
                        intent:"CAPTURE",
                        purchase_units:  [{
                            amount: {
                                value: totalAmount,
                                currency_code: 'USD',
                                
                            }
                        }]
                    })
                },
                onApprove: async(data,actions)=>{
                    const order = await actions.order.capture();
                },
                onError:(err)=>{
                    console.log(err);
                }


            }).render(paypal.current)

    },[])

    return(
        <Modal>
            <div className="flex font-semibold text-xl" ref={paypal}><span>Thank You!! for Ordering From <span className="text-MainTheme">MealMagic</span> , Your OrderTotal is ${totalAmount}</span></div>
        </Modal>
       
    )
}
export default Payment;

