import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Área de Trabajo</h2>
      </div>
      <nav className="mt-10">
        <ul>
          <li className="mb-4">
            <Link to="/crear-quiz" className="text-lg hover:text-gray-300">Crear Quiz</Link>
          </li>
          <li className="mb-4">
            <Link to="/usuarios" className="text-lg hover:text-gray-300">Usuarios Amigos</Link>
          </li>
          <li className="mb-4">
            <Link to="/notificaciones" className="text-lg hover:text-gray-300">Notificaciones</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
