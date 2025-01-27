/*
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

// Hook personalizado para acceder al contexto
export const useCart = () => {
  return useContext(CartContext);
};

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
  const addItemToCart = (product, selectedQuantity) => {
    // Validación de producto
    if (!product || !product.id || !product.stock || !product.price) {
      console.error("Producto inválido", product);
      return; // Si el producto no es válido, no se agrega al carrito
    }

    // Verificar que la cantidad seleccionada no exceda el stock
    if (selectedQuantity <= 0 || selectedQuantity > product.stock) {
      console.error("Cantidad seleccionada no válida");
      return; // Si la cantidad es mayor que el stock disponible o menor o igual a 0, no se agrega al carrito
    }

    // Actualiza el carrito con el nuevo producto o cantidad
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.id === product.id);
      if (productIndex === -1) {
        // Si el producto no está en el carrito, lo agregamos con la cantidad seleccionada
        return [...prevCart, { ...product, quantity: selectedQuantity }];
      } else {
        // Si el producto ya está en el carrito, actualizamos la cntidad
        const updatedCart = [...prevCart];
        updatedCart[productIndex].quantity += selectedQuantity;
        return updatedCart;
      }
    });
  };

  // Función para eliminar productos del carrito
  const removeItemFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Función para limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Función para obtener la cantidad total de productos en el carrito
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Función para obtener el precio total del carrito
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        getTotalQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
*/
// CartContext.jsx
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

// Hook personalizado para acceder al contexto
export const useCart = () => {
  return useContext(CartContext);
};

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
  const addItemToCart = (product, selectedQuantity) => {
    if (!product || !product.id || !product.stock || !product.price) {
      console.error("Producto inválido", product);
      return;
    }

    if (selectedQuantity <= 0 || selectedQuantity > product.stock) {
      alert("Cantidad seleccionada no válida. No puedes agregar más de " + product.stock + " unidades.");
      return;
    }

    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.id === product.id);

      if (productIndex === -1) {
        return [...prevCart, { ...product, quantity: selectedQuantity }];
      } else {
        const updatedCart = [...prevCart];
        const newQuantity = updatedCart[productIndex].quantity + selectedQuantity;
        // Asegurarse de que la cantidad no exceda el stock
        if (newQuantity > product.stock) {
          alert("No puedes agregar más de " + product.stock + " unidades.");
          return prevCart;
        } else {
          updatedCart[productIndex].quantity = newQuantity;
          return updatedCart;
        }
      }
    });
  };

  // Función para eliminar productos del carrito
  const removeItemFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Función para limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Función para obtener la cantidad total de productos en el carrito
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Función para obtener el precio total del carrito
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        getTotalQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
