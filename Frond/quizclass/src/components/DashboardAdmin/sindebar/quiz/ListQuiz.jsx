// src/components/Sidebar/Quiz/ListarQuiz.jsx

import React from 'react';

const ListarQuiz = ({ quizzes }) => {
  return (
    <div className="lg:w-1/2 p-6">
      <h1 className="text-3xl font-bold mb-6 text-[#ffff]">Lista de Quizzes 📋</h1>
      {quizzes.length === 0 ? (
        <p className="text-gray-600">No hay quizzes creados aún.</p>
      ) : (
        quizzes.map((q, index) => (
          <div
            key={index}
            className="bg-white p-6 mb-4 rounded-lg shadow-md border border-[#a4cc64] transition-transform transform hover:scale-105"
          >
            <div className="mb-4 flex justify-center">
              {q.image && (
                <img
                  src={q.image}
                  alt="Imagen del quiz"
                  className="w-20 h-20 object-cover rounded-md border border-[#a4cc64]"
                />
              )}
            </div>
            <h2 className="text-xl font-semibold mb-4">Quiz {index + 1}</h2>
            {q.question && <p className="mb-2 text-gray-700">{q.question}</p>}
            {q.options.map((option, optionIndex) => (
              <p key={optionIndex} className="mb-1 text-gray-600">{`Opción ${optionIndex + 1}: ${option}`}</p>
            ))}
            {q.answer && <p className="font-semibold text-[#a4cc64]">Respuesta Correcta: {q.answer}</p>}
          </div>
        ))
      )}
    </div>
  );
};

export default ListarQuiz;
