import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNotification } from '../../context/NotificationContext';
import { FaBell, FaSignOutAlt, FaUserCircle, FaCheck, FaCheckDouble } from 'react-icons/fa';

const Topbar = () => {
  const { user, logout } = useAuth();
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotification();
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="topbar">
      <div className="topbar-search">
        {/* Search bar placeholder */}
        <input type="text" placeholder="Search..." />
      </div>
      <div className="topbar-actions">
        
        <div className="notification-wrapper" ref={dropdownRef}>
          <button className="icon-btn notification-btn" onClick={() => setShowNotifications(!showNotifications)}>
            <FaBell />
            {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
          </button>
          
          {showNotifications && (
            <div className="notification-dropdown">
              <div className="notification-header">
                <h3>Notifications</h3>
                {unreadCount > 0 && (
                  <button onClick={markAllAsRead} className="mark-all-read" title="Mark all as read">
                    <FaCheckDouble />
                  </button>
                )}
              </div>
              <div className="notification-list">
                {notifications.length > 0 ? (
                  notifications.map(notif => (
                    <div 
                      key={notif.id} 
                      className={`notification-item ${notif.isRead ? 'read' : 'unread'}`}
                      onClick={() => !notif.isRead && markAsRead(notif.id)}
                    >
                      <div className={`notification-icon type-${notif.type}`}></div>
                      <div className="notification-content">
                        <p>{notif.message}</p>
                        <small>{notif.role}</small>
                      </div>
                      {!notif.isRead && <FaCheck className="mark-read-icon" />}
                    </div>
                  ))
                ) : (
                  <p className="no-notifications">No new notifications</p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="user-profile">
          <FaUserCircle className="profile-icon" />
          <span className="user-name">{user?.name || "User"} ({user?.role})</span>
          <button className="logout-btn icon-btn" onClick={logout} title="Logout">
            <FaSignOutAlt />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
