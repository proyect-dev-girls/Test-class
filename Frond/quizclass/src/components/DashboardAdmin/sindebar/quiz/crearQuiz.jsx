// src/components/Sidebar/Quiz/CrearQuiz.jsx

import React, { useState } from 'react';
import ListarQuiz from './ListQuiz';
import Sidebar from '../Sidebar';

const CrearQuiz = () => {
  const [questions, setQuestions] = useState([{ question: '', options: ['', '', ''], answer: '', image: '' }]);
  const [quizzes, setQuizzes] = useState([]);

  const handleQuestionChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index].question = event.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, event) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index].answer = event.target.value;
    setQuestions(newQuestions);
  };

  const handleImageChange = (index, event) => {
    const file = event.target.files[0];
    const newQuestions = [...questions];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        newQuestions[index].image = reader.result;
        setQuestions(newQuestions);
      };
      reader.readAsDataURL(file);
    }
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', ''], answer: '', image: '' }]);
  };

  const handleSubmit = () => {
    setQuizzes(questions);
    setQuestions([{ question: '', options: ['', '', ''], answer: '', image: '' }]);
  };

  return (
    <div className="flex">
      <div className="w-64">
        {/* Incluye aquí tu Sidebar */}
        <Sidebar/>
      </div>
      <div className="flex-1 p-8 bg-gradient-to-r from-[#f48ca4] to-[#a4cc64]">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-6 bg-white rounded-lg shadow-lg border border-[#a4cc64] mb-8 mx-auto lg:mx-0">
            <h1 className="text-3xl font-bold mb-6 text-[#f48ca4]">Crear Quiz 📝</h1>
            {questions.map((q, questionIndex) => (
              <div
                key={questionIndex}
                className="bg-white p-6 mb-4 rounded-lg shadow-md border border-[#a4cc64] transition-transform transform hover:scale-105"
              >
                <div className="mb-4 flex justify-center">
                  {q.image && (
                    <img
                      src={q.image}
                      alt="Imagen de la pregunta"
                      className="w-20 h-20 object-cover rounded-md border border-[#a4cc64]"
                    />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(questionIndex, e)}
                  className="w-full mb-4 p-2 border border-gray-300 rounded transition-shadow duration-300 ease-in-out hover:shadow-lg"
                />
                <input
                  type="text"
                  value={q.question}
                  onChange={(e) => handleQuestionChange(questionIndex, e)}
                  placeholder="Ingrese la pregunta"
                  className="w-full mb-4 p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#a4cc64] transition-shadow duration-300 ease-in-out hover:shadow-lg"
                />
                {q.options.map((option, optionIndex) => (
                  <input
                    key={optionIndex}
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(questionIndex, optionIndex, e)}
                    placeholder={`Opción ${optionIndex + 1}`}
                    className="w-full mb-3 p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#a4cc64] transition-shadow duration-300 ease-in-out hover:shadow-lg"
                  />
                ))}
                <input
                  type="text"
                  value={q.answer}
                  onChange={(e) => handleAnswerChange(questionIndex, e)}
                  placeholder="Respuesta Correcta"
                  className="w-full mb-4 p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#a4cc64] transition-shadow duration-300 ease-in-out hover:shadow-lg"
                />
              </div>
            ))}
            <button
              onClick={addQuestion}
              className="bg-[#a4cc64] text-white px-6 py-3 rounded-lg hover:bg-[#8bbd4e] transition-colors duration-300 ease-in-out shadow-md"
            >
              Agregar Pregunta
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#f48ca4] text-white px-6 py-3 rounded-lg hover:bg-[#e07b9f] mt-4 transition-colors duration-300 ease-in-out shadow-md"
            >
              Crear Quiz
            </button>
          </div>
          <ListarQuiz quizzes={quizzes} />
        </div>
      </div>
    </div>
  );
};

export default CrearQuiz;
