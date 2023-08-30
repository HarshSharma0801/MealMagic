import React, { useState, useEffect } from "react";
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
      <div className="bg-Background-light">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Categories
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 transition ease-in duration-300">
            {products &&
              products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 hover:">
                    <img
                      src={product.img}
                      alt="image"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-lg text-gray-700 font-bold">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default DisplayCategories;
