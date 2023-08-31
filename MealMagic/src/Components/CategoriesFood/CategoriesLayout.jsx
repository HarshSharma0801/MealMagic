import React, { useState, useContext } from "react";
import ItemsContext from "../../ContextAPI/ItemsContext";
import { Link } from "react-router-dom";
const CategoriesLayout = (props) => {
  const ItemCtx = useContext(ItemsContext);
  const [Path, SetPath] = useState("");
  const clicked = () => {
    ItemCtx.Selected(props.value);
    const SelectedPath = ItemCtx.value;
    SetPath(SelectedPath);
  };
  console.log(ItemCtx.value);

  return (
    <div key={props.id} className="group relative" >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 hover:">
        <img
          src={props.img}
          alt="image"
          className="h-full w-full object-cover object-center   lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div className="flex justify-stretch">
          <h3 className="text-xl text-gray-700 font-bold px-2">{props.name}</h3>
          <Link to={Path===ItemCtx.value && Path}>
            <button onClick={clicked} className=" w-24 h-10  rounded-full border-Text-Color border-2 hover:bg-MainTheme  text-Text-Color font-bold">
              Browse
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CategoriesLayout;
