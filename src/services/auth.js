import axios from "axios"

const API = import.meta.env.VITE_API_URL || "http://localhost:8000"

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API}/api/login`, credentials)
  return response.data
}

export const registerUser = async (userData) => {
  const response = await axios.post(`${API}/api/register`, userData)
  return response.data
}

