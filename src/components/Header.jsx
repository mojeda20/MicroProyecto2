import "../styles/Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav>
        <ul className="nav">
          <li className="nav-item">Buscar Clubes</li>
          <Link to="/videojuegos" className="nav-link">Ver VideoJuegos</Link>
        </ul>
      </nav>
      <button className="login">Perfil →</button>
    </header>
  );
};

export default Header;
