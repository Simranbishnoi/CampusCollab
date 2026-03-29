import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Try to restore user from LocalStorage
    const savedUser = localStorage.getItem('campusCollabUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (role, email, name, regNo) => {
    // Phase 1: Validate email based on role
    if (role === 'Student' && !email.endsWith('@vitstudent.ac.in')) {
      alert('Students must use @vitstudent.ac.in email');
      return false;
    } else if ((role === 'Professor' || role === 'Scholar') && !email.endsWith('@vit.ac.in')) {
      alert('Professors and Scholars must use @vit.ac.in email');
      return false;
    }

    const newUser = { role, email, name, regNo: regNo || null };
    setUser(newUser);
    localStorage.setItem('campusCollabUser', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('campusCollabUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
