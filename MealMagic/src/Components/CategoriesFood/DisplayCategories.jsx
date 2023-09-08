import React, { useState, useEffect, useContext } from "react";
import CategoriesLayout from "./CategoriesLayout";
import coverImage from '../../assets/imageOne.jpg'



const DisplayCategories = () => {
  const [LoadedCategories, SetLoadedCategories] = useState();
  

  useEffect(() => {
    main();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://food-orderapp-backend-default-rtdb.firebaseio.com/Categories.json"
      );
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

  const products = LoadedCategories;

  return (
    <>
      <div className="bg-cover"  style={{ backgroundImage: `url(${coverImage})` }}>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-900 text-white">
            Our Categories
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10  sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 transition ease-in duration-300">
            {LoadedCategories &&
              LoadedCategories.map((product) => (
             <CategoriesLayout key={product.id} img={product.img} name={product.name} value={product.value}/>
              ))}
              
          </div>
        </div>
      </div>
    </>
  );
};
export default DisplayCategories;
