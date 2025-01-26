import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';
import logo from '../assets/logomyplants2.jpg';

const NavBar = () => {
  return (
    <nav className="navbar">
      <img
        src={logo}
        alt="My Plants Logo"
        className="navbar-logo"
        style={{ minWidth: 200, maxWidth: 200 }}
      />
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Inicio
        </NavLink>
        <NavLink to="/productos" className={({ isActive }) => (isActive ? 'active' : '')}>
          Productos
        </NavLink>
        <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contacto
        </NavLink>
      </div>
      <div className="cart-widget">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
