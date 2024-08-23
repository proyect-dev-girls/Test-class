// src/components/NotificationItem.jsx
import React from 'react';

const NotificationItem = ({ notification, onClick }) => {
  const handleClick = () => {
    onClick(notification.id);
  };

  return (
    <div 
      className={`p-4 mb-2 rounded-lg border ${notification.read ? 'bg-gray-100' : 'bg-white border-red-500'}`}
      onClick={handleClick}
    >
      <p className="font-semibold">{notification.type}</p>
      <p>{notification.message}</p>
      <p className="text-sm text-gray-500">{new Date(notification.timestamp).toLocaleString()}</p>
    </div>
  );
};

export default NotificationItem;
