import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import osmProviders from "./osm-providers";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { NavLink } from "react-router-dom";
import L from "leaflet";


const Maps = () => {
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();
  
  const variable = {
    // fontFamily: 'Artifika, serif',
    // fontFamily: 'Dancing Script, cursive',
    fontFamily: "Kaushan Script, cursive",
    fontFamily: "Lobster, cursive",
  }
  
  const markerIcon = new L.Icon({
    iconUrl: require("../assets/placeholder.png"),
    iconSize: [35, 45],
    iconAnchor:[17,46],
    popupAnchor:[3,-46],
  });

  return (
    <>
      <div className="flex mt-2 justify-end   px-4">
        <h2 className="p-1.5 font-bold text-white rounded-md bg-green-500">
          <NavLink to="/react">Home</NavLink>
        </h2>
      </div>

      <div>
        <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
          <TileLayer
            url={osmProviders.maptiler.url}
            attribution={osmProviders.maptiler.attribution}
          />
          <Marker position={[12.312310735810229, 76.67091116309166]} icon={markerIcon}>
            <Popup>
            <b>RestoKitchen</b>
            </Popup>
          </Marker>
          
          <Marker position={[13.084622, 80.248357]} icon={markerIcon}>
            <Popup>
            <b>RestoKitchen</b>
            </Popup>
          </Marker>
          
        </MapContainer>
      </div>
      
      <div className="mapsfooter text-center mb-7 bg-slate-800 p-3 m-4 rounded-lg font-bold">
        <span className="text-yellow-300">Resto</span>
        <span className="text-white">Kitchen</span>
        <span className="text-white"> | 2023</span>
        <h1 className="mt-4 text-white font-thin" style={variable}>
          Thanks for Visiting
        </h1>
      </div>
    </>
  );
};

export default Maps;
