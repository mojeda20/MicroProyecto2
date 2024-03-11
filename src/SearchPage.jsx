import { useState, useEffect } from "react";
import useClubes from "../src/Hooks/useClubes";
import useDebounce from "../src/Hooks/useDebonce";
import ClubList from "../src/components/ClubsList";
import SearchBar from "../src/components/SearchBar";
//import useAuth from "../src/Hooks/useAuth";
import "../styles/SearchPage.css";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredClubes, setFilteredClubes] = useState([]);
  const clubes = useClubes(); // Obtiene todos los clubes de Firestore
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // Debounce searchTerm

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Filtrar clubes por nombre basándose en el término de búsqueda
      const filtered = clubes.filter((club) =>
        club.nombre.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setFilteredClubes(filtered);
    } else {
      setFilteredClubes(clubes);
    }
  }, [debouncedSearchTerm, clubes]);

  return (
    <div className="p-4">
      <div className="search-bar">
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="club-list">
        <ClubList clubes={filteredClubes} />
      </div>
    </div>
  );
};

export default SearchPage;
