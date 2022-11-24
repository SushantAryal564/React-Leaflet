import React from "react";
import countries from "./../data/countries.json";
import { MapContainer, GeoJSON, Marker } from "react-leaflet";
import { layerGroup } from "leaflet";
const MyMap = (props) => {
  const position = [27.757195, 85.33092];
  const countryStyle = {
    fillColor: "red",
    fillOpacity: 0.5,
    color: "black",
    weight: 0.4,
    dashArray: 5,
  };
  const onEachCountry = (country, lyr) => {
    console.log(country.properties.ADMIN);
    lyr.bindPopup(country.properties.ADMIN);
    lyr.on({
      click: (event) => {
        event.target.setStyle({
          fillColor: "yellow",
          color: "green",
        });
      },
    });
  };
  return (
    <div>
      <div className="text-center">MyMap</div>
      <MapContainer center={position} zoom={2} scrollWheelZoom={true}>
        <GeoJSON
          style={countryStyle}
          data={countries.features}
          onEachFeature={onEachCountry}
        />
      </MapContainer>
    </div>
  );
};
export default MyMap;
