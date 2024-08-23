import React from 'react';
import AppRouter from './routes/AppRoutes';
import { QuizProvider } from './contexts/quizContexts';
import { AuthProvider } from './AuthContext';


function App() {
  return (
    <AuthProvider>
    <QuizProvider>
      <AppRouter />
    </QuizProvider>
    </AuthProvider>
  );
}

export default App;
