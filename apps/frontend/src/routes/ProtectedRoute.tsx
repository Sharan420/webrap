// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate, RouteProps } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Redirect to login if there is no token
    return <Navigate to="/" />;
  }

  // If there is a token, render the children components
  return <>{children}</>;
};

export default ProtectedRoute;
