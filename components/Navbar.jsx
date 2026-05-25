import React, { useEffect, useState } from "react";
import { Booking } from "./Booking";

const Navbar = ({setdestination,where}) => {
    const [show, setshow] = useState(true);
  useEffect(() => {

    const handlescroll = () => {

      if (window.scrollY > 100) {
        setshow(false);
      } else {
        setshow(true);
      }

    };

    window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handlescroll);
    };

  }, []);

  
  return (
    <nav className="flex flex-col bg-gray-100 fixed transition-all z-10" >
      <div className="w-screen h-20  px-4 md:px-8 flex items-center justify-between">

      {/* Logo */}
      <div className="text-2xl font-bold cursor-pointer">
        Logo
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-lg font-medium">
        <li className="list-none cursor-pointer hover:text-red-500">
          🏠 Home
        </li>

        <li className="list-none cursor-pointer hover:text-red-500">
          🪭 Experience
        </li>

        <li className="list-none cursor-pointer hover:text-red-500">
          🛎️ Service
        </li>
      </ul>

      {/* Desktop Right Section */}
      <div className="hidden md:flex items-center gap-5">
        <span className="cursor-pointer font-medium">
          Become a host
        </span>

        <button className="text-xl cursor-pointer">
          🌐
        </button>

        <button className="text-xl cursor-pointer">
          🍔
        </button>
      </div>

      {/* Mobile Section */}
      <div className="flex items-center gap-4 md:hidden">

        <span className="text-sm font-medium">
          Home Delivery
        </span>

        <button className="text-2xl font-bold">
          ⋮
        </button>

</div>
      </div>
  <div>
    {show&&<Booking setdestination={setdestination} where={where} />}
  </div>
    </nav>
  );
};

export default Navbar;