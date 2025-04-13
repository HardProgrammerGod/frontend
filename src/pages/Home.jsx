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

export default Home

