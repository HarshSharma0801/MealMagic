import React , {useState , useEffect,useContext } from 'react';
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
import HeaderCart from './HeaderCart';
import { Link , useNavigate } from "react-router-dom";
import ItemsContext from '../../ContextAPI/ItemsContext';




const Navbar = (props) => {
 const path = "";
  const [MenuClicked,SetMenuClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [Path, SetPath] = useState();

  




  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const ClickedMenu = ()=>{
    SetMenuClicked(prevstate=>{
        return !prevstate
    });
  }

  const  NavClass = scrolled ? "flex  justify-between items-center h-16 px-4  bg-silver fixed z-50 w-full   rounded-xl" : "flex  justify-between items-center h-16 px-4 bg-Background-light fixed z-50 w-full"
   






  return (
    <nav className={NavClass}>
     
        <Link to={path}>
        <div>
        <h1 className="cursor-pointer text-MainTheme font-bold text-4xl">MealMagic</h1>
      </div>
        </Link>
        
      <ul className="hidden md:flex">
        <li className="p-4 text-Text-Color hover:text-MainTheme text-xl cursor-pointer">Order Now</li>
        <li className="p-4 text-Text-Color hover:text-MainTheme text-xl cursor-pointer">About Us </li>
       
      </ul>
      <HeaderCart CartClicked={props.clicked} />
    
    

      <div className='z-50 block  md:hidden'>
        {MenuClicked ?<AiOutlineClose className='cursor-pointer text-lg' onClick={ClickedMenu}/> :<AiOutlineMenu className='cursor-pointer text-lg' onClick={ClickedMenu}/>}
      </div>

 
      <div className={MenuClicked ? 'fixed left-0 top-0 w-[60%] h-full bg-Background-light transition ease-in duration-500' : 'hidden'}>
      <h1 className="cursor-pointer text-MainTheme font-bold text-4xl p-4">MealMagic</h1>

        <ul className='pt-10'>
        <li className="p-4 hover:text-MainTheme text-base border-b border-MainTheme font-semibold">Order Now</li>
        <li className="p-4 hover:text-MainTheme text-base border-b border-MainTheme font-semibold">About Us </li>
       
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
