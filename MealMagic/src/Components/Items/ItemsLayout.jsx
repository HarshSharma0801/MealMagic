import CartForm from "../CategoriesFood/CartForm"


const ItemsLayout = (props)=>{
 

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
            <h5 className="text-2xl md:text-3xl font-medium mt-3">{props.name}</h5>
            <p className="text-slate-500 text-lg mt-3">{props.dsc}</p>
           <div className="flex justify-between">
           <div>
           <h5 className="text-2xl md:text-3xl font-medium mt-3 p-3">${((props.price)/10).toFixed(2)}</h5>
           </div>
           <div>
           <CartForm/>
           </div>

           </div>
        
          </div>
            </div>
    )

}
export default ItemsLayout