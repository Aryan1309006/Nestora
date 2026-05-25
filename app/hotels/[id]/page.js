
import { hotels } from "@/assets/data";

import Image from "next/image";
import Link from "next/link";

export default async function HotelDetails({ params }) {
  const { id } = await params;

  const room = hotels.find((item) => item.id === Number(id));

  if (!room) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Room not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-10 flex items-center justify-center flex-col">
      {/* Hero Image */}
      <div className="mr-auto">
        <h1 className="text-2xl md:text-5xl font-bold">{room.title}</h1>
            <p className="text-lg text-gray-600"> {room.location}</p>
      </div>
      <div className="relative w-[75vw] md:h-[70vh] flex items-center  justify-center rounded-3xl ml-auto mr-auto">
        <Image
          src={room.image}
          alt={room.title} fill priority className="object-cover rounded-3xl ml-auto " />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 rounded-3xl" />

        {/* Back Button */}
        <Link
          href="/"
          className="absolute top-5 left-5 bg-white px-4 py-2
            rounded-full shadow-lg hover:scale-105 transition
          "
        >
          ← Back
        </Link>
      </div>

      {/* Details */}
    <div>
<p >{room.price}</p>
    </div>
    </div>
  );
}
