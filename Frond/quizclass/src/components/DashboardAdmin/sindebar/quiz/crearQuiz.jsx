import React, { useState } from 'react';
import { MdUpload } from 'react-icons/md'; 
import ListarQuiz from './ListQuiz';
import Sidebar from '../Sidebar';

//componete principal para crear las quiz
const CrearQuiz = () => {
    //estado para las preguntas de quiz
  const [questions, setQuestions] = useState([{ question: '', options: ['', '', ''], answer: '', image: '' }]);
  //estado para guardar los quiz
  const [quizzes, setQuizzes] = useState([]);

  //manjea el cambio en el texto de las preguntas
  const handleQuestionChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index].question = event.target.value;
    setQuestions(newQuestions);
  };
 //maneja el cambio en las opciones de una pregunta
  const handleOptionChange = (questionIndex, optionIndex, event) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = event.target.value;
    setQuestions(newQuestions);
  };
//maneja el cambio en  la respuesta correcta de una pregunta
  const handleAnswerChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index].answer = event.target.value;
    setQuestions(newQuestions);
  };
 //maneja el cambio en la imagen de una pregunta.
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
  //agrega una nueva prgunta al array de preguntas
  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', ''], answer: '', image: '' }]);
  };

  // Envía las preguntas como quizzes y reinicia el estado de preguntas
  const handleSubmit = () => {
    setQuizzes(questions);
    setQuestions([{ question: '', options: ['', '', ''], answer: '', image: '' }]);
  };

  return (
    <div className="flex">
      <div className="w-64 bg-white text-gray-800 shadow-lg border border-[#a4cc64]">
       {/* barra lateral sindebar */}
        <Sidebar />
      </div>
      <div className="flex-1 p-8 bg-gradient-to-r from-[#f48ca4] to-[#a4cc64]">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-6 bg-white rounded-lg shadow-lg border border-[#a4cc64] mb-8 mx-auto lg:mx-0">
            <h1 className="text-3xl font-bold mb-6 text-[#f48ca4]">Crear Quiz 📝</h1>
              {/* Mapea y renderiza cada pregunta */}
            {questions.map((q, questionIndex) => (
              <div
                key={questionIndex}
                className="bg-white p-6 mb-4 rounded-lg shadow-md border border-[#a4cc64] transition-transform transform hover:scale-105"
              >
                <div className="mb-4 flex flex-col items-center">
                  {q.image ? (
                    <img
                      src={q.image}
                      alt="Imagen de la pregunta"
                      className="w-24 h-24 object-cover rounded-md border border-[#a4cc64] shadow-lg mb-4"
                    />
                  ) : (
                    <label className="flex flex-col items-center cursor-pointer">
                      <MdUpload className="text-[#a4cc64] text-4xl mb-2" />
                      <span className="text-gray-600">Sube una imagen</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(questionIndex, e)}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
                <input
                  type="text"
                  value={q.question}
                  onChange={(e) => handleQuestionChange(questionIndex, e)}
                  placeholder="Ingrese la pregunta"
                  className="form-control w-full mb-4 p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#a4cc64] transition-shadow duration-300 ease-in-out hover:shadow-lg"
                />
                {q.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="mb-3">
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => handleOptionChange(questionIndex, optionIndex, e)}
                      placeholder={`Opción ${optionIndex + 1}`}
                      className="form-control w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#a4cc64] transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    />
                  </div>
                ))}
                <input
                  type="text"
                  value={q.answer}
                  onChange={(e) => handleAnswerChange(questionIndex, e)}
                  placeholder="Respuesta Correcta"
                  className="form-control w-full mb-4 p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#a4cc64] transition-shadow duration-300 ease-in-out hover:shadow-lg"
                />
              </div>
            ))}
            {/* Botón para agregar una nueva pregunta */}
            <button
              onClick={addQuestion}
              className="bg-[#a4cc64] text-white px-6 py-3 rounded-lg hover:bg-[#8bbd4e] transition-colors duration-300 ease-in-out shadow-md"
            >
              Agregar Pregunta
            </button>
             {/* Botón para crear el quiz */}
            <button
              onClick={handleSubmit}
              className="bg-[#f48ca4] text-white px-6 py-3 rounded-lg hover:bg-[#e07b9f] mt-4 transition-colors duration-300 ease-in-out shadow-md"
            >
              Crear Quiz
            </button>
          </div>
          {/* Componente para listar los quizzes creados */}
          <ListarQuiz quizzes={quizzes} />
        </div>
      </div>
    </div>
  );
};

export default CrearQuiz;
