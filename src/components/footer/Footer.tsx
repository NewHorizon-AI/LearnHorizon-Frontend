import React from "react";
// Asegúrate de tener estos iconos disponibles o reemplazarlos con otros de tu elección.
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 p-8 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna de información de contacto */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contacto</h2>
          <p>
            <strong>Email:</strong> contacto@tuempresa.com
          </p>
          <p>
            <strong>Teléfono:</strong> +1 234 567 8900
          </p>
          {/* Agrega más información de contacto si es necesario */}
        </div>

        {/* Columna de enlaces útiles */}
        <div>
          <h2 className="text-xl font-bold mb-4">Enlaces Útiles</h2>
          <ul className="space-y-2">
            {["Acerca de", "Blog", "Productos", "Contacto"].map((text) => (
              <li key={text}>
                <a
                  href={`/${text.toLowerCase()}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna para redes sociales */}
        <div>
          <h2 className="text-xl font-bold mb-4">Síguenos</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook className="hover:text-blue-600" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter className="hover:text-blue-400" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram className="hover:text-pink-600" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedinIn className="hover:text-blue-700" />
            </a>
          </div>
        </div>
      </div>

      {/* Línea de derechos de autor */}
      <div className="border-t border-gray-800 text-center py-8 mt-8">
        <p className="text-sm font-light">
          &copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
