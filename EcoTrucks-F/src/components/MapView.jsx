
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



const truckRoute = [
  [10.391, -75.4794],
  [10.392, -75.4780],
  [10.393, -75.4770],
  [10.394, -75.4760],
  [10.395, -75.4750],
  [10.396, -75.4740],
  [10.397, -75.4730],
];

const truckIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/616/616408.png', // icono de camión
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const MapView = () => {
  const { position, error } = useGeolocation();
  const [truckPos, setTruckPos] = React.useState(truckRoute[0]);

  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % truckRoute.length;
      setTruckPos(truckRoute[i]);
    }, 1200); // cada 1.2 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer center={truckPos} zoom={14} scrollWheelZoom className="w-full h-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* Marcador del usuario (si está disponible) */}
        {position.latitude && position.longitude && <Marker position={[position.latitude, position.longitude]} icon={userIcon} />}
        {/* Marcador del camión simulado */}
        <Marker position={truckPos} icon={truckIcon} />
      </MapContainer>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default MapView;
