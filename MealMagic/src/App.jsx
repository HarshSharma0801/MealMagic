import Navbar from "./Components/Header/Navbar";
import Home from "./Pages/Home";
import ItemsList from "./Components/Items/ItemsList";
import { Routes, Route } from "react-router-dom";
import ItemsContext from "./ContextAPI/ItemsContext";
import { useState, useContext } from "react";
import ItemNotFound from "./Components/Items/ItemNotFound";
import CartProvider from "./ContextAPI/CartProvider.jsx";
import Cart from "./Components/Cart/Cart";
import Payment from "./Components/PaymentGateway/PayPalCard";

function App() {
  const Itemctx = useContext(ItemsContext);
  console.log(Itemctx.value);
  const Path = "/" + Itemctx.value;
  console.log(Path);


  const [isShown, SetisShown] = useState(false);
  const [NavShown, SetNavShown] = useState(true);


  const clicked = () => {
    SetisShown(true);
  };
  
  const closed = () => {
    SetisShown(false);
  };
  const OrderClick = ()=>{
    SetNavShown(false)
  }

  return (
    <CartProvider>
      {isShown && <Cart closed={closed} OrderClick={OrderClick}/>}
      {NavShown ?       <Navbar clicked={clicked} /> : "" }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Item" element={<ItemsList />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="*" element={<ItemNotFound />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
