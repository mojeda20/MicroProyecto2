import "../styles/Header.css";
import logoImage from "../assets/logovideogames.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
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
