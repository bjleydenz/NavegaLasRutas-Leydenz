// src/components/ItemDetailContainer.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import products from '../data/products'; // Importa los productos

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de llamada a API
    const fetchItem = new Promise((resolve) => {
      setTimeout(() => {
        const foundItem = products.find((product) => product.id === parseInt(id, 10));
        resolve(foundItem);
      }, 2100); // 2 segundos de retardo
    });

    fetchItem
      .then((data) => {
        setItem(data);
      })
      .catch((error) => console.error("Error al cargar el producto:", error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="item-detail-container">
      {loading ? (
        <p>Cargando detalle del producto...</p>
      ) : item ? (
        <>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Precio: ${item.price}</p>
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
