import "../styles/Header.css";
import { Link } from 'react-router-dom'; // Importa Link para la navegación

const Header = () => {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav>
        <ul className="nav">
        <li className="nav-item"><Link to="/buscador">Buscar Clubes</Link></li>
          <li className="nav-item">Ver VideoJuegos</li>
        </ul>
      </nav>
      <button className="login">Perfil →</button>
    </header>
  );
};

export default Header;
