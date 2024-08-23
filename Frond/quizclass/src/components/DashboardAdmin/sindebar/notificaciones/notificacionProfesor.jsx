// src/components/DashboardAdmin/sindebar/notificaciones/notificacionProfesor.jsx
import React, { useContext } from 'react';
import { NotificationContext } from '../notificaciones/notificacionContext';

const Notificaciones = () => {
  const { notifications } = useContext(NotificationContext);

  // Filtrar notificaciones que son para los alumnos
  const studentNotifications = notifications.filter(notif => notif.recipient === 'student');

  return (
    <div className="p-4 bg-rosa ">
      <h2 className="text-3xl font-bold mb-4">Notificaciones de Alumnos</h2>
      {studentNotifications.length === 0 ? (
        <p>No hay notificaciones en este momento.</p>
      ) : (
        <ul className="space-y-4">
          {studentNotifications.map((notif) => (
            <li key={notif.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p><strong>Alumno:</strong> {notif.studentName}</p>
              <p><strong>Mensaje:</strong> {notif.message}</p>
              <p><strong>Fecha:</strong> {new Date(notif.date).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notificaciones;
