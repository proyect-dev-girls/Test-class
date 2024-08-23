// src/components/DashboardAdmin/sindebar/alumnos/Alumnos.jsx
import React, { useContext, useState, useEffect } from 'react';
import { QuizContext } from '../../../../contexts/quizContexts';
import imageNene from '../../../../assets/image/nene.png';
import { motion, useAnimation } from 'framer-motion';

const Alumnos = () => {
  const { quizzes } = useContext(QuizContext);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const sidebarControls = useAnimation();
  const [bgColor, setBgColor] = useState('#f48ca4'); // Color inicial

  useEffect(() => {
    // Animación de cambio de color de fondo en la barra lateral
    const intervalId = setInterval(() => {
      setBgColor(prevColor => (prevColor === '#f48ca4' ? '#a4cc64' : '#f48ca4'));
    }, 3000);

    sidebarControls.start({
      backgroundColor: bgColor,
      transition: { duration: 3, ease: 'easeInOut', repeat: Infinity }
    });

    return () => clearInterval(intervalId);
  }, [bgColor, sidebarControls]);

  const handleStartQuiz = (quiz) => {
    setSelectedQuiz(quiz);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Barra lateral */}
      <motion.div
        className="w-64 text-white p-4 flex flex-col space-y-4"
        animate={sidebarControls}
        style={{ backgroundColor: bgColor }}
      >
        <h1 className="text-2xl font-bold">Bienvenido, Estudiante!</h1>
        <div className="flex flex-col space-y-2">
          <button className="flex items-center p-2 rounded-lg hover:bg-[#f48ca4] transition duration-300">
            <span className="text-xl mr-2">📚</span>
            <span>Mis Quizzes</span>
          </button>
          <button className="flex items-center p-2 rounded-lg hover:bg-[#f48ca4] transition duration-300">
            <span className="text-xl mr-2">🔔</span>
            <span>Notificaciones</span>
          </button>
          <button className="flex items-center p-2 rounded-lg hover:bg-[#f48ca4] transition duration-300">
            <span className="text-xl mr-2">⚙️</span>
            <span>Configuración</span>
          </button>
        </div>
      </motion.div>

      {/* Área de contenido */}
      <div className="flex-1 p-6 relative">
        <div className="relative bg-white rounded-lg shadow-lg p-6">
          {/* Nube con el texto */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-[#a4cc64] p-4 rounded-lg shadow-lg border border-gray-300 text-center">
            <p className="text-lg font-semibold">Bienvenido, Alumno</p>
          </div>

          {/* Imagen del niño */}
          <motion.img
            src={imageNene}
            alt="Nene"
            className="absolute top-12 left-1/3 transform -translate-x-1/2 w-48 h-48"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
          />
          
          <h1 className="text-3xl font-bold mb-6 text-[#f48ca4] ">Quizzes Disponibles 🎓</h1>
          {quizzes.length === 0 ? (
            <p className="text-gray-600 s">No hay quizzes disponibles.</p>
          ) : (
            quizzes.map((quiz, index) => (
              <div key={index} className="mb-4 bg-white p-4 rounded-lg shadow-md border border-[#a4cc64]">
                <h2 className="text-2xl font-bold text-[#f48ca4] mb-4">{`Quiz ${index + 1}`}</h2>
                <p className="mb-2"><strong>Pregunta:</strong> {quiz.question}</p>
                <p className="mb-2"><strong>Opciones:</strong> {quiz.options.join(', ')}</p>
                <p className="mb-2"><strong>Respuesta Correcta:</strong> {quiz.answer}</p>
                {quiz.image && <img src={quiz.image} alt="Quiz" className="w-20 h-20 object-cover rounded-md border border-[#a4cc64]" />}
                <button
                  onClick={() => handleStartQuiz(quiz)}
                  className="mt-4 bg-[#a4cc64] text-white px-4 py-2 rounded-lg hover:bg-[#8bbd4e] transition duration-300"
                >
                  Comenzar Quiz
                </button>
              </div>
            ))
          )}

          {selectedQuiz && (
            <div className="mt-6 p-6 bg-[#f48ca4] rounded-lg text-white">
              <h2 className="text-2xl font-bold mb-4">Estás jugando el Quiz {selectedQuiz.question}</h2>
              {/* Aquí puedes agregar la lógica para jugar el quiz */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alumnos;
