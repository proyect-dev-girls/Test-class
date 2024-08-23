import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaUserFriends, FaBell } from 'react-icons/fa'; // Importa los íconos que desees

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white text-gray-800 shadow-lg border border-[#a4cc64]">
      <div className="p-4 bg-gradient-to-r from-[#f48ca4] to-[#a4cc64] text-white">
        <h2 className="text-2xl font-bold text-center">Área de Trabajo</h2>
      </div>
      <nav className="mt-10 p-2">
        <ul>
          <li className="mb-8">
            <Link
              to="/crear-quiz"
              className="flex items-center p-4 rounded-lg hover:bg-[#f48ca4] hover:text-white transition-colors duration-300 ease-in-out"
            >
              <FaPlus className="mr-3 text-xl" /> {/* Icono para Crear Quiz */}
              <span className="text-lg">Crear Quiz</span>
            </Link>
          </li>
          <li className="mb-8">
            <Link
              to="/usuarios"
              className="flex items-center p-4 rounded-lg hover:bg-[#f48ca4] hover:text-white transition-colors duration-300 ease-in-out"
            >
              <FaUserFriends className="mr-3 text-xl" /> {/* Icono para Usuarios Amigos */}
              <span className="text-lg">Usuarios Amigos</span>
            </Link>
          </li>
          <li className="mb-8">
            <Link
              to="/notificaciones"
              className="flex items-center p-4 rounded-lg hover:bg-[#f48ca4] hover:text-white transition-colors duration-300 ease-in-out"
            >
              <FaBell className="mr-3 text-xl" /> {/* Icono para Notificaciones */}
              <span className="text-lg">Notificaciones</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
