// Packages:
import React from 'react'
import { Navigate } from 'react-router-dom'

// Typescript:
interface ProtectedRouteProps {
  children: React.ReactNode
}

// Functions:
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Constants:
  const token = localStorage.getItem('token')

  if (!token) {
    // Redirect to login if there is no token
    return <Navigate to='/' />
  }

  // If there is a token, render the children components
  // Return:
  return <>{children}</>
}

// Exports:
export default ProtectedRoute
