import { useContext } from "react";
import CartForm from "../CategoriesFood/CartForm"
import CartContext from "../../ContextAPI/CartContext";
import {FcRating} from 'react-icons/fc'


const ItemsLayout = (props)=>{
  const Cartctx = useContext(CartContext);
  const addToCartHandler = amount =>{
    
    Cartctx.addItem({
      img:props.img,
      id:props.id,
      name:props.name,
      price:props.price/10,
      amount: amount
    })
    
  }



    return (
        <div key={props.id} className="group relative card bg-silver">
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
            <img
          src={props.img}
          alt="image"
          className="h-full w-full object-cover object-center   lg:h-full lg:w-full"
        />
            </div>
            <div>
              <div className="flex justify-between py-2">
              <h5 className="text-2xl md:text-3xl font-medium mt-3">{props.name}</h5>
              </div>
              <div>
                <h6 className="text-xl">{props.rating}<span className="size-4">⭐</span></h6>
              </div>
            </div>
           
            <p className="text-slate-500 text-lg mt-3">{props.dsc}</p>
           <div className="grid grid-cols-2 gap-4">
           <div className="p-4 ">
           <h5 className="text-2xl md:text-3xl font-medium mt-3 p-3">${((props.price)/10).toFixed(2)}</h5>
           </div>
           <div className="p-4 ">
           <CartForm OnAddingCart={addToCartHandler}/>
           </div>

           </div>
        
          </div>
            </div>
    )

}

export default ItemsLayout