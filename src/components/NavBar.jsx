import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';
import logo from '../assets/logomyplants2.jpg';

const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="My Plants Logo" style={{ minWidth: 200, maxWidth: 200 }} />
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
      <div className="cart-widget">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;