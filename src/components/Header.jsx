import "../styles/Header.css";
import { Link } from "react-router-dom";
import logoImage from "../assets/logovideogames.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/landing">
          <img src={logoImage} alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul className="nav">
          <Link to="/searchPage" className="nav-link">
            Buscar Clubes
          </Link>
          <Link to="/videojuegos" className="nav-link">
            Ver VideoJuegos
          </Link>
        </ul>
      </nav>
      <Link to="/profile" className="profile-link">
        <button className="login">Perfil →</button>
      </Link>
    </header>
  );
};

export default Header;
