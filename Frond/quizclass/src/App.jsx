import React from 'react';
import AppRouter from './routes/AppRoutes';
import { QuizProvider } from './contexts/quizContexts';
import { AuthProvider } from './components/auth/AuthContext';
import { NotificationProvider } from './components/DashboardAdmin/sindebar/notificaciones/notificacionContext'; // Importa tu nuevo contexto


function App() {
  return (
    <NotificationProvider>
    <AuthProvider>
    <QuizProvider>
      <AppRouter />
    </QuizProvider>
    </AuthProvider>
    </NotificationProvider>
  );
}

export default App;
