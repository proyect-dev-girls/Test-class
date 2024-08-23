import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaUserFriends, FaBell, FaChartBar } from "react-icons/fa"; //son icons
import imageNene from "../../../assets/image/nene.png"; // importe la imagen del nene
const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white text-gray-800 shadow-lg border border-[#a4cc64]">
      <div className="p-4 bg-gradient-to-r from-[#f48ca4] to-[#a4cc64] text-white">
        <h2 className="text-2xl font-bold text-center">Área de Trabajo</h2>
      </div>
      {/* navegador del sindebar */}
      <nav className="mt-10 p-2">
        <ul>
          <li className="mb-8">
            <Link
              to="/Dashoard"
              className="flex items-center p-4 rounded-lg hover:bg-[#f48ca4] hover:text-white transition-colors duration-300 ease-in-out"
            >
              <FaChartBar className="mr-3 text-xl" />
              <span className="text-lg">Graficos</span>
            </Link>
          </li>
          <li className="mb-8">
            <Link
              to="/crear-quiz"
              className="flex items-center p-4 rounded-lg hover:bg-[#f48ca4] hover:text-white transition-colors duration-300 ease-in-out"
            >
              <FaPlus className="mr-3 text-xl" />
              <span className="text-lg">Crear Quiz</span>
            </Link>
          </li>
          <li className="mb-8">
            <Link
              to="/ListaAlumnos"
              className="flex items-center p-4 rounded-lg hover:bg-[#f48ca4] hover:text-white transition-colors duration-300 ease-in-out"
            >
              <FaUserFriends className="mr-3 text-xl" />
              <span className="text-lg">Gestion de alumnos</span>
            </Link>
          </li>
          <li className="mb-8">
            <Link
              to="/notificaciones"
              className="flex items-center p-4 rounded-lg hover:bg-[#f48ca4] hover:text-white transition-colors duration-300 ease-in-out"
            >
              <FaBell className="mr-3 text-xl" />
              <span className="text-lg">Notificaciones</span>
            </Link>
          </li>
        </ul>
      </nav>
      {/* Imagen del niño */}
      <div className="absolute bottom-4 left-4 flex items-center">
        <img
          src={imageNene}
          alt="Nene"
          className="w-40 h-40 rounded-full shadow-lg"
        />
        {/* Titulo de la bubuja en el sindebar */}
        <div className="relative ml-4 bg-gradient-to-r from-[#f48ca4] to-[#a4cc64] p-4 rounded-xl shadow-lg border border-gray-300 text-center text-white">
          <p className="text-lg font-semibold ">
            Bienvenido, profesor/a. Es un placer tenerte aquí.😊
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
