"use client";

import { apiResponse } from "@/assets/data";
import Image from "next/image";

import dynamic from "next/dynamic";

const HotelMap = dynamic(() => import("@/components/HotelMap"), {
  ssr: false,
});

export default function HotelDetails() {
  const hotel = apiResponse.data.rooms[0];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Title */}
      <h1 className="text-3xl font-bold">{hotel.title}</h1>

      <div className="flex gap-4 text-sm mt-2">
        <span>⭐ {hotel.rating}</span>
        <span>{hotel.reviews} reviews</span>
        <span>{hotel.location}</span>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-4 gap-2 h-[500px] mt-6">
        <div className="col-span-2 row-span-2 relative">
          <Image
            src={hotel.images[0]}
            alt={hotel.title}
            fill
            className="object-cover rounded-l-2xl"
          />
        </div>

        {hotel.images.slice(1, 5).map((img, index) => (
          <div key={index} className="relative">
            <Image
              src={img}
              alt={`Hotel ${index}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-10 mt-10">
        {/* Left */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold">
            {hotel.type}
          </h2>

          <p className="mt-2 text-gray-600">
            {hotel.guests} guests · {hotel.bedrooms} bedrooms ·{" "}
            {hotel.beds} beds · {hotel.bathrooms} baths
          </p>

          {/* Host */}
          <div className="flex items-center gap-4 border-b py-6">
            <Image
              src={hotel.host.hostImage}
              alt={hotel.host.name}
              width={60}
              height={60}
              className="rounded-full"
            />

            <div>
              <h3 className="font-semibold">
                Hosted by {hotel.host.name}
              </h3>
              <p className="text-gray-500">
                {hotel.host.joined}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="py-6 border-b">
            <h3 className="font-semibold text-xl mb-3">
              About this place
            </h3>

            <p className="text-gray-700 leading-8">
              {hotel.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="py-6 border-b">
            <h3 className="font-semibold text-xl mb-4">
              Highlights
            </h3>

            <ul className="grid grid-cols-2 gap-3">
              {hotel.highlights.map((item, index) => (
                <li key={index}>✅ {item}</li>
              ))}
            </ul>
          </div>

          {/* Amenities */}
          <div className="py-6 border-b">
            <h3 className="font-semibold text-xl mb-4">
              Amenities
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {hotel.amenities.map((item, index) => (
                <div key={index}>
                  • {item.name}
                </div>
              ))}
            </div>
          </div>
          <HotelMap room={hotel} />
          {/* Reviews */}
          <div className="py-6">
            <h3 className="font-semibold text-xl mb-4">
              Reviews
            </h3>

            {hotel.reviewsData.map((review) => (
              <div
                key={review.id}
                className="border-b py-4"
              >
                <h4 className="font-semibold">
                  {review.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {review.date}
                </p>

                <p className="mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Booking Card */}
        <div>
          <div className="sticky top-24 border rounded-2xl p-6 shadow-lg">
            <h3 className="text-3xl font-bold">
              ₹{hotel.price}
            </h3>

            <p className="text-gray-500">
              {hotel.duration}
            </p>

            <div className="mt-6 space-y-2">
              <div className="flex justify-between">
                <span>Cleaning Fee</span>
                <span>₹{hotel.cleaningFee}</span>
              </div>

              <div className="flex justify-between">
                <span>Service Fee</span>
                <span>₹{hotel.serviceFee}</span>
              </div>

              <div className="flex justify-between font-bold border-t pt-3">
                <span>Total</span>
                <span>₹{hotel.totalPrice}</span>
              </div>
            </div>

            <button className="w-full mt-6 bg-rose-500 text-white py-3 rounded-xl hover:bg-rose-600">
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}