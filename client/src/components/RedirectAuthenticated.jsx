import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RedirectAuthenticated = ({ children }) => {

  const { user, role } = useSelector((state) => state.user);
  
  const isAuthenticated = !!user;

  if (isAuthenticated) {
    switch (role) {
      case 'editor':
        return <Navigate to="/editor-dashboard" replace />;
      case 'creator':
        return <Navigate to="/creator-dashboard" replace />;
      default:
        return <Navigate to="/dashboard" replace />;
    }
  }

  return children;
};

export default RedirectAuthenticated;