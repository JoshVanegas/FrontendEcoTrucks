import Sidebar from "../components/Sidebar";

function DriverView() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Sidebar className="w-72" />
      <MapView className="flex-1" />
    </div>
  );
}
export default DriverView;