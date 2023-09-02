import React from "react";

const ItemsContext = React.createContext(

    {   name:'',
         value: '',
        Selected:(item)=>{}
    }
);

export default ItemsContext
