import React from "react";
import Sidebar from "../components/Sidebar";
import MapView from "../components/MapView";


function UserView() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Sidebar className="w-72" />
      <MapView className="flex-1" />
    </div>
  );
}
export default UserView;