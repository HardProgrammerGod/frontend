import ProductCard from "../components/ProductCard"
import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "../components/ProductCard"

const mockProducts = [
  {
    id: "1",
    name: "Розовые кружевные",
    description: "Нежные, в стиле baby-doll",
    price: 499,
    image: "/src/assets/imgs/pink_lace.jpg"
  },
  {
    id: "2",
    name: "Черные стринги",
    description: "Минимум ткани — максимум страсти",
    price: 599,
    image: "/src/assets/imgs/black_thong.jpg"
  }
]

const Home = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {mockProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}


const Home = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`)
      setProducts(res.data)
    } catch (error) {
      console.error("Ошибка загрузки товаров:", error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Каталог нижнего белья</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
