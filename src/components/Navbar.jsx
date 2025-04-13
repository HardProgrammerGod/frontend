import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">PantyStore</Link>
      <div className="flex space-x-6">
        <Link to="/" className="hover:underline">Каталог</Link>
        <Link to="/cart" className="hover:underline">Корзина</Link>
        <Link to="/login" className="hover:underline">Войти</Link>
        <Link to="/register" className="hover:underline">Регистрация</Link>
      </div>
    </nav>
  )
}

export default Navbar

