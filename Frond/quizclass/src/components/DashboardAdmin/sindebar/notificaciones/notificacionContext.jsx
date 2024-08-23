import React, { createContext, useState } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const addNotification = (notification) => {
        setNotifications(prevNotifications => [...prevNotifications, { ...notification, id: Date.now() }]);
    };
    

    const removeNotification = (id) => {
        setNotifications(prevNotifications => prevNotifications.filter(notif => notif.id !== id));
    };

    const clearNotifications = () => {
        setNotifications([]);
    };

    return (
        <NotificationContext.Provider value={{ notifications, addNotification, removeNotification, clearNotifications }}>
            {children}
        </NotificationContext.Provider>
    );
};
