import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  FaHome, 
  FaProjectDiagram, 
  FaMicroscope, 
  FaTrophy, 
  FaComments, 
  FaUser 
} from 'react-icons/fa';

const Sidebar = () => {
  const { user } = useAuth(); // We can conditionally render links based on user.role

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>CampusCollab</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaHome className="nav-icon" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaProjectDiagram className="nav-icon" /> Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/research" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaMicroscope className="nav-icon" /> Research
            </NavLink>
          </li>
          <li>
            <NavLink to="/hackathons" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaTrophy className="nav-icon" /> Hackathons
            </NavLink>
          </li>
          <li>
            <NavLink to="/chat" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaComments className="nav-icon" /> Chat
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FaUser className="nav-icon" /> Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
