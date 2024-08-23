import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

const Alumnos = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const sidebarControls = useAnimation();
  const [bgColor, setBgColor] = useState('#f48ca4'); // Color inicial

  useEffect(() => {
    // Leer los quizzes del localStorage
    const storedQuizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    setQuizzes(storedQuizzes);

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
    setSelectedAnswer('');
    setFeedback('');
  };

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = () => {
    if (!selectedQuiz) return;

    // Verifica si la respuesta seleccionada es correcta
    const isCorrect = selectedAnswer === selectedQuiz.correctAnswer;
    if (isCorrect) {
      setFeedback('¡Respuesta Correcta!');
    } else {
      setFeedback('Respuesta Incorrecta. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
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
          <Link to={'/'} className="flex items-center p-2 rounded-lg hover:bg-[#f48ca4] transition duration-300">
            <span className="text-xl mr-2">🔒</span>
            <span>Salir</span>
          </Link>
        </div>
      </motion.div>

      <div className="flex-1 p-8 bg-gradient-to-r from-[#f48ca4] to-[#a4cc64]">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#ffffff]">Quizzes Disponibles</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-[#a4cc64] transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => handleStartQuiz(quiz)}
            >
              <h2 className="text-xl font-bold mb-2 text-[#a4cc64]">Pregunta {index + 1}</h2>
              {quiz.image && (
                <img
                  src={quiz.image}
                  alt="Imagen de la pregunta"
                  className="w-40 h-32 object-cover rounded-md border border-[#a4cc64] shadow-lg mb-4"
                />
              )}
              <p className="text-gray-700 mb-4">{quiz.question}</p>
            </div>
          ))}
        </div>

        {selectedQuiz && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-lg border border-[#a4cc64]">
            <h2 className="text-2xl font-bold mb-4 text-[#a4cc64]">Quiz Seleccionado</h2>
            {selectedQuiz.image && (
              <img
                src={selectedQuiz.image}
                alt="Imagen del quiz"
                className="w-40 h-32 object-cover rounded-md border border-[#a4cc64] shadow-lg mb-4"
              />
            )}
            <p className="text-gray-700 mb-4">{selectedQuiz.question}</p>
            {selectedQuiz.options.map((option, index) => (
              <div key={index} className="mb-2">
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="quiz-option"
                  value={option}
                  onChange={handleAnswerChange}
                />
                <label htmlFor={`option-${index}`} className="ml-2 text-gray-700">{option}</label>
              </div>
            ))}
            <button
              onClick={handleSubmit}
              className="bg-[#a4cc64] text-white px-4 py-2 rounded-lg hover:bg-[#8bbd4e] transition-colors duration-300 ease-in-out"
            >
              Enviar Respuesta
            </button>
            {feedback && (
              <p className={`mt-4 text-lg ${feedback.includes('Correcta') ? 'text-green-500' : 'text-red-500'}`}>
                {feedback}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Alumnos;
