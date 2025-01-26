import { useState } from 'react';
import { useCart } from '../context/CartContext';

// eslint-disable-next-line react/prop-types
const ItemCount = ({ stock, product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useCart();

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addItemToCart(product, quantity);
  };

  return (
    <div className="item-count">
      <button onClick={handleDecrement} disabled={quantity <= 1}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrement} disabled={quantity >= stock}>+</button>
      <p>Stock disponible: {stock}</p>
      {quantity > stock && <p style={{ color: 'red' }}>No puedes añadir más de {stock} unidades.</p>}
      <button onClick={handleAddToCart} disabled={stock <= 0 || quantity > stock}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default ItemCount;
