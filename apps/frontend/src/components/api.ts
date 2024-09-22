// src/api.ts
import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Update this to match your backend URL

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};
