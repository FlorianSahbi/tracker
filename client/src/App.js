import React, { useState } from "react";
import "./App.css";
import { useSubscription } from "@apollo/client";
import { Map, Marker, TileLayer } from "react-leaflet";
import { MARKER_ADDED } from "./graphql";
import LockButton from "./LockButton";

function App() {
  const [lock, setLock] = useState(false);
  const { data } = useSubscription(MARKER_ADDED);

  return (
    <Map
      center={lock && data?.markerAdded ? [data?.markerAdded.latitude, data?.markerAdded.longitude] : [37.556398, 126.981834]}
      zoom={20}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <LockButton handleClick={() => setLock(prevState => !prevState)} />
      {data && (
        <Marker
          key={data?.markerAdded._id}
          position={[data?.markerAdded.latitude, data?.markerAdded.longitude]}
        />
      )}
    </Map>
  );
}

export default App;
