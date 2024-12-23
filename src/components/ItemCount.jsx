import { useState } from 'react';
// eslint-disable-next-line react/prop-types
const ItemCount = ({ stock }) => {
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div className="item-count">
      <button onClick={handleDecrement}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>+</button>
      <p>Stock disponible: {stock}</p>
      <button disabled={stock <= 0}>Añadir al carrito</button>
    </div>
  );
};

export default ItemCount;