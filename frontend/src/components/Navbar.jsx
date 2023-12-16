import React from 'react';
import { Link } from 'react-router-dom';
import ConfirmOrder from '../pages/ConfirmOrder';
const Navbar = () => {
  return (
    <nav className="flex font-bold justify-evenly gap-5 items-center bg-white py-4">
      <div>
        <img className='rounded-full w-[55px] h-[55px]' src='/img/asia.jpg' alt="" />
      </div>
      <a href="" className="hover:text-orange-300 transition duration-300 text-black">О нас</a>
      <Link to="/menu" className="hover:text-orange-300 transition duration-300 text-black">
        Меню
      </Link>
      <Link to="/values" className="hover:text-orange-300 transition duration-300 text-black">
        Наши ценности
      </Link>
      <a href="" className="hover:text-orange-300 transition duration-300 text-black">Локации</a>
      <a href="" className="hover:text-orange-300 transition duration-300 text-black">Карьера</a>
      <Link to="/keytering" className="hover:text-orange-300 transition duration-300 text-black">
        Кейтеринг
      </Link>
      <div className='flex gap-5 items-center'>
        <a href="#">
          <img className='rounded-full w-[20px] h-[20px]' src="/img/search.png" alt="" />
        </a>
        <a href="">
          <img className='rounded-full w-[20px] h-[20px]' src="/img/avatar.png" alt="" />
        </a>
        <Link to='/ConfirmOrder'>
          <img className='rounded-full w-[20px] h-[20px]' src="/img/cart.png" alt="" />
        </Link>
      </div>
    </nav>
  );
};
 

export default Navbar;