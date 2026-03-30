import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useActivity } from '../../context/ActivityContext';
import { FaProjectDiagram, FaMicroscope, FaTrophy, FaHistory } from 'react-icons/fa';
import './Dashboard.css';

const StudentDashboard = () => {
  const { user } = useAuth();
  const { activities } = useActivity();

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <section className="dashboard-header">
        <h1>Welcome Back, {user?.name.split(' ')[0]} 👋</h1>
        <p>Ready to collaborate? Explore projects, research, and hackathons all across campus.</p>
      </section>

      {/* Quick Action Grid */}
      <section className="action-grid">
        <Link to="/projects" className="action-card card-projects">
          <div className="card-icon"><FaProjectDiagram /></div>
          <h3>Find Projects</h3>
          <p>Connect with professors for end-semester or independent study projects.</p>
        </Link>
        
        <Link to="/research" className="action-card card-research">
          <div className="card-icon"><FaMicroscope /></div>
          <h3>Join Research</h3>
          <p>Collaborate with scholars on cutting-edge research opportunities.</p>
        </Link>
        
        <Link to="/hackathons" className="action-card card-hackathons">
          <div className="card-icon"><FaTrophy /></div>
          <h3>Hackathons</h3>
          <p>Discover teammates and build winning projects for upcoming events.</p>
        </Link>
      </section>

      {/* Recent Activity Section */}
      <section className="activity-section">
        <h2><FaHistory style={{ color: '#4facfe' }} /> Recent Activity</h2>
        <div className="activity-list">
          {activities.length > 0 ? (
            activities.map((activity) => (
              <div key={activity.id} className={`activity-item ${activity.status}`}>
                <div className="activity-header">
                  <span className="activity-title">{activity.title}</span>
                  <span className={`activity-status status-${activity.status}`}>
                    {activity.status}
                  </span>
                </div>
                <p className="activity-desc">{activity.description}</p>
                <small style={{ color: '#aaa', fontSize: '0.8rem', marginTop: '5px' }}>{activity.date}</small>
              </div>
            ))
          ) : (
            <p style={{ color: '#888', fontStyle: 'italic' }}>No recent activity to show.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;
