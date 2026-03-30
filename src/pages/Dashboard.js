import React from 'react';
import { useAuth } from '../context/AuthContext';
import StudentDashboard from '../components/dashboards/StudentDashboard';

const Dashboard = () => {
  const { user } = useAuth();

  // Dynamically render specific dashboards based on the user's role
  switch (user?.role) {
    case 'Student':
      return <StudentDashboard />;
    case 'Professor':
      return (
        <div className="page-container">
          <h2>🚧 Professor Dashboard (Coming in Phase 11)</h2>
        </div>
      );
    case 'Scholar':
      return (
        <div className="page-container">
          <h2>🚧 Research Scholar Dashboard (Coming in Phase 12)</h2>
        </div>
      );
    default:
      return (
        <div className="page-container">
          <h2>Invalid Role</h2>
        </div>
      );
  }
};

export default Dashboard;
