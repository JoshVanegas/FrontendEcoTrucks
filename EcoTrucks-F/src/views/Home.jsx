import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
function Home() {
  return (
  
  <div className="mt-24 w-full bg-gradient-to-b from-green-50 to-white text-center overflow-x-hidden">
  <Navigation />
  <section className="relative w-full h-auto md:h-[60vh] flex flex-col md:flex-row bg-white-700 text-white mb-16">
    {/* Hero Section */}
    <div className='w-full md:w-1/2 flex items-center justify-center bg-white text-white relative py-6 md:py-0'>
      <div className="relative w-full h-48 md:h-full flex items-center justify-center">
        <img src="/src/assets/ecotruck-nobg.png" alt="ecotrucks" className="w-3/4 md:w-full h-full object-contain object-center" />
      </div>
    </div>
    {/* Intro Section */}
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-green-200 text-green-700 px-4 md:px-8 py-6 md:py-0">
      <h2 className="text-xl md:text-2xl text-green-600 mb-4 md:mb-6 text-center md:text-left">Gestión inteligente de residuos urbanos</h2>
      <p className="text-gray-700 mb-6 md:mb-8 text-center md:text-left">
        EcoTrucks es una aplicación web que conecta a la comunidad y la empresa de aseo para mejorar la gestión de residuos sólidos en Cartagena. Nuestra plataforma permite informar, monitorear y optimizar la recolección de basura, promoviendo una ciudad más limpia, saludable y sostenible.
      </p>
      <a href="#" className="bg-green-600 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-2xl shadow-lg hover:bg-green-700 transition-transform duration-200 hover:scale-105 text-sm md:text-base">
        Conoce más
      </a>
    </div>
  </section>

      {/* Features Section */}
  <section className="w-full max-w-6xl mx-auto mb-16">
        <h3 className="text-xl font-bold text-green-700 mb-4">¿Por qué EcoTrucks?</h3>
        <ul className="max-w-xl mx-auto text-left">
          <li className="mb-2 flex items-start"><span className="text-green-600 font-bold mr-2">•</span> Información en tiempo real sobre rutas y horarios de recolección.</li>
          <li className="mb-2 flex items-start"><span className="text-green-600 font-bold mr-2">•</span> Canal directo para reportar acumulación de basura.</li>
          <li className="mb-2 flex items-start"><span className="text-green-600 font-bold mr-2">•</span> Fomenta la participación ciudadana y la conciencia ambiental.</li>
          <li className="mb-2 flex items-start"><span className="text-green-600 font-bold mr-2">•</span> Apoya la imagen turística y la sostenibilidad de Cartagena.</li>
        </ul>
      </section>

      {/* How It Works Section */}
  <section className="w-full max-w-6xl mx-auto mb-16">
        <h3 className="text-xl font-bold text-green-700 mb-4">¿Cómo funciona?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <span className="text-green-600 text-4xl mb-2">📱</span>
            <h4 className="font-bold mb-2">App fácil de usar</h4>
            <p className="text-gray-600 text-sm text-center">Accede desde tu móvil o PC y consulta información actualizada sobre la recolección de residuos.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <span className="text-green-600 text-4xl mb-2">🗑️</span>
            <h4 className="font-bold mb-2">Reporta incidencias</h4>
            <p className="text-gray-600 text-sm text-center">Informa sobre acumulación de basura o problemas en tu zona en segundos.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <span className="text-green-600 text-4xl mb-2">🌎</span>
            <h4 className="font-bold mb-2">Contribuye al cambio</h4>
            <p className="text-gray-600 text-sm text-center">Ayuda a mejorar la calidad de vida y la imagen de Cartagena participando activamente.</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h3 className="text-xl font-bold text-green-700 mb-4">Impacto real</h3>
        <p className="text-gray-700 mb-6">
          Más de <span className="font-bold text-green-600">12,000 reportes</span> gestionados y <span className="font-bold text-green-600">85%</span> de mejora en tiempos de recolección.
        </p>
        <blockquote className="italic text-gray-600">“Desde que usamos EcoTrucks, nuestro barrio está más limpio y organizado.” — Comunidad San Fernando</blockquote>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-green-600 text-white py-12 rounded-xl shadow-inner mb-24">
        <h3 className="text-2xl font-bold mb-4">¿Estás listo para transformar Cartagena?</h3>
        <p className="mb-6">Únete a EcoTrucks y sé parte del cambio ecológico y tecnológico que nuestra ciudad necesita.</p>
        <a href="#registro" className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-green-100 transition">
          Empieza ahora
        </a>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
