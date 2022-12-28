import React from "react";
import LocationPin from "./LocationPin";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api"

const center = { lat: 45.44210686379278, lng: -122.71182934466502 }


const Map = () => {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  if(!isLoaded){
    return <h2>Loading...</h2>
  }

  return (
    <div className="max-w-[700px] w-[100%] h-[500px] p-3">
      <GoogleMap
      center={center}
      zoom={15}
      mapContainerStyle={{width: '100%', height: "100%"}}
      options={{
        // zoomControl:false,
        // streetViewControl:false,
        // fullscreenControl:false,
        // mapTypeControl:false,
      }}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;