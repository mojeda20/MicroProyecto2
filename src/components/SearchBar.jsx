import PropTypes from "prop-types";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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