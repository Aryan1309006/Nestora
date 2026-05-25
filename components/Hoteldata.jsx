import Link from "next/link";
import React from "react";

const Hoteldata = ({ item }) => {
  return (
    <div
      className="flex rounded-2xl h-60 w-70 flex-col 
    m-2
    rounded-2xl
    overflow-hidden 
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-2xl
    cursor-pointer
   
    "
    >
      
      <span className="text-xs text-gray-500 font-semibold text-sm absolute  bg-gray-50  p-1 rounded-full m-2 dark:border-e-gray-300 ">
        {item.tag}
      </span>
      <img
        src={item.image}
        alt={item.name}
        className="w-70 h-40 rounded-xl object-cover "
      />

      <div className="flex pr-4 pl-2 justify-between">
        <div>
          <span className="font-semibold text-black dark:text-white">{item.title}</span>

          <div className="text-gray-500 text-xs">{item.location}</div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-black font-medium dark:text-white">₹{item.price}</div>
          <div className="text-gray-500 text-xs pl-4">⭐{item.rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Hoteldata;
