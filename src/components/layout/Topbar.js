import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { FaBell, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';

const Topbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="topbar">
      <div className="topbar-search">
        {/* Search bar placeholder */}
        <input type="text" placeholder="Search..." />
      </div>
      <div className="topbar-actions">
        <button className="icon-btn">
          <FaBell />
        </button>
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
