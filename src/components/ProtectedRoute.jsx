import { useState } from 'react';
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  
  console.log('ProtectedRoute - checking token:', token);

  if (!token) {
    console.log('No token found, redirecting to login');
    return <Navigate to="/login" replace />;
  }

  console.log('Token found, rendering protected content');
  return children;
};

export default ProtectedRoute;