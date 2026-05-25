"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { hotels } from "./data.js";

const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
});

export default function HotelMap() {
  return (
    <MapContainer
      center={[19.0760, 72.8777]}
      zoom={12}
      style={{ height: "400px", width: "70vw" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {hotels.map((hotel) => (
        <Marker
          key={hotel.id}
          position={[hotel.lat, hotel.lng]}
          icon={icon}
        >
          <Popup>
            <div>
              <h2 className="text-2xl font-bold">{hotel.name}</h2>
              <p className="text-l">💰 ${hotel.price}/night</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}