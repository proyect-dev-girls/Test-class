// src/components/DashboardAdmin/sindebar/alumnos/Alumnos.jsx
import React, { useContext, useState } from 'react';
import { QuizContext } from '../../../../contexts/quizContexts';
import MessageAlert from '../../MesajeAlertas';



const Alumnos = () => {
  const { quizzes } = useContext(QuizContext);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleStartQuiz = (quiz) => {
    setSelectedQuiz(quiz);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-[#f48ca4]">Quizzes Disponibles 🎓</h1>
      {quizzes.length === 0 ? (
        <p className="text-gray-600">No hay quizzes disponibles.</p>
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
  );
};

export default Alumnos;
