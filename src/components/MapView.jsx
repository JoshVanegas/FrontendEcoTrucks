import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const userIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/64/64113.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const MapView = () => {
  const [userPosition, setUserPosition] = useState(null);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserPosition([latitude, longitude]);
        // Aquí puedes simular envío al backend
        console.log('Ubicación simulada:', latitude, longitude);
      },
      (err) => console.error('Error al obtener ubicación:', err),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer center={[10.391, -75.4794]} zoom={14} scrollWheelZoom className="w-full h-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {userPosition && <Marker position={userPosition} icon={userIcon} />}
      </MapContainer>
    </div>
  );
};

export default MapView;
