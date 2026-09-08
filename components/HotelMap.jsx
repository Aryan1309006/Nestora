"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
});

export default function HotelMap({ room }) {
  if (!room) return null;

  return (
    <MapContainer
      center={[room.latitude, room.longitude]}
      zoom={15}
      style={{ height: "400px", width: "50vw" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[room.latitude, room.longitude]} icon={icon}>
        <Popup>
          <div>
            {room.images?.[0] && (
              <img
                src={room.images[0]}
                alt={room.title}
                className="w-20 h-20 object-cover rounded-t-2xl"
              />
            )}
            <h2 className="text-lg font-bold">{room.title}</h2>
            <p>💰 ₹{room.price}/night</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
