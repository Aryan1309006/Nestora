"use client";

import { destinations } from "@/assets/data";
import { useState } from "react";

export const Booking = ({ setdestination,where }) => {
  return (
    <div className="w-full flex justify-center px-3 md:px-6 py-4">

      {/* Main Container */}
      <div
        className="
          flex
          flex-col
          md:flex-row
          w-full
          max-w-5xl
          bg-white
          border
          border-gray-300
          rounded-3xl
          shadow-lg
          overflow-hidden
        "
      >

        {/* Where */}
        <div
          onClick={() => setdestination(true)}
          className="
            flex-1
            flex
            flex-col
            p-4
            md:px-6
            cursor-pointer
            hover:bg-gray-100
            transition
            border-b
            md:border-b-0
            md:border-r
          "
        
        >
          <span className="font-semibold text-sm">
            Where
          </span>

          <span className="text-gray-500 text-sm">
            {where || "Search destination"}
          </span>
        </div>

        {/* When */}
        <div
          className="*
            flex-1
            flex
            flex-col
            p-4
            md:px-6
            cursor-pointer
            hover:bg-gray-100
            transition
            border-b
            md:border-b-0
            md:border-r
          "
        >
          <span className="font-semibold text-sm">
            When
          </span>

          <span className="text-gray-500 text-sm">
            Add dates
          </span>
        </div>

        {/* Who */}
        <div
          className="
            flex-1
            flex
            items-center
            justify-between
            p-4
            md:px-6
            hover:bg-gray-100
            transition
          "
        >
          <div className="flex flex-col">
            <span className="font-semibold text-sm">
              Who
            </span>

            <span className="text-gray-500 text-sm">
              Add guests
            </span>
          </div>

          <button
            className="
              bg-red-500
              hover:bg-red-600
              transition
              text-white
              h-12
              w-12
              rounded-full
              flex
              items-center
              justify-center
              text-lg
            "
          >
            🔍
          </button>
        </div>
      </div>
    </div>
  );
};