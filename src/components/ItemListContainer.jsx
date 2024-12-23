import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemListContainer.css';
import products from '../data/products';

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ mensaje }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = new Promise((resolve) => {
      setTimeout(() => resolve(products), 1000); 
    });

    fetchData
      .then((data) => {
        setItems(data);
      })
      .catch((error) => console.error("Error al cargar los productos:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="item-list-container">
      <h2>{mensaje}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Precio: ${item.price}</p>
              <Link to={`/item/${item.id}`}>Ver detalle</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemListContainer;
