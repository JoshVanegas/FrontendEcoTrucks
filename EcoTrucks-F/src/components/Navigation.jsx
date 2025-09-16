import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  // Eliminados: estados para modal de login
  const navigate = useNavigate();

  return (
    <nav className="font-ecotruck w-full fixed top-0 left-0 flex items-center px-4 md:px-8 py-2 bg-white shadow-lg z-50 border-b border-gray-200 justify-between">
      <Link to="/">
        <img src="/src/assets/ecotruck-logo+letters.png" alt="EcoTrucks Logo" className="h-14 md:h-20 w-auto drop-shadow-lg" />
      </Link>
      {/* Desktop menu */}
      <div className="hidden md:flex flex-row items-center gap-8">
        <ul className="flex flex-row gap-8 list-none m-0 p-0">
          <li><Link className="font-semibold text-green-600 hover:text-green-800 transition duration-200 px-2 py-1 rounded hover:bg-green-100 text-base" to="/">Home</Link></li>
          <li><Link className="font-semibold text-green-600 hover:text-green-800 transition duration-200 px-2 py-1 rounded hover:bg-green-100 text-base" to="/about">About</Link></li>
        </ul>
        <div className="flex flex-row gap-2 relative">
          <button className="bg-green-600 text-white px-4 py-2 rounded-2xl transition-transform duration-200 hover:scale-110 text-base" onClick={() => navigate('/user/login')}>Inicia sesión</button>
          <Link to="/register">
            <button className="bg-green-600 text-white px-4 py-2 rounded-2xl transition-transform duration-200 hover:scale-110 text-base">Registrate</button>
          </Link>
          {/* Eliminado: modal de opciones de login */}
        </div>
      </div>
      {/* Mobile menu icon */}
      <button className="md:hidden ml-auto text-green-700 text-2xl focus:outline-none" onClick={() => setMenuOpen(true)}>
        <FaBars />
      </button>
      {/* Mobile modal menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-start justify-end">
          <div className="w-3/4 max-w-xs bg-white h-full shadow-lg p-6 flex flex-col">
            <button className="self-end mb-4 text-green-700 text-2xl" onClick={() => setMenuOpen(false)}>
              <FaTimes />
            </button>
            <ul className="flex flex-col gap-4 mb-6">
              <li><Link className="font-semibold text-green-600 hover:text-green-800 transition duration-200 px-2 py-1 rounded hover:bg-green-100 text-base" to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link className="font-semibold text-green-600 hover:text-green-800 transition duration-200 px-2 py-1 rounded hover:bg-green-100 text-base" to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            </ul>
            <div className="flex flex-col gap-2">
              <button className="bg-green-600 text-white px-4 py-2 rounded-2xl transition-transform duration-200 hover:scale-110 text-base w-full" onClick={() => { setMenuOpen(false); navigate('/user/login'); }}>Inicia sesión</button>
              <Link to="/register" onClick={() => setMenuOpen(false)}>
                <button className="bg-green-600 text-white px-4 py-2 rounded-2xl transition-transform duration-200 hover:scale-110 text-base w-full">Registrate</button>
              </Link>
            </div>
          </div>
        </div>
      )}

    </nav>
  )
}
export default Navigation