import React from 'react';

const MessageAlert = ({ message, type }) => {
  const getAlertClass = () => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-700';
      case 'error':
        return 'bg-red-100 text-red-700';
      case 'info':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className={`p-4 rounded-lg shadow-md ${getAlertClass()}`}>
      <p className="font-semibold">{message}</p>
    </div>
  );
};

export default MessageAlert;
