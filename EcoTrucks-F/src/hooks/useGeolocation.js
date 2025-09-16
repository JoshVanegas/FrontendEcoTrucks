// useGeolocation.js
// Hook para obtener y actualizar la geolocalización del usuario

import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocalización no soportada");
      return;
    }
    const watcher = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
        setError(null);
      },
      (err) => {
        setError(err.message);
      },
      { enableHighAccuracy: true }
    );
    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  return { position, error };
};

export default useGeolocation;
