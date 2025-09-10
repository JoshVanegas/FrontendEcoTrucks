import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
function Footer() {
    return (
        <footer className="bg-green-900 text-green-200 py-12 px-6 mt-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Redes sociales */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold mb-2">Síguenos</h3>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener" className="hover:text-white transition text-2xl"><FaFacebook /></a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener" className="hover:text-white transition text-2xl"><FaTwitter /></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener" className="hover:text-white transition text-2xl"><FaInstagram /></a>
                    </div>
                </div>
                {/* Contacto */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold mb-2">Contacto</h3>
                    <div className="flex items-center gap-2"><FaEnvelope className="text-green-300" /><span>info@ecotrucks.com</span></div>
                    <div className="flex items-center gap-2"><FaPhoneAlt className="text-green-300" /><span>+57 300 123 4567</span></div>
                    <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-green-300" /><span>Cartagena, Colombia</span></div>
                </div>
                {/* Enlaces útiles */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold mb-2">Enlaces útiles</h3>
                    <a href="/about" className="hover:text-white transition">Acerca de</a>
                    <a href="/contact" className="hover:text-white transition">Contacto</a>
                    <a href="/privacy" className="hover:text-white transition">Privacidad</a>
                </div>
                {/* TIC y derechos */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold mb-2">Tecnologías de la Información</h3>
                    <span className="text-xs text-green-300">Desarrollado con React, Tailwind CSS y herramientas TIC para la gestión inteligente de residuos urbanos.</span>
                    <span className="text-xs mt-2">© 2025 EcoTruck. Todos los derechos reservados.</span>
                </div>
            </div>
        </footer>
  );
}

export default Footer;