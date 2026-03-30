import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="page-container">
      <h1>Welcome back, {user?.name}!</h1>
      <p>This is the {user?.role} dashboard.</p>
      
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
        <h3>Overview</h3>
        <p>Your activity summary will appear here.</p>
      </div>
    </div>
  );
};

export default Dashboard;
