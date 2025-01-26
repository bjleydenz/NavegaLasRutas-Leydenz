import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeItemFromCart, getTotalPrice, clearCart, getTotalQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image || "default-image.jpg"} alt={item.name} style={{ width: 100 }} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>
              <button onClick={() => removeItemFromCart(item.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Total de productos: {getTotalQuantity()}</p>
        <p>Total: ${getTotalPrice()}</p>
        <button onClick={clearCart} className="clear-cart">
          Vaciar carrito
        </button>
        <button className="checkout">Realizar compra</button>
      </div>
    </div>
  );
};

export default Cart;
