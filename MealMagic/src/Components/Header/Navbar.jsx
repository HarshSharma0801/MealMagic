import React , {useState} from 'react';
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
import HeaderCart from './HeaderCart';




const Navbar = (props) => {

  const [MenuClicked,SetMenuClicked] = useState(false);
  
  const ClickedMenu = ()=>{
    SetMenuClicked(prevstate=>{
        return !prevstate
    });
  }

  return (
    <nav className="flex  justify-between items-center h-16 px-4 bg-Background-light ">
      <div>
        <h1 className="cursor-pointer text-MainTheme font-bold text-4xl">MealMagic</h1>
      </div>
      <ul className="hidden md:flex">
        <li className="p-4 text-Text-Color hover:text-MainTheme text-xl cursor-pointer">Order Now</li>
        <li className="p-4 text-Text-Color hover:text-MainTheme text-xl cursor-pointer">About Us </li>
        <li className="p-4">
          <form className="flex rounded-lg border-2 text-Text-Color border-MainTheme text-xl">
            <label className="px-2" for="Items">Choose a Category:</label>

            <select className="px-2 outline-none bg-Background-light" name="Items">
              <option value="bbq">BBQ</option>
              <option value="pizza">Pizzaz</option>
              <option value="burgers">Burgers</option>
              <option value="Drinks">Drinks</option>
            </select>
            <button  className="px-2 bg-MainTheme" type="submit">Search</button>
          </form>
        </li>
      </ul>
      <HeaderCart CartClicked={props.clicked} />
    
    

      <div className='block md:hidden'>
        {MenuClicked ?<AiOutlineClose className='cursor-pointer text-lg' onClick={ClickedMenu}/> :<AiOutlineMenu className='cursor-pointer text-lg' onClick={ClickedMenu}/>}
      </div>


      <div className={MenuClicked ? 'fixed left-0 top-0 w-[60%] h-full bg-Background-light transition ease-in duration-500' : 'hidden'}>
      <h1 className="cursor-pointer text-MainTheme font-bold text-4xl p-4">MealMagic</h1>

        <ul className='pt-10'>
        <li className="p-4 hover:text-MainTheme text-base border-b border-MainTheme font-semibold">Order Now</li>
        <li className="p-4 hover:text-MainTheme text-base border-b border-MainTheme font-semibold">About Us </li>
        <li className="p-4">
          <form className="flex rounded-lg border-2 border-MainTheme text-base font-semibold">
            <label className="px-2" for="Items">Choose a Category:</label>

            <select className="px-2 outline-none bg-Background-light" name="Items">
              <option value="bbq">BBQ</option>
              <option value="pizza">Pizzaz</option>
              <option value="burgers">Burgers</option>
              <option value="Drinks">Drinks</option>
            </select>
            <button  className="px-2 bg-MainTheme" type="submit">Search</button>
          </form>
        </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
