/*
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  const mensaje = "¡Bienvenido a nuestra tienda online! Explora nuestros productos.";

  return (
    <Router>
      <CartProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer mensaje={mensaje} />} />
            <Route path="/productos" element={<ItemListContainer mensaje={mensaje} />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  const mensaje = "¡Bienvenido a nuestra tienda online! Explora nuestros productos.";

  return (
    <Router>
      <CartProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer mensaje={mensaje} />} />
            <Route path="/productos" element={<ItemListContainer mensaje={mensaje} />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
