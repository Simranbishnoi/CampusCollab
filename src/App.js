import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Research from './pages/Research';
import Hackathons from './pages/Hackathons';
import Chat from './pages/Chat';
import Profile from './pages/Profile';

// Layout
import MainLayout from './components/layout/MainLayout';
import { ActivityProvider } from './context/ActivityContext';
import { NotificationProvider } from './context/NotificationContext';
import { ChatProvider } from './context/ChatContext';

// Protected Route Wrapper
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/" />;
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/dashboard" />;
  
  // Wrap protected routes in the MainLayout wrapper to provide Sidebar & Topbar
  return <MainLayout>{children}</MainLayout>;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <NotificationProvider>
          <ActivityProvider>
            <ChatProvider>
              <Routes>
            {/* Public Route */}
            <Route path="/" element={<Login />} />
            
            {/* Protected Routes inside Layout */}
            <Route 
              path="/dashboard" 
              element={<ProtectedRoute><Dashboard /></ProtectedRoute>} 
            />
            <Route 
              path="/projects" 
              element={<ProtectedRoute><Projects /></ProtectedRoute>} 
            />
            <Route 
               path="/research" 
               element={<ProtectedRoute><Research /></ProtectedRoute>} 
            />
            <Route 
               path="/hackathons" 
               element={<ProtectedRoute><Hackathons /></ProtectedRoute>} 
            />
            <Route 
               path="/chat" 
               element={<ProtectedRoute><Chat /></ProtectedRoute>} 
            />
            <Route 
               path="/profile" 
               element={<ProtectedRoute><Profile /></ProtectedRoute>} 
            />

          </Routes>
            </ChatProvider>
          </ActivityProvider>
        </NotificationProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
