// Packages:
import axios from 'axios'

// Constants:
const API_URL = 'http://localhost:3001' // Update this to match your backend URL

// Functions:
const login = async (email: string, password: string) => {
  try {
    // Constants:
    const response = await axios.post(`${API_URL}/login`, { email, password })

    // Return:
    return response.data
  } catch (error) {
    throw new Error('Login failed')
  }
}

// Exports:
export { login }
