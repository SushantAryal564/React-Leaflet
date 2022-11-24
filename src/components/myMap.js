import React from "react";
import countries from "./../data/countries.json";
import { MapContainer, GeoJSON } from "react-leaflet";
const MyMap = (props) => {
  const position = [27.757195, 85.33092];
  // const countryStyle = {
  //   fillcolor: "red",
  // };
  return (
    <div>
      <div className="text-center">MyMap</div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <GeoJSON style={countryStyle} data={countries.features} />
      </MapContainer>
    </div>
  );
};
export default MyMap;
