import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div className="border rounded-xl shadow-md p-4 hover:shadow-lg transition flex flex-col">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-sm text-gray-500">{product.description}</p>
      <p className="mt-2 font-semibold">{product.price}₴</p>
      <div className="mt-auto space-y-2">
        <Link to={`/product/${product.id}`} className="block bg-pink-600 text-white py-1 px-3 rounded hover:bg-pink-700">
          Подробнее
        </Link>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-black text-white py-1 px-3 rounded hover:bg-gray-800"
        >
          В корзину
        </button>
      </div>
    </div>
  )
}

export default ProductCard
