import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState('Student');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(role, email, name, regNo);
    if (success) {
      if (role === 'Student') navigate('/student-dashboard');
      else if (role === 'Professor') navigate('/professor-dashboard');
      else navigate('/scholar-dashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>🎓 Campus Collab (VIT)</h1>
        <p>Login to connect, research, and build together.</p>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Select Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="Student">Student</option>
              <option value="Professor">Professor</option>
              <option value="Scholar">Research Scholar</option>
            </select>
          </div>

          <div className="form-group">
            <label>Email ID</label>
            <input 
              type="email" 
              placeholder={role === 'Student' ? "example@vitstudent.ac.in" : "example@vit.ac.in"} 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>

          {role === 'Student' && (
            <div className="form-group">
              <label>Registration Number</label>
              <input 
                type="text" 
                placeholder="e.g. 21BCE0000" 
                value={regNo} 
                onChange={(e) => setRegNo(e.target.value)} 
                required 
              />
            </div>
          )}

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
