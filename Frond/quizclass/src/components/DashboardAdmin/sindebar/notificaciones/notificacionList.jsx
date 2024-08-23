// src/components/NotificationList.jsx
import React, { useContext } from 'react';
import { NotificationContext } from './notificaciones/notificacionContext'; 
import NotificationItem from './NotificationItem';

const NotificationList = () => {
  const { notifications, markAsRead } = useContext(NotificationContext);

  const handleNotificationClick = (id) => {
    markAsRead(id);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Notificaciones</h2>
      {notifications.length > 0 ? (
        notifications.map(notification => (
          <NotificationItem 
            key={notification.id}
            notification={notification}
            onClick={handleNotificationClick}
          />
        ))
      ) : (
        <p>No hay notificaciones.</p>
      )}
    </div>
  );
};

export default NotificationList;
