import Navbar from "./Components/Header/Navbar";
import Home from "./Pages/Home";
import ItemsList from "./Components/Items/ItemsList";
import { Routes, Route } from "react-router-dom";
import ItemsContext from "./ContextAPI/ItemsContext";
import { useContext } from "react";
import ItemNotFound from "./Components/Items/ItemNotFound";
function App() {
  const Itemctx = useContext(ItemsContext);
  console.log(Itemctx.value);
  const Path = "/"+Itemctx.value;
  console.log(Path);

  return (
    <>
   
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={Path} element={<ItemsList />} />
          <Route path="*" element={<ItemNotFound />} />

        </Routes>
    </>
  );
}

export default App;
