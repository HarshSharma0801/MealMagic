import React ,{useState , useReducer} from "react";
import ItemsContext from "./ItemsContext";


const DefaultValue= {
    value:'',
    name:''
  }


  const ItemSelected = (state,action)=>{
    if(action.type==="SelectedCategory"){
        const UpdatedValue  = action.item.value;
        const Updatedname  = action.item.name;
        return {
            value:UpdatedValue,
            name:Updatedname
        }
    }

  }

const ItemsProvider = (props)=>{
    const [ItemState, dispatch] = useReducer(ItemSelected, DefaultValue);

    const ItemSelection =(item)=>{
        dispatch({ type: "SelectedCategory", item: item });

    }
    

    const UpdatedObject = {
        
        name:ItemState.name,
        value:ItemState.value,
        Selected:ItemSelection
        
    }


    return (
      <ItemsContext.Provider value={UpdatedObject}>
        {props.children}
      </ItemsContext.Provider>
    );

}
export default ItemsProvider