import { useState } from "react"
import { registerUser } from "../services/auth"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: ""
  })
  const navigate = useNavigate()
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await registerUser(form)
      navigate("/login")
    } catch (err) {
      setError(err.response?.data?.detail || "Ошибка регистрации")
    }
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Регистрация</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["username", "email", "first_name", "last_name", "password"].map(field => (
          <input
            key={field}
            type={field === "password" ? "password" : "text"}
            name={field}
            placeholder={field}
            value={form[field]}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        ))}
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
          Зарегистрироваться
        </button>
      </form>
    </div>
  )
}

export default Register

