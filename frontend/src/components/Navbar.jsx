import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex font-bold justify-evenly gap-5 items-center bg-white py-4">
      <Link to='/'>
        <img
          className="rounded-full w-[55px] h-[55px]"
          src="/img/asia.jpg"
          alt=""
        />
      </Link>
      <Link
        to={"/AboutUs"}
        className="hover:text-orange-300 transition duration-300 text-black"
      >
        О нас
      </Link>
      <Link
        to="/menu"
        className="hover:text-orange-300 transition duration-300 text-black"
      >
        Меню
      </Link>
      <Link
        to="/values"
        className="hover:text-orange-300 transition duration-300 text-black"
      >
        Наши ценности
      </Link>
      <Link to={"/Location"}
          className="hover:text-orange-300 transition duration-300 text-black"
        >
          Локации
      </Link>
      <Link
        to="/keytering"
        className="hover:text-orange-300 transition duration-300 text-black"
      >
        Кейтеринг
      </Link>
      <div className="flex gap-5 items-center">
        <a href="#">
          <img
            className="rounded-full w-[20px] h-[20px]"
            src="/img/search.png"
            alt=""
          />
        </a>
        <a href="">
          <img
            className="rounded-full w-[20px] h-[20px]"
            src="/img/avatar.png"
            alt=""
          />
        </a>
        <Link to="/ConfirmOrder">
          <img
            className="rounded-full w-[20px] h-[20px]"
            src="/img/cart.png"
            alt=""
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
