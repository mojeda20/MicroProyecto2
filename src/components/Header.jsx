import "../styles/Header.css";
import logoImage from "../assets/logovideogames.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <nav>
        <ul className="nav">
          <li className="nav-item">Buscar Clubes</li>
          <li className="nav-item">Ver VideoJuegos</li>
        </ul>
      </nav>
      <button className="login">Perfil →</button>
    </header>
  );
};

export default Header;
