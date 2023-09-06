import CartContext from "./CartContext";
import React, { useReducer } from "react";


const DefaultState = {
  items: [],
  Totalamount: 0,
};

const cartReducer = (state, action) => {
  console.log(action.item);
  if (action.type === "Add") {
    const updatedTotalAmount =
      state.Totalamount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);

    }

    console.log(updatedItems);

    return {
      items: updatedItems,
      Totalamount: updatedTotalAmount,
    };
  }

  if(action.type==="Remove"){

    
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    console.log(state.Totalamount);
    console.log(existingCartItem.price);
    
    const updatedTotalAmount =  state.Totalamount - existingCartItem.price;
    let updatedItems;
    if(existingCartItem.amount ===1){
      updatedItems = state.items.filter(item=>item.id !== action.id)
    }
    else{
      const updatedItem = {...existingCartItem , amount: existingCartItem.amount - 1}
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    console.log(updatedTotalAmount);
    return{
      items: updatedItems,
      Totalamount: updatedTotalAmount,
    }
  }



  return DefaultState;
};

const CartProvider = (props) => {
  const [CartState, dispatch] = useReducer(cartReducer, DefaultState);

  const addItemHandler = (item) => {
    dispatch({ type: "Add", item: item });
  };

  const removeItemHandler = (id) => {
    dispatch({ type: "Remove", id:id });
  };

  const cartContext = {
    items: CartState.items,
    totalAmount: CartState.Totalamount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
