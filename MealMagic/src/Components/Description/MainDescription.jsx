import React  from "react";
import Food from "../../assets/food.jpg";
import Typed from "react-typed";
const Description = () => {

  

  return (
    <div className="block md:flex px-4 bg-Background-light">
      <div className="block md:flex-1 p-4 rounded-full">
        <img src={Food} alt="Food" className="rounded-full" />
      </div>

      <div className="flex-1 p-4 ">
        <span className="text-6xl text-Text-Color">
          Experience the enchantment of flavors with MealMagic ! We offer Best{" "}
        </span>
        <span className="text-6xl text-MainTheme">
        <Typed
          strings={["Quality Food", "Taste", "Services"]}
          typeSpeed={150}
          backSpeed={50}
          loop
        />
        </span>
        <br/>
        <div className="pt-8">
        <button className=" w-48 h-16 rounded-full border-Text-Color border-2 hover:bg-MainTheme  text-Text-Color font-bold">
         Browse Menu
        </button>
        </div>
        
        
      </div>
    </div>
  );
};
export default Description;
