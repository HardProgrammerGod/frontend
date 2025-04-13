import { useCart } from "../context/CartContext"

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart()

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Корзина</h1>
      {cartItems.length === 0 ? (
        <p>Корзина пуста 😢</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li key={item.id} className="border p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p>Кол-во: {item.quantity}</p>
                  <p>Цена: {item.price}₴</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Удалить
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-xl font-bold">Итого: {total}₴</div>
          <button onClick={clearCart} className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Очистить корзину
          </button>
        </>
      )}
    </div>
  )
}

export default Cart

