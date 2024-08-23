import React, { createContext, useState, useContext } from 'react';

 export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState([]);

  const addQuiz = (newQuiz) => {
    setQuizzes((prevQuizzes) => [...prevQuizzes, newQuiz]);
  };

  return (
    <QuizContext.Provider value={{ quizzes, addQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
