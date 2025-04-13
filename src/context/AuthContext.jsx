import { createContext, useContext, useState, useEffect } from "react"
import { loginUser } from "../services/auth"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem("token"))
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      const userData = JSON.parse(localStorage.getItem("user"))
      if (userData) {
        setUser(userData)
      }
    }
  }, [token])

  const login = async (credentials) => {
    try {
      const response = await loginUser(credentials)
      setToken(response.access_token)
      localStorage.setItem("token", response.access_token)
      localStorage.setItem("user", JSON.stringify({ email: credentials.email }))
      setUser({ email: credentials.email })
      navigate("/")
    } catch (err) {
      throw new Error("Неверный логин или пароль")
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/login")
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

