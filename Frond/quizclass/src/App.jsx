import React from 'react';
import AppRouter from './routes/AppRoutes';
import { QuizProvider } from './contexts/quizContexts';

function App() {
  return (
    <QuizProvider>
      <AppRouter />
    </QuizProvider>
  );
}

export default App;
