import PropTypes from "prop-types";
import '../styles/SearchPage.css';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="buscar"
      value={value}
      onChange={onChange}
      placeholder="Buscar clubs..."
    />
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
