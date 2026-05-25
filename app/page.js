"use client";
import "leaflet/dist/leaflet.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { destinations, hotels } from "../assets/data.js";

import Hoteldata from "@/components/Hoteldata.jsx";
import Link from "next/link.js";
import HotelMap from "@/components/HotelMap.jsx";

export default function Home() {
  const [where, setwhere] = useState("");
  const [destination, setdestination] = useState(false);
  return (
    <>
      <Navbar setdestination={setdestination} where={where} />
      {""}
      {destination && (
        <div
          className=" z-20 bg-white w-90 h-[70vh] p-5 flex flex-col gap-1 rounded-3xl border border-gray-300 
        absolute top-[25vh] left-[25vw] overflow-y-auto transition-all translate-1.5 shadow-2xs shadow-gray-400"
        >
          <button
            className="ml-auto m-0 h-10 w-10"
            onClick={() => {
              setdestination(false);
            }}
          >
            ❌
          </button>
          {destinations.map((item, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  setwhere(item.title);
                  setdestination(false);
                }}
                className="
        flex
        items-center
        gap-2
        cursor-pointer
        hover:bg-gray-100
        p-3
        rounded-2xl
        transition
      "
              >
                <span className="h-10 w-10 flex items-center justify-center text-2xl rounded-2xl bg-gray-300">
                  {item.icon}
                </span>

                <div className="flex flex-col">
                  <span className="font-medium">{item.title}</span>

                  <span className="text-sm text-gray-500">{item.subtitle}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
<div className="h-screen  w-full p-10 mt-50 dark:bg-gray-800 ">
<h1 className="text-4xl font-bold text-black dark:text-white">Our Hotels</h1>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {hotels.map((item, idx) => {
          return (
            <div key={idx}>
              {" "}
              <Link href={`/hotels/${item.id}`}>
                <Hoteldata item={item} />
              </Link>
            </div>
          );
        })}
      </div>
        <HotelMap/>
      </div>
    </>
  );
}
