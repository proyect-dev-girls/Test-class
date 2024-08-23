// src/components/notificaciones/notificacionContext.jsx
import React, { createContext, useState } from 'react';

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  // Estado inicial con notificaciones de prueba
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      recipient: 'student',
      studentName: 'Juan Pérez',
      message: 'Tu quiz ha sido calificado.',
      date: new Date().toISOString(),
    },
    {
      id: '2',
      recipient: 'student',
      studentName: 'Ana Gómez',
      message: 'Nuevo quiz disponible para la próxima clase.',
      date: new Date().toISOString(),
    },
    {
      id: '3',
      recipient: 'student',
      studentName: 'Carlos Martínez',
      message: 'Tu respuesta al quiz ha sido enviada correctamente.',
      date: new Date(new Date().getTime() - 3600 * 1000).toISOString(),
    },
    {
      id: '4',
      recipient: 'student',
      studentName: 'María López',
      message: 'Hay una actualización en el material del curso, revisa el nuevo documento.',
      date: new Date(new Date().getTime() - 86400 * 1000).toISOString(),
    },
    {
      id: '5',
      recipient: 'student',
      studentName: 'Pedro Gómez',
      message: 'Recuerda que el próximo quiz se realizará el lunes. ¡Prepárate!',
      date: new Date(new Date().getTime() - 259200 * 1000).toISOString(),
    },
  ]);

  return (
    <NotificationContext.Provider value={{ notifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
