import React from "react";
import {
  FaMapMarkedAlt,
  FaUserCircle,
  FaQuestionCircle,
  FaSignOutAlt,
  FaBell,
  FaGift,
  FaUserFriends,
  FaCar,
  FaChartLine,
  FaRecycle,
  FaCog,
  FaMoon,
  FaSun,
  FaChevronRight,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-72 bg-green-900 text-white flex flex-col shadow-lg z-50">
      {/* Header */}
      <div className="flex flex-col items-center py-6 border-b border-green-800">
        <h2 className="text-2xl font-bold mb-2 tracking-wide">ECOTRUCK</h2>
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format"
          alt="Carlos Usuario"
          className="rounded-full border-4 border-green-700 w-20 h-20 object-cover mb-2"
        />
        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm mb-2">🌱 Eco Básico</span>
        <h3 className="font-semibold mb-1">CARLOS MENDEZ</h3>
        <div className="flex gap-4 mt-2">
          <div className="text-center">
            <div className="text-lg font-bold">98%</div>
            <div className="text-xs text-green-200">Reportes</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold">67%</div>
            <div className="text-xs text-green-200">Seguimiento</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-yellow-400">4.75</div>
            <div className="text-xs text-green-200">Rating Eco</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <div className="mb-6">
          <div className="uppercase text-green-300 text-xs font-bold mb-2">Dashboard</div>
          <SidebarLink icon={<FaChartLine />} text="Mis Estadísticas" />
          <SidebarLink icon={<FaGift />} text="Eco Puntos" badge="150" />
          <SidebarLink icon={<FaUserFriends />} text="Invita Amigos" />
          <SidebarLink icon={<FaRecycle />} text="Puntos EcoTruck" badge="50" badgeColor="bg-yellow-400 text-green-900" />
        </div>
        <div className="mb-6">
          <div className="uppercase text-green-300 text-xs font-bold mb-2">Servicios</div>
          <SidebarLink icon={<FaMapMarkedAlt />} text="Mapa de Rutas" />
          <SidebarLink icon={<FaBell />} text="Notificaciones" badge="3" badgeColor="bg-red-600" />
          <SidebarLink icon={<FaCar />} text="Seguimiento" />
          <SidebarLink icon={<FaQuestionCircle />} text="Guías y Tips" />
        </div>
        <div>
          <div className="uppercase text-green-300 text-xs font-bold mb-2">Cuenta</div>
          <SidebarLink icon={<FaCog />} text="Configuración" />
          <SidebarLink icon={<FaUserCircle />} text="Mi Perfil" />
          <SidebarLink icon={<FaSignOutAlt />} text="Cerrar Sesión" textColor="text-red-400" />
        </div>
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-green-800 text-xs flex justify-between items-center">
        <span>ECOTRUCK v2.1.0</span>
        <span>© 2025</span>
      </div>
    </aside>
  );
};

// Componente para los enlaces del sidebar
const SidebarLink = ({ icon, text, badge, badgeColor = "bg-green-600", textColor = "text-white" }) => (
  <a href="#" className={`flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-green-800 transition group ${textColor}`}>
    <span className="text-xl">{icon}</span>
    <span className="flex-1 font-medium">{text}</span>
    {badge && (
      <span className={`ml-auto px-2 py-1 rounded-full text-xs font-bold ${badgeColor}`}>{badge}</span>
    )}
    <FaChevronRight className="text-green-400 group-hover:text-white" />
  </a>
);

export default Sidebar;