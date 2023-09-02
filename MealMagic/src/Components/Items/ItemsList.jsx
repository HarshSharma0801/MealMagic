import React, { useContext, useState, useEffect } from "react";
import ItemsContext from "../../ContextAPI/ItemsContext";
import ItemsLayout from "./ItemsLayout";

const ItemsList = () => {
  const ItemCtx = useContext(ItemsContext);
  const Food = ItemCtx.value;
  console.log(Food);
  const [LoadedCategories, SetLoadedCategories] = useState();

  useEffect(() => {
    main();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("https://food-orderapp-backend-default-rtdb.firebaseio.com/Items/"+Food+".json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const main = async () => {
    const dataArray = await fetchData();
    SetLoadedCategories(await dataArray);
  };

  return (
    <>
      <div className="bg-Background-light">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our {ItemCtx.name}
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 transition ease-in duration-300">
            {LoadedCategories &&
              LoadedCategories.map((product) => (
                <ItemsLayout
                  key={product.id}
                  img={product.img}
                  name={product.name}
                  price={product.price}
                  dsc={product.dsc}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsList;
