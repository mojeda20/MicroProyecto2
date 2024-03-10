import Header from './Header'; // Importa tu componente Header
import Buscador from './components/Buscador'; // Importa tu componente de búsqueda

const BuscadorPage = () => {
  return (
    <div>
      <Header />
      <h1>Búsqueda de Clubes</h1>
      <Buscador />
    </div>
  );
};

export default BuscadorPage;
