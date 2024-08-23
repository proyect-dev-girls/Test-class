import React from 'react';
import { motion } from 'framer-motion';

const ListarQuiz = ({ quizzes }) => {
  return (
    <div className="lg:w-1/2 p-6">
      <h1 className="text-4xl font-bold mb-6 text-[#f48ca4] text-center animate-pulse">Lista de Quizzes 📋</h1>
      {quizzes.length === 0 ? (
        <p className="text-gray-600 text-center">No hay quizzes creados aún.</p>
      ) : (
        quizzes.map((q, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 mb-4 rounded-lg shadow-md border border-[#a4cc64] transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="mb-4 flex justify-center">
              {q.image && (
                <img
                  src={q.image}
                  alt="Imagen del quiz"
                  className="w-24 h-24 object-cover rounded-md border border-[#a4cc64] shadow-lg"
                />
              )}
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-center animate-bounce">Quiz {index + 1}</h2>
            <div className="mb-4">
              <p className="text-lg font-medium mb-2 text-gray-700 text-center">{q.question}</p>
              <div className="flex flex-col items-center">
                {q.options.map((option, optionIndex) => (
                  <motion.div
                    key={optionIndex}
                    className="mb-2 flex items-center justify-center w-full"
                    whileHover={{ scale: 1.05, backgroundColor: '#a4cc64' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-gray-600 text-lg font-medium mr-2">{optionIndex + 1}.</span>
                    <span className="bg-[#a4cc64] text-white px-6 py-3 rounded-lg shadow-md text-lg">
                      {option}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
            {q.answer && (
              <p className="font-semibold text-[#a4cc64] text-center">Respuesta Correcta: {q.answer}</p>
            )}
          </motion.div>
        ))
      )}
    </div>
  );
};

export default ListarQuiz;
