import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import './Layout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="layout-content">
        <Topbar />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
