
import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useGeolocation from '../hooks/useGeolocation';

const userIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/64/64113.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});


const MapView = () => {
  const { position, error } = useGeolocation();

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer center={position.latitude && position.longitude ? [position.latitude, position.longitude] : [10.391, -75.4794]} zoom={14} scrollWheelZoom className="w-full h-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {position.latitude && position.longitude && <Marker position={[position.latitude, position.longitude]} icon={userIcon} />}
      </MapContainer>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default MapView;
