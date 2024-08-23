import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import imageNene from '../assets/image/nene.png';

export const Home = () => {
  const [bgColor, setBgColor] = useState('#f48ca4');
  const controls = useAnimation();

  useEffect(() => {
    // Animación de cambio de color de fondo
    const intervalId = setInterval(() => {
      setBgColor(prevColor => (prevColor === '#f48ca4' ? '#a4cc64' : '#f48ca4'));
    }, 3000);

    // Animación de flotación
    controls.start({
      y: [0, -20, 0], // Aumenta la flotación
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity
      }
    });

    return () => clearInterval(intervalId);
  }, [controls]);

  return (
    <div className={`relative flex flex-col h-screen justify-center items-center bg-[${bgColor}] transition-colors duration-300 overflow-hidden`}>
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f48ca4] to-[#a4cc64] opacity-20"></div>

      <div className="relative z-10 flex items-center space-x-8">
        <motion.img src={imageNene} alt="Nene" className="w-60 h-60" animate={controls} />

        {/* Burbuja de alerta */}
        <div className="relative bg-white p-8 rounded-xl shadow-2xl flex flex-col items-start space-y-4 max-w-xs">
          {/* Puntas de la nube */}
          <div className="absolute -top-6 -left-8 w-16 h-16 bg-white rounded-full shadow-lg"></div>
          <div className="absolute -bottom-6 -left-4 w-8 h-8 bg-white rounded-full shadow-lg"></div>
          <div className="text-gray-700">
            <p className="text-left">
            Hola, soy Pedrito y quiero ayudarte a crear juegos de preguntas divertidos para tus alumnos. Acompáñame, no te dejaré solo/a.
            </p>
          </div>
        </div>
      </div>

      {/* Botón de comenzar */}
      <Link to="/Dashoard" className="bg-[#a4cc64] text-white px-8 py-4 rounded-lg text-2xl font-semibold mt-8 transition-transform transform hover:scale-105">
        Comenzar ya
      </Link>
    </div>
  );
};
