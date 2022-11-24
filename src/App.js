import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "./App.css";
import places from "./data/places.json";
function App() {
  const position = [27.757094, 85.331084];
  const placesNearMe = places.features;
  return (
    <div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {placesNearMe.map((place) => {
          return (
            <Marker
              key={place.attributes.OBJECTID}
              position={[place.geometry.y, place.geometry.x]}
            />
          );
        })}
      </MapContainer>
    </div>
  );
}

export default App;
