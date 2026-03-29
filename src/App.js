import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';

// Placeholder Dashboards for Phase 1 verification
const StudentDashboard = () => <div><h2>Student Dashboard</h2><LogoutButton/></div>;
const ProfessorDashboard = () => <div><h2>Professor Dashboard</h2><LogoutButton/></div>;
const ScholarDashboard = () => <div><h2>Research Scholar Dashboard</h2><LogoutButton/></div>;

const LogoutButton = () => {
  const { logout } = useAuth();
  return <button onClick={logout} style={{marginTop: '20px', padding: '10px'}}>Logout</button>;
};

// Protected Route Wrapper
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/" />;
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/" />;
  return children;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route path="/student-dashboard" element={
            <ProtectedRoute allowedRoles={['Student']}>
               <StudentDashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/professor-dashboard" element={
            <ProtectedRoute allowedRoles={['Professor']}>
               <ProfessorDashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/scholar-dashboard" element={
            <ProtectedRoute allowedRoles={['Scholar']}>
               <ScholarDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
