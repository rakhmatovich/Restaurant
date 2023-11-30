import React from 'react';



const Navbar = () => {
  return (
    <nav className="flex font-bold  justify-evenly gap-5 items-center  bg-white py-4  ">
      <div>
        <img className=  ' rounded-full w-[55px] h-[55px] ' src='/img/asia.jpg' alt="" />
      </div>
      <a href="" className="hover:text-orange-300 transition duration-300 text-black">О нас</a>
      <a href="" className="hover:text-orange-300 transition duration-300  text-black">Меню</a>
      <a href="" className="hover:text-orange-300 transition duration-300  text-black">Наши ценности</a>
      <a href="" className="hover:text-orange-300 transition duration-300  text-black">Локации</a>
      <a href="" className="hover:text-orange-300 transition duration-300  text-black">Карьера</a>
      <a href="" className="hover:text-orange-300 transition duration-300  text-black">Кейтеринг</a>
      <div className='flex gap-5 items-center '>
        <a  href="#">
        <img className=' rounded-full w-[20px] h-[20px] ' src="/img/search.png" alt="" />
        </a>
        <a href="">
        <img className=' rounded-full w-[20px] h-[20px] ' src="/img/avatar.png" alt="" />
        </a>
        <a href="">
        <img className=' rounded-full w-[20px] h-[20px] ' src="/img/cart.png" alt="" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
