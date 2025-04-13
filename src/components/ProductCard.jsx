import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-sm text-gray-500">{product.description}</p>
      <p className="mt-2 font-semibold">{product.price}₴</p>
      <Link to={`/product/${product.id}`} className="mt-4 inline-block bg-pink-600 text-white py-1 px-3 rounded-lg hover:bg-pink-700">
        Подробнее
      </Link>
    </div>
  )
}

export default ProductCard

