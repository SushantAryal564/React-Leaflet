import React from "react";
import { useState } from "react";
import countries from "./../data/countries.json";
import { MapContainer, GeoJSON } from "react-leaflet";
const MyMap = (props) => {
  const [colorselected, setColor] = useState("#ffff00");
  const color = ["green", "blue", "yellow", "orange", "red", "pink"];
  const position = [27.757195, 85.33092];
  const countryStyle = {
    fillColor: "red",
    fillOpacity: 0.5,
    color: "black",
    weight: 0.4,
    dashArray: 5,
  };
  const colorChangeHandler = (event) => {
    setColor(event.target.value);
  };
  const printMessageToConsole = (event) => {
    console.log("clicked");
  };
  const ChangeCountryColor = (event) => {
    event.target.setStyle({
      color: "green",
      fillColor: colorselected,
    });
  };
  const onEachCountry = (country, lyr) => {
    console.log(country.properties.ADMIN);
    lyr.bindPopup(country.properties.ADMIN);
    // lyr.options.fillOpacity = Math.random();
    lyr.options.fillColor = color[Math.floor(Math.random() * color.length)];
    lyr.on({
      click: printMessageToConsole,
    });
    lyr.on({
      mouseover: ChangeCountryColor,
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
      <input type="color" value={colorselected} onChange={colorChangeHandler} />
    </div>
  );
};
export default MyMap;
