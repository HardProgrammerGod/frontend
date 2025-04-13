import { useEffect, useState } from "react"
import axios from "axios"
import { useAuth } from "../context/AuthContext"

const AdminPanel = () => {
  const { token } = useAuth()
  const [products, setProducts] = useState([])

  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: ""
  })

  const fetchProducts = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`)
    setProducts(res.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleAdd = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/products`,
        newProduct,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      fetchProducts()
      setNewProduct({ title: "", description: "", price: "" })
    } catch (err) {
      alert("Ошибка при добавлении товара")
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Админ-панель</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Название"
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Описание"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Цена"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="border p-2 mr-2"
        />
        <button onClick={handleAdd} className="bg-pink-600 text-white px-4 py-2 rounded">
          Добавить товар
        </button>
      </div>

      <ul>
        {products.map((prod) => (
          <li key={prod._id} className="mb-2 border-b pb-2">
            <h3 className="font-bold">{prod.title}</h3>
            <p>{prod.description}</p>
            <p className="text-sm text-gray-600">{prod.price}₽</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AdminPanel

