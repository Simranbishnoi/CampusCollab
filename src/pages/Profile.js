import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="page-container">
      <h1>Your Profile</h1>
      
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
        <h3>Profile Details</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}><strong>Name:</strong> {user?.name}</li>
          <li style={{ marginBottom: '10px' }}><strong>Role:</strong> {user?.role}</li>
          <li style={{ marginBottom: '10px' }}><strong>Email:</strong> {user?.email}</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
