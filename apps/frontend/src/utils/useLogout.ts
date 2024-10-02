// Packages:
import { useNavigate } from 'react-router-dom'

// Functions:
const useLogout = () => {
  // Constants:
  const navigate = useNavigate()

  // Functions:
  const logout = () => {
    localStorage.removeItem('token') // Remove token from localStorage
    navigate('/') // Redirect to the login page or home
  }

  // Return:
  return logout
}

// Exports:
export { useLogout }
