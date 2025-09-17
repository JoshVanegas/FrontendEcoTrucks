
import React from "react";
import Sidebar from "../components/Sidebar";
import MapView from "../components/MapView";



function UserView() {

  // Vista pública, sin logueo obligatorio

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