import React from "react";

const ItemsContext = React.createContext(

    {  
         value: '',
        Selected:(item)=>{}
    }
);

export default ItemsContext
