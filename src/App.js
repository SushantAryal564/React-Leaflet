import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { divIcon } from "leaflet";
import "./App.css";
import places from "./data/places.json";
import MyMap from "./components/myMap";

console.log(divIcon);
function App() {
  // const [activeplace, setActivePlace] = useState(null);
  // const position = [27.757094, 85.331084];
  // const placesNearMe = places.features;
  return <MyMap />;
}

export default App;
// import Icon from "./data/icon";
// const placeIcon = new divIcon({
//   html: `<svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke-width="1.5"
//         stroke="currentColor"
//         class="w-6 h-6"
//       >
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//         />
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//         />
//       </svg>`,
//   iconSize: [25, 25],
// });
//  <div>
//     <MapContainer center={position} zoom={17} scrollWheelZoom={true}>
//       <TileLayer
//         attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"
//         url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
//       />
//       {placesNearMe.map((place) => {
//         return (
//           <Marker
//             key={place.attributes.OBJECTID}
//             position={[place.geometry.y, place.geometry.x]}
//             eventHandlers={{
//               click: () => {
//                 setActivePlace(place);
//               },
//             }}
//             icon={placeIcon}
//           />
//         );
//       })}
//       {activeplace && (
//         <Popup
//           position={[activeplace.geometry.y, activeplace.geometry.x]}
//           eventHandlers={{
//             close: () => {
//               setActivePlace(null);
//             },
//           }}
//         >
//           <div>
//             <h2>{activeplace.attributes.type}</h2>
//             <p>{activeplace.attributes.name}</p>
//           </div>
//         </Popup>
//       )}
//     </MapContainer>
//   </div>
