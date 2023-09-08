import Modal from "../../Modals/Modal"
import CartContext from "../../ContextAPI/CartContext"
import { useContext } from "react"
import './CartDesign.css'
import CartItem from "./CartItem"
import { Link  } from "react-router-dom";

const Cart =(props)=>{
    const CartCtx = useContext(CartContext);
  
  console.log(CartCtx.items);

  const ItemsAddHandler = (item)=>{
   CartCtx.addItem({
   ...item,amount:1
   });
  };

  const ItemsRemoveHandler = (id)=>{
    CartCtx.removeItem(id);
    
  };

  const CartItems = (
    <ul className="cart-items">
      {CartCtx.items.map((item) => (
        <CartItem
          img={item.img}
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={ItemsRemoveHandler.bind(null, item.id)}
          onAdd={ItemsAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const ordered = () => {
    console.log("Ordering...");
    props.closed();
    props.OrderClick();

  };
  const hasItems = CartCtx.items.length > 0;
  const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`

  const closed=()=>{
    props.closed()
  }
 const path ="Payment"

    return(
        <Modal>
    
       {CartItems}
        <div className="total">
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className="actions">
          <button className="button--alt" onClick={closed}>
            close
          </button>
          {hasItems && (
            <Link to={path}>
             <button className="button" onClick={ordered}>
              Order
            </button>
            </Link>
           
          )}
        </div>
        </Modal>


    )
}
export default Cart