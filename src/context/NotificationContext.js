import React, { createContext, useState, useContext } from 'react';

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: 'Professor Smith accepted your collaboration request.',
      type: 'approved', // pending, approved, rejected
      role: 'Professor', 
      isRead: false
    },
    {
      id: 2,
      message: 'New hackathon message from Team Alpha.',
      type: 'info',
      role: 'Student',
      isRead: false
    }
  ]);

  const addNotification = (message, type = 'info', role = 'System') => {
    const newNotification = {
      id: Date.now(),
      message,
      type,
      role,
      isRead: false
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === id ? { ...notif, isRead: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, isRead: true })));
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, markAsRead, markAllAsRead, unreadCount }}>
      {children}
    </NotificationContext.Provider>
  );
};
