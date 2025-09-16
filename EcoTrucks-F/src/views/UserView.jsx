
import React from "react";
import Sidebar from "../components/Sidebar";
import MapView from "../components/MapView";
import useSocket from "../hooks/useSocket";




function UserView() {
  const token = localStorage.getItem("userToken");
  useSocket(token, {
    locationUpdate: (data) => {
      console.log("Ubicación recibida por socket:", data);
    },
  });

  if (!token) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Debes iniciar sesión</h2>
          <a href="/user/login" className="bg-green-600 text-white px-6 py-2 rounded-2xl font-semibold hover:bg-green-700 transition">Ir a login</a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      <Sidebar className="w-72" />
      <main className="flex-1 flex items-center justify-center">
        <MapView className="w-full h-[80vh]" />
      </main>
    </div>
  );
}
export default UserView;