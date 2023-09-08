import Navbar from "./Components/Header/Navbar";
import Home from "./Pages/Home";
import ItemsList from "./Components/Items/ItemsList";
import { Routes, Route } from "react-router-dom";
import ItemsContext from "./ContextAPI/ItemsContext";
import { useState, useContext } from "react";
import ItemNotFound from "./Components/Items/ItemNotFound";
import CartProvider from "./ContextAPI/CartProvider.jsx";
import Cart from "./Components/Cart/Cart";
import {loadStripe} from  "@stripe/stripe-js"


function App() {
  const Itemctx = useContext(ItemsContext);
  console.log(Itemctx.value);
  const Path = "/" + Itemctx.value;
  console.log(Path);

  const PaymentKey = "pk_test_51NnoXmSFHehR7P6bVlnz2V2A5VkVFjJYd8Veu7SZNvQYvT35zXs2f9e4dKHu6iyIJkm0uXc1rKjjjq0ksiWBEagA00hLiQAEzM"
  const StripePromise = loadStripe(PaymentKey);
  console.log(StripePromise);

  const [isShown, SetisShown] = useState(false);

  const clicked = () => {
    SetisShown(true);
  };
  const closed = () => {
    SetisShown(false);
  };

  return (
    <CartProvider>
      {isShown && <Cart closed={closed} />}
      <Navbar clicked={clicked} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={Path} element={<ItemsList />} />
        <Route path="*" element={<ItemNotFound />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
